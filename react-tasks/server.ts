import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { store } from './src/store/store.js';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const template = fs.readFileSync(path.resolve('dist/client/index.html'), 'utf-8');

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const preloadedState = store.getState();

      const templateWithState = template.replace(
        `<!--ssr-redux-preloaded-state-->`,
        `<script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
      )} </script>`
      );

      const htmlParts = templateWithState.split('<!--ssr-outlet-->');

      res.setHeader('content-type', 'text/html');

      res.write(htmlParts[0]);
      const stream = render(url, {
        onShellReady() {
          stream.pipe(res);
        },
        onShellError() {
          res.status(500).send('<h1>Something went wrong</h1>');
        },
        onAllReady() {
          res.write(htmlParts[1]);
          res.end();
        },
        onError(err: Error) {
          res.status(500).send(`<h1>Something went wrong: ${err.message}</h1>`);
        },
      });
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(5173, () => {
    console.log('ssr launched at port 5173');
  });
}

createServer();
