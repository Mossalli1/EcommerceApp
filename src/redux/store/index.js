import { createStore, applyMiddleware } from 'redux'
import {  persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import productReducer from '../reducer/productReducer'
const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, productReducer)
export const store = createStore(persistedReducer, applyMiddleware(createLogger()))
export const persistor = persistStore(store)

