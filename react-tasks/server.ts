import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { store } from './src/store/store.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  app.use(vite.middlewares);

  app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

      // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
      //    and also applies HTML transforms from Vite plugins, e.g. global
      //    preambles from @vitejs/plugin-react
      template = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      // Grab the initial state from our Redux store
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
          res.status(500).send('<h1>Something went wrong</h1>');
        },
      });
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back
      // to your actual source code.
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(5173, () => {
    console.log('ssr launched at port 5173');
  });
}

createServer();
