import { createSlice } from '@reduxjs/toolkit'

export const userAuthSlice = createSlice({
    name: 'userAuthReducer',
    initialState: {
        connected: false,
        token: 0
    },
    reducers: {
        logIn: (state, token) => {
            state.connected = true
            state.token = token
        },
        setUser: (state, user) => {
            state.user = user
        },
        logOut: (state) => {
            state.connected = false
            state.token = 0
            state.user = null
        }
    }
})

// Action creators are generated for each case reducer function
export const { logIn, logOut, setUser } = userAuthSlice.actions

export default userAuthSlice.reducer
