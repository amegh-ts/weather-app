import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'weatherapp',
    initialState: {
        userInfo: []
    },
    reducers: {
        loginUser: (state, action) => {
            state.userInfo.push(action.payload)
        },

        logoutUser: (state) => {
            state.userInfo = []
        }
    }
})

export const { loginUser, logoutUser } = user.actions
export default user.reducer