import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../Redux/reducers/loginReducer'
import { rememberMe } from '../../Redux/reducers/userReducer'
import { useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState('bla')
    const [password, setPassword] = useState('blabla')
    const dispatch = useDispatch()
    const isRemembered = useSelector((state) => state.user.isRemembered)

    const toggleRememberMe = () => {
        dispatch(rememberMe())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        isRemembered
            ? localStorage.setItem('userEmail', email)
            : localStorage.removeItem('userEmail')
        isRemembered
            ? localStorage.setItem('userPassword', password)
            : localStorage.removeItem('userPassword')
        dispatch(loginSuccess())
        console.log(window.localStorage)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" defaultValue={email} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" defaultValue={password} />
            </div>
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    checked={isRemembered}
                    onChange={toggleRememberMe}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
        </form>
    )
}
