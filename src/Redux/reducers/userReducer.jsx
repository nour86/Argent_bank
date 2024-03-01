import { createSlice } from '@reduxjs/toolkit'

const userState = {
    firstName: '',
    lastName: '',
    userName: '',
    error: null,
    isRemembered: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        userSuccess: (state, action) => {
            state.userName = action.payload.body.userName
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
            state.error = null
            state.isRemembered = true
        },
        userFail: (state, action) => {
            state.error = action.payload.message
            state.isRemembered = false
        },
        userUpdateSuccess: (state, action) => {
            state.error = null
            state.userName = action.payload.body.userName
            state.isRemembered = true
        },
        userReset: (state) => {
            return userState
        },
    },
})

export const { userSuccess, userUpdateSuccess, userFail, userReset } =
    userSlice.actions
export const userReducer = userSlice.reducer
