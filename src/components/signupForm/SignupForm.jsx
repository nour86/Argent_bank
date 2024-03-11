import './SignupForm.style.scss'

import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import auth_service from '../../Redux/services/apiServices'

export default function SignUpForm() {
    const dispatch = useDispatch()

    const [apiMessage, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [signedUp, setsigneUp] = useState(false)

    const initialForm = {
        firstName: { value: '', pattern: '^[A-Z-a-z\\ -]{3,}$', error: false },
        lastName: { value: '', pattern: '^[A-Z-a-z\\ -]{3,20}$', error: false },
        userName: { value: '', pattern: '.*', error: false },
        email: {
            value: '',
            pattern: '^[\\w-\\.]{2,}@([\\w-]+\\.)+[\\w-]{2,4}$',
            error: false,
        },
        password: { value: '', pattern: '\\w{8,}$', error: false },
    }

    const [formValues, setFormValues] = useState(initialForm)

    const submitEnabled =
        formValues.firstName.value !== '' &&
        formValues.lastName.value !== '' &&
        formValues.email.value !== '' &&
        formValues.password.value !== '' &&
        !error

    const handleChange = (e) => {
        setError(false)
        setsigneUp(false)
        setMessage('')
        const newValue = {
            [e.target.name]: {
                value: e.target.value,
                pattern: formValues[e.target.name].pattern,
                error: false,
            },
        }
        setFormValues({
            ...formValues,
            ...newValue,
        })
    }

    function validateField(fieldName) {
        const valueToTest = formValues[fieldName].value
        const regex = new RegExp(formValues[fieldName].pattern, 'g')
        const result = regex.test(valueToTest)
        return result
    }

    function validateForm() {
        let formisValid = true
        let newFormValues = { ...formValues }

        const keys = Object.keys(formValues)
        for (const key of keys) {
            if (validateField(key) == false) {
                newFormValues = {
                    ...newFormValues,
                    [key]: {
                        value: formValues[key].value,
                        pattern: formValues[key].pattern,
                        error: true,
                    },
                }
                formisValid = false
            }
        }
        setFormValues(newFormValues)
        return formisValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm() == true) {
            const formData = new FormData(e.target)
            dispatch(auth_service.signUp(formData)).then((response) => {
                setMessage(response.message)

                if (response.status == '200') {
                    setsigneUp(true)
                } else {
                    setError(true)
                }
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="firstName">First name*</label>
                <input
                    name="firstName"
                    className={formValues.firstName.error && 'invalid'}
                    type="text"
                    value={formValues.firstName.value}
                    onChange={handleChange}
                />
                <p className="error-message">
                    {formValues.firstName.error && 'at least 3 letters'}
                </p>
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName">Last name*</label>
                <input
                    name="lastName"
                    className={formValues.lastName.error && 'invalid'}
                    type="text"
                    value={formValues.lastName.value}
                    onChange={handleChange}
                />
                <p className="error-message">
                    {formValues.lastName.error && 'between 3 and 20 characters'}
                </p>
            </div>
            <div className="input-wrapper">
                <label htmlFor="userName">User name</label>
                <input
                    name="userName"
                    className={formValues.userName.error && 'invalid'}
                    type="text"
                    value={formValues.userName.value}
                    onChange={handleChange}
                />
                <p className="error-message">
                    {formValues.userName.error && ''}
                </p>
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">Email*</label>
                <input
                    name="email"
                    className={formValues.email.error && 'invalid'}
                    type="email"
                    value={formValues.email.value}
                    onChange={handleChange}
                />
                <p className="error-message">
                    {formValues.email.error && 'please provide a valid email'}
                </p>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password*</label>
                <input
                    name="password"
                    className={formValues.password.error && 'invalid'}
                    type="password"
                    value={formValues.password.value}
                    onChange={handleChange}
                />
                <p className="error-message">
                    {formValues.password.error && 'at least 8 characters'}
                </p>
            </div>
            <p className="instructions-message">* Fields required</p>

            <button
                className="sign-in-button"
                type="submit"
                disabled={!submitEnabled && error}
            >
                Sign Up
            </button>

            <p
                className={
                    error ? 'validation-message error' : 'validation-message'
                }
            >
                {apiMessage}
            </p>
            <NavLink to="/login" className={!signedUp && ' hidden'}>
                <i className="fa fa-user-circle"></i>
                Navigate to login
            </NavLink>
        </form>
    )
}
