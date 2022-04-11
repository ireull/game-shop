import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>,

);

