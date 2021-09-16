import { createSlice } from '@reduxjs/toolkit'

export const userAuthSlice = createSlice({
    name: 'userAuthReducer',
    initialState: {
        connected: false,
        token: 0,
        user: ''
    },
    reducers: {
        logIn: (state, token) => {
            state.connected = true
        },
        setUser: (state, user) => {
            state.user = user.payload
        },
        logOut: (state) => {
            state.connected = false
            state.token = 0
            state.user = ''
        }
    }
})

// Action creators are generated for each case reducers function
export const { logIn, logOut, setUser } = userAuthSlice.actions

export default userAuthSlice.reducer
