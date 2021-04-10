import { combineReducers } from 'redux'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from "./user/user.reducer";
import menuReducer from './menu/menu.reducer';
import orderReducer from './Order/order.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'order']
}

const rootReducer = combineReducers({
    user: userReducer,
    menu: menuReducer,
    order: orderReducer
})

export default persistReducer(persistConfig, rootReducer)