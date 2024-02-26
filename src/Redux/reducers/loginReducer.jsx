import { createSlice } from '@reduxjs/toolkit'

const loginState = {
    /**in case of page refresh, isAuth will take value stored in localStorage */
    isAuth: JSON.parse(window.localStorage.getItem('ArgentBank'))?.token
        ? true
        : false,
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
