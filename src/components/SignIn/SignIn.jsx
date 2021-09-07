import './SignIn.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    // PLACEHOLDER DUE TO STATIC SITE
                    <Link className="sign-in-button" to={'/user'}>
                        Sign In
                    </Link>
                    {/* SHOULD BE THE BUTTON BELOW*/}
                    {/*<button class="sign-in-button">Sign In</button> */}
                </form>
            </section>
        </main>
    )
}

export default SignIn