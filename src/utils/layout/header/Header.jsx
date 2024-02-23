import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/images/argentBankLogo.png'

import { MainNav } from '../../../components/mainNav/MainNav'

function Header() {
    console.log('Header rerender')
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
