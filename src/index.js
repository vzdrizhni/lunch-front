import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
      <HashRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </HashRouter>
  </Provider>,
  document.getElementById('root')
);
