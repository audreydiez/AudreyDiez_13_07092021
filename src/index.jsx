import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import App from './router/App'
import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import combinedReducers from './utils/reducers/combinedReducers'
import { createStore } from 'redux'

/* eslint-disable no-underscore-dangle */
const store = createStore(
    combinedReducers /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
