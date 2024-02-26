import { useState } from 'react'
import { useLoaderData, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import auth_service from '../../Redux/services/apiServices'

const LoginForm = () => {
    const localData = useLoaderData()
    const dispatch = useDispatch()

    const [email, setEmail] = useState(localData.email)
    const [password, setPassword] = useState(localData.password)
    const [rememberMe, setRememberMe] = useState(
        localData.email !== '' && localData.password !== ''
    )

    const isAuth = useSelector((state) => state.login.isAuth)
    const error = useSelector((state) => state.login.error)

    console.log(rememberMe)
    console.log('loginForm rerender')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setPassword('')
        setRememberMe(false)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        setRememberMe(false)
    }

    const toggleleRememberMe = (e) => {
        setRememberMe(!rememberMe)
    }

    const handleSubmit = (e) => {
        console.log('handlesub function')
        e.preventDefault()
        const response = auth_service.login(email, password, rememberMe)
        console.log(response)
        dispatch(auth_service.login(email, password, rememberMe))
    }

    return isAuth ? (
        <Navigate replace to="/user" />
    ) : (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <div className="input-remember">
                <input
                    name="remembercheck"
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={toggleleRememberMe}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
            {error !== null ? <label className="error">{error}</label> : ''}
        </form>
    )
}

export default LoginForm
