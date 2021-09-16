import './User.scss'
import React from 'react'
import Account from 'components/Account/Account'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setUser } from '../../utils/reducer/reducer'
import { getUserProfile, UserLogin } from '../../utils/api/AxiosApiProvider'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        connected: state.userAuth.connected,
        token: state.userAuth.token,
        firstname: state.userAuth.firstname
    }
}

function User(props) {
    const [editName, setEditName] = React.useState(false)
    const [firstName, setFirstName] = React.useState('Tony')
    const [lastName, setLastName] = React.useState('Stark')

    let history = useHistory()
    const dispatch = useDispatch()

    const isConnected = useSelector((state) => state.userAuth.connected)
    const userToken = useSelector((state) => state.userAuth.token)

    if (!isConnected) history.push('/sign-in')

    React.useEffect(() => {
        const getProfile = async (e) => {
            const response = await getUserProfile()

            if (response.status === 200) {
                //dispatch(setUser(response.data.body))
            }
        }

        getProfile()
    }, [userToken])

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
                            Welcome back {props.firstname}
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
export default connect(mapStateToProps)(User)
