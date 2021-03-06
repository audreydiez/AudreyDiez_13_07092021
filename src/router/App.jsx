import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss'
import Home from 'containers/Home/Home'
import SignIn from 'containers/SignIn/SignIn'
import User from 'containers/User/User'
import { SubRoutes } from 'router/SubRoutes/SubRoutes'
import Header from 'components/layout/Header/Header'
import ErrorPage from 'components/ErrorPage/ErrorPage'
import Footer from 'components/layout/Footer/Footer'
import { connect, useDispatch } from 'react-redux'
import SwaggerApiV2 from '../utils/api/ApiDocs/SwaggerApiV2'
import { logIn, logOut, setUser } from '../utils/reducers/userAuth'
import { getUserProfile } from '../utils/api/AxiosApiProvider/AxiosApiProvider'
import React, { useEffect } from 'react'
import { checkTokenFromLocalStorage } from '../utils/Storage/Storage'

const ENV_MODE = 'development'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/sign-in',
        exact: true,
        component: SignIn
    },
    {
        path: '/user',
        exact: true,
        component: User,
        private: true
    },
    {
        path: '*',
        exact: false,
        component: ErrorPage
    }
]

function App(props) {
    const dispatch = useDispatch()

    // Swagger warning disable
    console.warn = () => {}

    // Push API route in dev mode
    if (ENV_MODE !== 'production') {
        routes.unshift({
            path: '/api-docs',
            exact: true,
            component: SwaggerApiV2
        })
    }

    async function checkTokenFromLocalStorage() {
        const localToken = localStorage.getItem('userToken')
        if (localToken) {
            const response = await getUserProfile(localToken)

            if (response.status !== 200) {
                dispatch(logOut())
                localStorage.clear()
            } else {
                dispatch(logIn(localToken))
                dispatch(setUser(response.data.body))
            }
        }
    }

    // Check local storage, get user and fill state
    useEffect(() => {
        checkTokenFromLocalStorage()
    }, [])

    return (
        <Router>
            <div className="router-container">
                <Header />
                <Switch>
                    {routes.map((route, i) =>
                        // If route private and no connected
                        route.private && !props.connected ? (
                            <SignIn key={i} exact path={route.path} />
                        ) : (
                            <SubRoutes key={i} {...route} />
                        )
                    )}
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        connected: state.userAuth.connected
    }
}

export default connect(mapStateToProps)(App)
