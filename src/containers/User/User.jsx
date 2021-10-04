import './User.scss'
import React from 'react'
import Account from 'components/Account/Account'

import { useDispatch } from 'react-redux'
import { setUser, updateUser } from '../../utils/reducers/userAuth'

import { getUserProfile, updateUserProfile } from '../../utils/api/AxiosApiProvider'
import { connect } from 'react-redux'
import { accounts } from 'assets/data/data'

function User(props) {
    const [editName, setEditName] = React.useState(false)
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [errorMsg, setError] = React.useState('')

    const dispatch = useDispatch()

    React.useEffect(() => {
        ;(async (e) => {
            const response = await getUserProfile(props.token.payload)

            if (response.status !== 200) {
                return setError('Error user : ' + response.statusText)
            }
            dispatch(setUser(response.data.body))
            setFirstName(response.data.body.firstName)
            setLastName(response.data.body.lastName)
            setError('')
        })()
    }, [])

    async function changeUserProfile() {
        const response = await updateUserProfile(firstName, lastName, props.token.payload)

        if (response.status !== 200) {
            return setError('Error updating user : ' + response.statusText)
        }

        // State update
        dispatch(updateUser(response.data.body))

        setEditName(false)
    }

    return (
        <main className="main bg-dark">
            <header className="header">
                {editName ? (
                    <div>
                        <h1>Welcome back</h1>

                        {errorMsg.length > 0 && <div className="error-msg">{errorMsg}</div>}
                        <input
                            value={firstName}
                            type="text"
                            className="input-text"
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <input
                            value={lastName}
                            type="text"
                            className="input-text"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <br />
                        <button
                            className="edit-button"
                            onClick={() => {
                                changeUserProfile()
                            }}>
                            Confirm
                        </button>
                        <button
                            className="edit-button"
                            onClick={() => {
                                setEditName(false)
                            }}>
                            Cancel
                        </button>
                    </div>
                ) : (
                    <>
                        <h1>
                            Welcome back <br />
                            {props.user.firstName} {props.user.lastName}
                            {errorMsg.length > 0 && <div className="error-msg">{errorMsg}</div>}
                        </h1>

                        <button
                            className="edit-button"
                            onClick={() => {
                                setEditName(true)
                            }}>
                            Edit Name
                        </button>
                    </>
                )}
            </header>
            <h2 className="sr-only">Accounts</h2>

            {accounts.map((account) => (
                <Account
                    key={account.id}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        connected: state.userAuth.connected,
        token: state.userAuth.token,
        user: state.userAuth.user
    }
}

export default connect(mapStateToProps)(User)
