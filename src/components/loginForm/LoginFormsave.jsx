import { useState, useEffect } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    console.log('loginForm rerender')

    /***  useEffect pour pré-remplir les champs d'e-mail et de mot de passe après la déconnexion ***/
    useEffect(() => {
        const savedData = getDataFromLocalStorage()
        const [savedEmail, savedPassword] = [
            savedData.email,
            savedData.password,
        ]
        // if userEmail & saveEmail arent null => rememberMe was checked
        const rememberMeChecked = savedEmail && savedPassword

        /***  Si la case "Remember me" était cochée, pré-remplit les champs d'e-mail et de mot de passe ***/
        if (rememberMeChecked) {
            setEmail(savedEmail)
            setPassword(savedPassword)
            setRememberMe(true)
        } else {
            /***  Sinon, réinitialise les champs d'e-mail et de mot de passe ***/
            setEmail('')
            setPassword('')
            setRememberMe(false)
        }
    }, []) /*** Exécuter à l'ouverture de la page ***/

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
        console.log(window.localStorage)
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

const getDataFromLocalStorage = () => {
    console.log('getfrom function')
    const ABStorage = JSON.parse(window.localStorage.getItem('ArgentBank'))
    const email = ABStorage?.userEmail
    const password = ABStorage?.userPassword
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

export default LoginForm
