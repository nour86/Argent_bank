import { useState, useLayoutEffect } from 'react'
import Account from '../../components/account/Account'
import { useDispatch, useSelector } from 'react-redux'
import auth_service from '../../Redux/services/apiServices'

export default function User() {
    console.log('User rerender')
    const [loading, setLoading] = useState(true)

    const token = useSelector((state) => state.login.token)

    const firstName = useSelector((state) => state.user.firstName)
    const lastName = useSelector((state) => state.user.lastName)
    const loaderError = useSelector((state) => state.user.error)

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(auth_service.getUserProfile(token)).then(() =>
            setTimeout(() => {
                setLoading(false)
            }, 500)
        )
    }, [token])

    return (
        <main className="bg-dark">
            {loading ? (
                <h1> chargement... </h1>
            ) : loaderError ? (
                <h1> Une erreur est survenue... </h1>
            ) : (
                <h1>
                    Welcome back
                    <br />
                    {`${firstName} ${lastName}!`}
                </h1>
            )}

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
