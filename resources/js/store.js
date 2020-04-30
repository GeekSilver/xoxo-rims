import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';//defaults to local storage for web

import getRimsReducer from './reducers/getRimsReducer';
import cartReducer from './reducers/cartReducer';
import postRimReducer from './reducers/postRimReducer';

import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'cart',
    storage
};

const persistCartReducer = persistReducer(persistConfig, cartReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    combineReducers({getRimsReducer, cartReducer:persistCartReducer, postRimReducer}),
     {} ,
     composeEnhancers(
        applyMiddleware(logger, thunk)
     )
     );

export const persistor = persistStore(store);

export default store;
