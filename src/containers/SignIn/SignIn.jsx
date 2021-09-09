import './SignIn.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { UserLogin } from 'utils/AxiosApiProvider'
import React from 'react'

function SignIn() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorMsg, setErrorMsg] = React.useState(' ')

    const logIn = async (e) => {
        e.preventDefault()

        if (username.length === 0 || password.length === 0)
            return setErrorMsg('All fields are required')

        const response = await UserLogin(username, password)
        if (response.status !== 200) {
            return setErrorMsg(response.message)
        }
        setErrorMsg(response.data.message)
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form onSubmit={logIn}>
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
                            type="text"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
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
