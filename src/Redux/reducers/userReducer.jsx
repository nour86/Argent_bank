import { createSlice } from '@reduxjs/toolkit'

const userState = {
    info: {
        password: '',
        userName: '',
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        updateUserName: (state, action) => {
            state.info.userName = action.payload
        },
    },
})

export const { updateUserName } = userSlice.actions
export const userReducer = userSlice.reducer
