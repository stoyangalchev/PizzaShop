import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import store from './store/store';
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);