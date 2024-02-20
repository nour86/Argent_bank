import { NavLink } from 'react-router-dom'
import Logo from '../../../images/argentBankLogo.png'

function Header() {
    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/home" className="main-nav-logo">
                    <img
                        src={Logo}
                        className="main-nav-log-image"
                        alt="Argent Bank logo"
                    />
                </NavLink>
                <div className="main-nav-item">
                    <NavLink to="/signin" className="main-nav-item">
                        Accueil
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
