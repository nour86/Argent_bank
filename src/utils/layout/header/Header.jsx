import { NavLink } from 'react-router-dom'
import Logo from '../../../../public/images/argentBankLogo.webp'
import { MainNav } from '../../../components/mainNav/MainNav'
import './Header.style.scss'

function Header() {
    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/home" className="main-nav-logo">
                    <img
                        src={Logo}
                        className="main-nav-logo-image"
                        alt="Argent Bank logo"
                    />
                </NavLink>
                <MainNav />
            </nav>
        </header>
    )
}

export default Header
