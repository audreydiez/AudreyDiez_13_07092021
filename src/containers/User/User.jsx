import './User.scss'
import React from 'react'
import Account from 'components/Account/Account'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setUser, updateUser } from '../../utils/reducers/userAuth'
import { getUserProfile, setUserProfile } from '../../utils/api/AxiosApiProvider'
import { connect } from 'react-redux'

function User(props) {
    const [editName, setEditName] = React.useState(false)
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')

    let history = useHistory()
    const dispatch = useDispatch()

    if (!props.connected) history.push('/sign-in')

    React.useEffect(() => {
        const getProfile = async (e) => {
            const response = await getUserProfile()

            if (response.status === 200) {
                dispatch(setUser(response.data.body))
                setFirstName(response.data.body.firstName)
                setLastName(response.data.body.lastName)
            }
        }

        getProfile().then()
    }, [])

    async function changeUserProfile() {
        const response = await setUserProfile(firstName, lastName)

        dispatch(updateUser(response.data.body))
        setEditName(false)
    }

    return (
        <main className="main bg-dark">
            <header className="header">
                {editName ? (
                    <h1>
                        Welcome back
                        <br />
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
                    </h1>
                ) : (
                    <>
                        <h1>
                            Welcome back <br />
                            {props.user.firstName} {props.user.lastName}
                            <br />
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

            <Account />
            <Account />
            <Account />
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
