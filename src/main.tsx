import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { store } from 'store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './styles/index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
} else {
  console.error('Root element not found');
}
