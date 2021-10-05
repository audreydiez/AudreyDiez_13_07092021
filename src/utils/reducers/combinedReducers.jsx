import { combineReducers } from 'redux'

import userAuth from './userAuth'

const combinedReducers = combineReducers({
    userAuth
})

export default combinedReducers
