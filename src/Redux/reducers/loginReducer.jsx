import { createSlice } from '@reduxjs/toolkit'

const loginState = {
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

        signUpSuccess: (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
        },
        signUpFail: (state, action) => {
            state.error = action.payload.message
        },
    },
})

export const {
    loginSuccess,
    loginFail,
    logoutSuccess,
    signUpSuccess,
    signUpFail,
} = loginSlice.actions
export const loginReducer = loginSlice.reducer
