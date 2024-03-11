import SignUpForm from '../../components/signupForm/SignupForm'

export default function SignUp() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign up</h1>
                <SignUpForm />
            </section>
        </main>
    )
}
