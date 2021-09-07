import { Link, Switch } from 'react-router-dom'
import { SubRoutes } from 'utils/Utils'
import './User.scss'

function User({ routes }) {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    Tony Jarvis!
                </h1>
                <Link to="/user/edit-name" className="edit-button">
                    Edit name
                </Link>

                <Switch>
                    {routes.map((route, i) => (
                        <SubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Link to="/user/transactions" className="transaction-button">
                        View transactions
                    </Link>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Link to="/user/transactions" className="transaction-button">
                        View transactions
                    </Link>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Link to="/user/transactions" className="transaction-button">
                        View transactions
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default User
