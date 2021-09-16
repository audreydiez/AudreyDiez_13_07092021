import './User.scss'
import React from 'react'
import Account from 'components/Account/Account'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setUser } from '../../utils/reducers/userAuth'
import { getUserProfile, UserLogin } from '../../utils/api/AxiosApiProvider'
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
            }
        }

        getProfile().then()
    }, [])

    return (
        <main className="main bg-dark">
            <div className="header">
                {editName ? (
                    <h1>
                        Welcome back
                        <br />
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            className="input-text"
                        />
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            className="input-text"
                        />
                        <br />
                        <button
                            className="edit-button"
                            onClick={() => {
                                setEditName(false)
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
                            Welcome back {props.user.firstName} {props.user.lastName}
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
            </div>
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
