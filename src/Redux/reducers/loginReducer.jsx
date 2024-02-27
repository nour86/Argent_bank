import { createSlice } from '@reduxjs/toolkit'

const loginState = {
    /**in case of page refresh, isAuth will take value stored in localStorage */
    isAuth: JSON.parse(window.localStorage.getItem('ArgentBank'))?.token
        ? true
        : false,
    error: null,
    token: JSON.parse(window.localStorage.getItem('ArgentBank'))?.token,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: loginState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuth = true
            state.error = null
            state.token = action.payload
        },
        loginFail: (state, action) => {
            state.isAuth = false
            state.error = action.payload
        },
        logoutSuccess: (state) => {
            state.isAuth = false
            state.error = null
            state.token = ''
        },
    },
})

export const { loginSuccess, loginFail, logoutSuccess } = loginSlice.actions
export const loginReducer = loginSlice.reducer
