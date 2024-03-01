import './Login.style.scss'
import LoginForm from '../../components/loginForm/LoginForm'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LoginForm />
                <NavLink to="/signup" className="main-nav-logo">
                    New here? Sign up
                </NavLink>
            </section>
        </main>
    )
}
