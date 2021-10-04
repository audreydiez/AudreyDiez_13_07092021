import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss'
import Home from 'containers/Home/Home'
import SignIn from 'containers/SignIn/SignIn'
import User from 'containers/User/User'
import { SubRoutes } from 'router/SubRoutes/SubRoutes'
import Header from 'components/layout/Header/Header'
import ErrorPage from 'components/ErrorPage/ErrorPage'
import Footer from 'components/layout/Footer/Footer'
import { connect } from 'react-redux'
import SwaggerApiV2 from '../utils/api/ApiDocs/SwaggerApiV2'

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
        path: '/api-docs',
        exact: true,
        component: SwaggerApiV2
    },
    {
        path: '*',
        exact: false,
        component: ErrorPage
    }
]

function App(props) {
    console.warn = () => {}
    return (
        <Router>
            <div className="router-container">
                <Header />
                <Switch>
                    {routes.map((route, i) =>
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
