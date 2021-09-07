import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from 'assets/img/argentBankLogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to={'/home'}>
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to={'/sign-in'}>
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Header
