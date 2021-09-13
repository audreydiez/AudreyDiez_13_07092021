import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from 'utils/reducer/reducer'

export default configureStore({
    reducer: { counter: userAuthReducer }
})
