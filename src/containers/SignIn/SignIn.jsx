import './SignIn.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { getUserToken } from 'utils/api/AxiosApiProvider'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { logIn } from 'utils/reducers/userAuth'
import { getLocalStorageOrDefault } from 'utils/Storage/Storage'

function SignIn() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [RememberMe, setRememberMe] = React.useState(
        getLocalStorageOrDefault('RememberUser', false)
    )
    const [errorMsg, setErrorMsg] = React.useState(' ')

    let history = useHistory()

    //reducers
    const dispatch = useDispatch()

    // Session storage
    useEffect(() => {
        localStorage.setItem('RememberUser', JSON.stringify(RememberMe))
    }, [RememberMe])

    // Log-in
    const logUser = async (e) => {
        e.preventDefault()
        setErrorMsg('')

        if (username.length === 0 || password.length === 0)
            return setErrorMsg('All fields are required')

        const response = await getUserToken(username, password, RememberMe)
        if (response.status !== 200) {
            return setErrorMsg(response.message)
        }

        dispatch(logIn(response.data.body.token))
        history.push('/user')
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form onSubmit={logUser}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="current-username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={RememberMe}
                            onChange={(e) => {
                                setRememberMe(!RememberMe)
                            }}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <div className="error-msg">{errorMsg}</div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}

export default SignIn
