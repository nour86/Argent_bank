import { createSlice } from '@reduxjs/toolkit'

const userState = {
    userName: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        updateUserName: (state, action) => {
            state.userName = action.payload
        },
    },
})

export const { updateUserName } = userSlice.actions
export const userReducer = userSlice.reducer
