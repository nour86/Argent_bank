import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { saveInLocalStorage } from '../../Redux/services/localStorageServices'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../Redux/reducers/loginReducer'

const LoginForm = () => {
    const data = useLoaderData()
    const dispatch = useDispatch()
    const [email, setEmail] = useState(data.email ? data.email : '')
    const [password, setPassword] = useState(data.password ? data.password : '')
    const [rememberMe, setRememberMe] = useState(email && password)
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
        const token = 'token'
        saveInLocalStorage(email, password, token, rememberMe)
        dispatch(loginSuccess())
    }

    return (
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
        </form>
    )
}

export default LoginForm
