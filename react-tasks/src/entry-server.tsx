import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.css';

export function render(url: string, opts: ReactDOMServer.RenderToPipeableStreamOptions) {
  const stream = ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
}
