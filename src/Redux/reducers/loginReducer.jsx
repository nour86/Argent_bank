import { createSlice } from '@reduxjs/toolkit'

const loginState = {
    /**in case of page refresh, isAuth will take value stored in localStorage */
    isAuth: false,
    error: null,
    token: '',
    email: '',
    password: '',
}

const loginSlice = createSlice({
    name: 'login',
    initialState: loginState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuth = true
            state.error = null
            state.token = action.payload.body.token
            state.email = action.payload.body.email
            state.password = action.payload.body.password
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
