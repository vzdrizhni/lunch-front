import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from "./root-reducer";
import { persistStore } from 'redux-persist'

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
