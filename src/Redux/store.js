import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './reducers/loginReducer'
import { userReducer } from './reducers/userReducer'
import storage from 'redux-persist/lib/storage'
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist'

const rootPersistConfig = {
    key: 'root',
    storage: storage,
}

const userPersistConfig = {
    key: 'user',
    storage: storageSession,
}

const rootReducer = combineReducers({
    login: loginReducer,
    user: persistReducer(userPersistConfig, userReducer),
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
