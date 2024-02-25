import { createSlice } from '@reduxjs/toolkit'

const loginState = {
    isAuth: JSON.parse(window.localStorage.getItem('ArgentBank'))?.isAuth,
    error: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: loginState,
    reducers: {
        loginSuccess: (state) => {
            state.isAuth = true
            state.error = null
        },
        loginFail: (state, action) => {
            state.isAuth = false
            state.error = action.payload
        },
        logoutSuccess: (state) => {
            state.isAuth = false
            state.error = null
        },
    },
})

export const { loginSuccess, loginFail, logoutSuccess } = loginSlice.actions
export const loginReducer = loginSlice.reducer
