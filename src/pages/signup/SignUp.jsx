import { useDispatch } from 'react-redux'
import { useState } from 'react'
import auth_service, { signUp } from '../../Redux/services/apiServices'

export default function SignUp() {
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({
        firstName: { value: '', error: '' },
        lastName: { value: '', error: '' },
        userName: { value: '', error: '' },
        email: { value: '', error: '' },
        password: { value: '', error: '' },
    })
    // prettier-ignore
    const formErrors = {
        firstName: { 
            pattern: '\^[A-Z-a-z\\ \-]{3,}$',
            message:'at least 3 letters'
        },
        lastName: { 
            pattern: '\^\[A-Z-a-z\\ \-]{3,20}$',
            message:'20 letters max'
        },
        userName: {
            pattern: '\.*',
            message:''
        },
        email: {
            pattern: "^[\\w-\\.]+@([\\w\-]+\\.)+[\\w-]{2,4}$",
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
        const regex = new RegExp(formErrors[fieldName].pattern, 'g')
        const result = regex.test(valueToTest)
        return result
    }

    function validateForm() {
        let formisValid = true

        const keys = Object.keys(formValues)
        for (const key of keys) {
            if (validateField(key) == false) {
                setFormValues({
                    ...formValues,
                    [key]: {
                        value: formValues[key].value,
                        error: formErrors[key].message,
                    },
                })
                formisValid = false
            }
        }
        return formisValid
    }

    console.log(formValues)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm() == false) {
            console.log('form invalide')
        } else console.log('form valide')

        // console.log(e.target.firstName.value)
        // const formData = new FormData(e.target)
        // dispatch(auth_service.signUp(formData))
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
                        <p>{formValues.firstName.error}</p>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last name*</label>
                        <input
                            name="lastName"
                            type="text"
                            value={formValues.lastName.value}
                            onChange={handleChange}
                        />
                        <p>{formValues.lastName.error}</p>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="userName">User name</label>
                        <input
                            name="userName"
                            type="text"
                            value={formValues.userName.value}
                            onChange={handleChange}
                        />
                        <p>{formValues.userName.error}</p>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email*</label>
                        <input
                            name="email"
                            type="email"
                            value={formValues.email.value}
                            onChange={handleChange}
                        />
                        <p>{formValues.email.error}</p>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password*</label>
                        <input
                            name="password"
                            type="password"
                            value={formValues.password.value}
                            onChange={handleChange}
                        />
                        <p>{formValues.password.error}</p>
                    </div>

                    <button
                        className="sign-in-button"
                        type="submit"
                        disabled={!submitEnabled}
                    >
                        Sign Up
                    </button>
                </form>
            </section>
        </main>
    )
}
