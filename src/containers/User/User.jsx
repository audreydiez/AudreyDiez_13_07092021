import './User.scss'
import React from 'react'
import Account from 'components/Account/Account'

function User() {
    const [editName, setEditName] = React.useState(false)
    const [firstName, setFirstName] = React.useState('Tony')
    const [lastName, setLastName] = React.useState('Stark')

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
                            Welcome back
                            <br />
                            Tony stark
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

export default User
