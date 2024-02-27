import { useEffect, useLayoutEffect } from 'react'
import Account from '../../components/account/Account'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import auth_service from '../../Redux/services/apiServices'

export default function User() {
    const token = useSelector((state) => state.login.token)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(auth_service.getUserProfile(token))
    }, [token])

    return (
        <main className="bg-dark">
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
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />
        </main>
    )
}
