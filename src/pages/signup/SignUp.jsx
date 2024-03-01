import { useDispatch } from 'react-redux'
import auth_service, { signUp } from '../../Redux/services/apiServices'

export default function SignUp() {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        console.log('handlesub function')
        e.preventDefault()
        const formData = new FormData(e.target)

        dispatch(auth_service.signUp(formData))
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First name</label>
                        <input name="firstName" type="text" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last name</label>
                        <input name="lastName" type="text" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="userName">User name</label>
                        <input name="userName" type="text" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" required />
                    </div>

                    <button className="sign-in-button" type="submit">
                        Sign Up
                    </button>
                </form>
            </section>
        </main>
    )
}