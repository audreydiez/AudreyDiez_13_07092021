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
            state.token = token
        },
        setUser: (state, user) => {
            state.user = user.payload
        },
        updateUser: (state, user) => {
            state.user.firstName = user.payload.firstName
            state.user.lastName = user.payload.lastName
        },
        logOut: (state) => {
            state.connected = false
            state.token = 0
            state.user = ''
        }
    }
})

// Action creators are generated for each case reducers function
export const { logIn, logOut, setUser, updateUser } = userAuthSlice.actions

export default userAuthSlice.reducer
