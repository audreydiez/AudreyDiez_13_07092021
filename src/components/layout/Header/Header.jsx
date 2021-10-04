import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from 'assets/img/argentBankLogo.png'
import userAvatar from 'assets/img/user.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { connect, useDispatch } from 'react-redux'

import { logOut } from 'utils/reducers/userAuth'

function Header(props) {
    const dispatch = useDispatch()

    return (
        <nav className="main-nav">
            <Link className="col-2 main-nav-logo" to={'/'}>
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div className="col-2 right-nav">
                {props.connected ? (
                    <>
                        <img src={userAvatar} alt={props.user.firstName} className="user-avatar" />
                        <Link to={'/user'} className="main-nav-item">
                            {props.user.firstName}
                        </Link>
                        <Link
                            to={'/sign-in'}
                            className="main-nav-item"
                            onClick={() => dispatch(logOut())}>
                            <FontAwesomeIcon icon={faSignOutAlt} className="main-nav-item__icon" />
                            Sign out
                        </Link>
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

const mapStateToProps = (state) => {
    return {
        connected: state.userAuth.connected,
        user: state.userAuth.user
    }
}

export default connect(mapStateToProps)(Header)
