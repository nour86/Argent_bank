import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../Redux/reducers/loginReducer'
import { rememberMe } from '../../Redux/reducers/userReducer'
import { useState, useEffect } from 'react'

export default function LoginForm() {
    const dispatch = useDispatch()
    const isRemembered = useSelector((state) => state.user.isRemembered)
    console.log(window.localStorage)

    const localS = window.localStorage.getItem('ArgentBank')
    console.log(localS)
    const localS2 = JSON.parse(localS)
    const savedEmail = localS2.userEmail
    console.log(savedEmail)
    const savedPassword = window.localStorage.getItem('userPassword')

    const toggleRememberMe = () => {
        dispatch(rememberMe())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const payload = JSON.stringify({
            userEmail: formData.get('username'),
            userPassword: formData.get('password'),
        })
        window.localStorage.setItem('ArgentBank', payload)
        console.log(window.localStorage)
        // dispatch(loginSuccess())
        // console.log(window.localStorage)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    type="text"
                    id="username"
                    defaultValue={savedEmail}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    id="password"
                    defaultValue={savedPassword}
                />
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
