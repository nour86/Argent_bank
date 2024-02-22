import { NavLink } from 'react-router-dom'
import Logo from '../../../images/argentBankLogo.png'
import { useState } from 'react'

function Header() {
    const [signedup, setsignedup] = useState(false)

    function handleloggin() {
        setsignedup(!signedup)
    }

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
                <div>
                    {signedup ? (
                        <div>
                            <NavLink to="/user" className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                user
                            </NavLink>
                            <NavLink
                                to="/home"
                                className="main-nav-item"
                                onClick={handleloggin}
                            >
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </NavLink>
                        </div>
                    ) : (
                        <div>
                            <NavLink
                                to="/signin"
                                className="main-nav-item"
                                onClick={handleloggin}
                            >
                                <i className="fa fa-user-circle"></i>
                                Sign in
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header
