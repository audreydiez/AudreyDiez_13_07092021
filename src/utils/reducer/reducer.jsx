import { createSlice } from '@reduxjs/toolkit'

export const userAuthSlice = createSlice({
    name: 'userAuthReducer',
    initialState: {
        connected: false,
        token: null
    },
    reducers: {
        logIn: (state, token) => {
            state.connected = true
            state.token = token
        },
        logOut: (state) => {
            state.connected = false
            state.token = null
        }
    }
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = userAuthSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//export const IsConnected = (state) => state.counter.isConnected

export default userAuthSlice.reducer
