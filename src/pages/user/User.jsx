import { useState, useLayoutEffect, useEffect } from 'react'
import Account from '../../components/account/Account'
import { useDispatch, useSelector } from 'react-redux'
import auth_service from '../../Redux/services/apiServices'
import EditModal from '../../components/editModal/EditModal'

export default function User() {
    console.log('User rerender')
    const [loading, setLoading] = useState(true)

    const token = useSelector((state) => state.login.token)

    const firstName = useSelector((state) => state.user.firstName)
    const lastName = useSelector((state) => state.user.lastName)

    const loaderError = useSelector((state) => state.user.error)

    const dispatch = useDispatch()

    useEffect(() => {
        if (firstName == '') {
            /**will only trigger when the page is reached for the first time */
            console.log('UseEffect if...')
            dispatch(auth_service.getUserProfile(token)).then(() =>
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            )
        } else {
            console.log('UseEffect else...')
            setLoading(false)
        }
    }, [])

    return (
        <main className="bg-dark">
            {loading ? (
                <h1> Chargement... </h1>
            ) : loaderError ? (
                <h1> Une erreur est survenue... </h1>
            ) : (
                <>
                    <h1>
                        Welcome back
                        <br />
                        {`${firstName} ${lastName}!`}
                    </h1>

                    <EditModal firstName={firstName} lastName={lastName} />

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
                </>
            )}
        </main>
    )
}
