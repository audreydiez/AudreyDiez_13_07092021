import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

import './App.scss'
import Home from 'components/Home/Home'
import SignIn from 'components/SignIn/SignIn'
import User from 'components/User/User'
import EditName from 'components/EditName/EditName'
import Transactions from 'components/Transactions/Transactions'
import { SubRoutes } from 'utils/Utils'
import Header from 'components/Header/Header'
import ErrorPage from 'components/ErrorPage/ErrorPage'
import Footer from 'components/Footer/Footer'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/sign-in',
        component: SignIn
    },
    {
        path: '/user',
        component: User,
        routes: [
            {
                path: '/user/edit-name',
                component: EditName
            }
        ]
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
