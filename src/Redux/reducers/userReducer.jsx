import { createSlice } from '@reduxjs/toolkit'

const userState = {
    email: '',
    firstName: '',
    lastName: '',
    userName: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        userSuccess: (state, action) => {
            state.email = action.payload.body.email
            state.userName = action.payload.body.userName
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
        },
        userFail: (state, action) => {},
        updateUserName: (state, action) => {},
    },
})

export const { updateUserName, userSuccess, userFail } = userSlice.actions
export const userReducer = userSlice.reducer
