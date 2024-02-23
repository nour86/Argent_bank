import { createSlice } from '@reduxjs/toolkit'

const userState = {
    isRemembered: false,
    info: {
        password: '',
        userName: '',
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        rememberMe: (state) => {
            state.isRemembered = !state.isRemembered
        },
        updateUserName: (state, action) => {
            state.info.userName = action.payload
        },
    },
})

export const { rememberMe, updateUserName } = userSlice.actions
export const userReducer = userSlice.reducer
