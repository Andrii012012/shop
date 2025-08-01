import './utils/styles/fonts.scss';
import { createRoot } from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

import "overlayscrollbars/styles/overlayscrollbars.css";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
