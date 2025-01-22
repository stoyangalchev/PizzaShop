import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import store from './store/store';
import { SpeedInsights } from "@vercel/speed-insights/next";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <SpeedInsights>
      <App />
    </SpeedInsights>
  </Provider>
);