import './User.scss'
import React from 'react'
import Account from 'components/Account/Account'

function User() {
    const [editModal, setEditName] = React.useState(false)

    return (
        <main className="main bg-dark">
            <div className="header">
                {editModal ? (
                    <h1>
                        Welcome back
                        <br />
                        Edit Name Input
                        <br />
                        <button
                            className="edit-button"
                            onClick={() => {
                                setEditName(false)
                            }}>
                            Confirm
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
