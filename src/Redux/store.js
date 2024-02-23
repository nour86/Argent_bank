import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './reducers/loginReducer'
import { userReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store
