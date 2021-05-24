import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ActionCableProvider } from "react-actioncable-provider";
import { API_WS_ROOT } from "./constants/index";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ActionCableProvider url={API_WS_ROOT}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ActionCableProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
