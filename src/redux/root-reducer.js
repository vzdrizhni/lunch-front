import { combineReducers } from 'redux'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from "./user/user.reducer";
import menuReducer from './menu/menu.reducer';
import orderReducer from './Order/order.reducer';
import triggerReducer from './trigger/trigger.reducer';
import dateReducer from './date/date.reducer';
import allItemsReducer from './allItemsTrigger/allItemstriggerReducer';
import notificationsReducer from './notifications/notifications.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'order', 'menu', 'notifications']
}

const rootReducer = combineReducers({
    user: userReducer,
    menu: menuReducer,
    order: orderReducer,
    trigger: triggerReducer,
    date: dateReducer,
    allItems: allItemsReducer,
    notifications: notificationsReducer,
})

export default persistReducer(persistConfig, rootReducer)