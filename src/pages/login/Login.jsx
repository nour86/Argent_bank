import './Login.style.scss'
import LoginForm from '../../components/loginForm/LoginForm'
import { NavLink, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Login() {
    const isAuth = useSelector((state) => state.login.isAuth)

    return isAuth ? (
        <Navigate replace to="/user" />
    ) : (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LoginForm />
                <NavLink to="/signup" className="nav-link">
                    New here? Sign up
                </NavLink>
            </section>
        </main>
    )
}
