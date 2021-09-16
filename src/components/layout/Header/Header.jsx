import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from 'assets/img/argentBankLogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'

import userAuthReducer, { logOut } from 'utils/reducers/userAuth'

function Header() {
    const isConnected = useSelector((state) => state.userAuth.connected)

    const dispatch = useDispatch()

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to={'/'}>
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div>
                {isConnected ? (
                    <>
                        <Link to={'/user'}>Welcome user</Link>
                        <div className="main-nav-item" onClick={() => dispatch(logOut())}>
                            <FontAwesomeIcon icon={faUserCircle} className="main-nav-item__icon" />
                            Log Out
                        </div>
                    </>
                ) : (
                    <Link className="main-nav-item" to={'/sign-in'}>
                        <FontAwesomeIcon icon={faUserCircle} className="main-nav-item__icon" />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Header
