import './Error.style.scss'

import { Link } from 'react-router-dom'
function Error() {
    return (
        <main className="bg-dark">
            <section className="section-error">
                <h2>404</h2>
                <p>
                    Oups! <br />
                    La page que vous demandez n’existe pas.
                </p>
                <Link to="/">Retourner à la page d'accueil</Link>
            </section>
        </main>
    )
}

export default Error
