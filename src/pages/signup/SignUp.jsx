import './SignUp.style.scss'

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import auth_service from '../../Redux/services/apiServices'

export default function SignUp() {
    const dispatch = useDispatch()
    const [apiMessage, setMessage] = useState('')

    const [formValues, setFormValues] = useState({
        firstName: { value: '', error: '' },
        lastName: { value: '', error: '' },
        userName: { value: '', error: '' },
        email: { value: '', error: '' },
        password: { value: '', error: '' },
    })
    // prettier-ignore
    const formPattern = {
        firstName: { 
            pattern: '\^[A-Z-a-z\\ \-]{3,}$',
            message:'at least 3 letters'
        },
        lastName: { 
            pattern: '\^\[A-Z-a-z\\ \-]{3,20}$',
            message:'between 3 and 20 characters'
        },
        userName: {
            pattern: '\.*',
            message:''
        },
        email: {
            pattern: "^[\\w-\\.]{2,}@([\\w\-]+\\.)+[\\w-]{2,4}$",
            message:'please provide a valid email' 
        },
        password: {
            pattern: '\\w{8,}$',
            message:'at least 8 characters'
        },
    }

    const submitEnabled =
        formValues.firstName.value !== '' &&
        formValues.lastName.value !== '' &&
        formValues.email.value !== '' &&
        formValues.password.value !== ''

    const handleChange = (e) => {
        const newValue = {
            [e.target.name]: { value: e.target.value, error: '' },
        }
        setFormValues({
            ...formValues,
            ...newValue,
        })
    }

    function validateField(fieldName) {
        const valueToTest = formValues[fieldName].value
        const regex = new RegExp(formPattern[fieldName].pattern, 'g')
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
                        error: formPattern[key].message,
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
            dispatch(auth_service.signUp(formData)).then((response) =>
                setMessage(response.message)
            )
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First name*</label>
                        <input
                            name="firstName"
                            type="text"
                            value={formValues.firstName.value}
                            onChange={handleChange}
                        />
                        <p className="error-message">
                            {formValues.firstName.error}
                        </p>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last name*</label>
                        <input
                            name="lastName"
                            type="text"
                            value={formValues.lastName.value}
                            onChange={handleChange}
                        />
                        <p className="error-message">
                            {formValues.lastName.error}
                        </p>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="userName">User name</label>
                        <input
                            name="userName"
                            type="text"
                            value={formValues.userName.value}
                            onChange={handleChange}
                        />
                        <p className="error-message">
                            {formValues.userName.error}
                        </p>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email*</label>
                        <input
                            name="email"
                            type="email"
                            value={formValues.email.value}
                            onChange={handleChange}
                        />
                        <p className="error-message">
                            {formValues.email.error}
                        </p>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password*</label>
                        <input
                            name="password"
                            type="password"
                            value={formValues.password.value}
                            onChange={handleChange}
                        />
                        <p className="error-message">
                            {formValues.password.error}
                        </p>
                    </div>

                    <button
                        className="sign-in-button"
                        type="submit"
                        disabled={!submitEnabled}
                    >
                        Sign Up
                    </button>
                    <p>{apiMessage}</p>
                </form>
            </section>
        </main>
    )
}
