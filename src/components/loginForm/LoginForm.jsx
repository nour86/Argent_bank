import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../Redux/reducers/loginReducer'
import { useState, useEffect, useMemo } from 'react'
import { rememberMe } from '../../Redux/reducers/userReducer'

export default function LoginForm() {
    console.log('LoginForm Rerender')

    const savedData = useMemo(() => {
        console.log('dataretrieve')
        return getFromLocalStorage()
    }, [])

    const [savedEmail, savedPassword] = [savedData.email, savedData.password]
    let rememberMe = savedEmail && savedPassword

    const handleSubmit = (e) => {
        console.log('handlesub function')
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData)
        const email = formData.get('email')
        const password = formData.get('password')
        const rememberMe = formData.get('remembercheck')
        const token = 'token'
        saveInLocalStorage(email, password, token, rememberMe)
        console.log(window.localStorage)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="text"
                    id="email"
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
                    name="remembercheck"
                    type="checkbox"
                    id="remember-me"
                    defaultChecked={rememberMe}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
        </form>
    )
}

const getFromLocalStorage = () => {
    console.log('getfrom function')
    const ABStorage = JSON.parse(window.localStorage.getItem('ArgentBank'))
    const email = ABStorage.userEmail
    const password = ABStorage.userPassword
    return { email, password }
}

const saveInLocalStorage = (email, password, token, rememberMe) => {
    console.log('saveIn function')
    let dataToSave = {}
    rememberMe
        ? (dataToSave = {
              userEmail: email,
              userPassword: password,
              userToken: token,
          })
        : (dataToSave = { userToken: token })
    const payload = JSON.stringify(dataToSave)
    window.localStorage.setItem('ArgentBank', payload)
}
