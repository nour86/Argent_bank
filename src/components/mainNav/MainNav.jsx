import { useDispatch, useSelector } from 'react-redux'
import { logOutSucces } from '../../Redux/reducers/loginReducer'
import { NavLink } from 'react-router-dom'

export const MainNav = () => {
    const isAuth = useSelector((state) => state.login.isAuth)
    const dispatch = useDispatch()

    console.log('mainNav rerender')

    const handleLoggOut = () => {
        isAuth && dispatch(logOutSucces())
    }

    return (
        <div>
            {isAuth ? (
                <div>
                    <NavLink to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        user
                    </NavLink>
                    <NavLink
                        to="/home"
                        className="main-nav-item"
                        onClick={handleLoggOut}
                    >
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </div>
            ) : (
                <div>
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign in
                    </NavLink>
                </div>
            )}
        </div>
    )
}
