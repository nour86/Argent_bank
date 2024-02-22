import SignUpForm from '../../components/signUpForm/SignUpForm'

export default function Login() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <SignUpForm />
            </section>
        </main>
    )
}
