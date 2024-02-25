import { useState } from 'react'
import Account from '../../components/account/Account'

export default function User() {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <main className={`main ${isEditing ? 'editing' : 'bg-dark'}`}>
            <h1>
                Welcome back
                <br />
                Tony Jarvis!
            </h1>
            <button className="edit-button">Edit Name</button>

            <p className="sr-only">Accounts</p>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
                editing={isEditing}
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
                editing={isEditing}
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
                editing={isEditing}
            />
        </main>
    )
}
