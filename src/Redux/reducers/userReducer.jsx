import { createSlice } from '@reduxjs/toolkit'

const userState = {
    firstName: '',
    lastName: '',
    userName: 'user',
    error: null,
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
        },
        userFail: (state, action) => {
            state.error = action.payload.message
        },
        userUpdateSuccess: (state, action) => {
            state.error = null
            state.userName = action.payload.body.userName
        },
        userReset: (state) => {
            return userState
        },
    },
})

export const { userSuccess, userUpdateSuccess, userFail, userReset } =
    userSlice.actions
export const userReducer = userSlice.reducer
