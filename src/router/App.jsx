import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss'
import Home from 'containers/Home/Home'
import SignIn from 'containers/SignIn/SignIn'
import User from 'containers/User/User'
import { SubRoutes } from 'router/SubRoutes/SubRoutes'
import Header from 'components/Header/Header'
import ErrorPage from 'components/ErrorPage/ErrorPage'
import Footer from 'components/Footer/Footer'

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
        component: User
    },
    {
        path: '*',
        exact: false,
        component: ErrorPage
    }
]

function App() {
    return (
        <Router>
            <div className="router-container">
                <Header />
                <Switch>
                    {routes.map((route, i) => (
                        <SubRoutes key={i} {...route} />
                    ))}
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App
