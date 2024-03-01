import { useDispatch, useSelector } from 'react-redux'
import auth_service from '../../Redux/services/apiServices'
import { NavLink } from 'react-router-dom'

export const MainNav = () => {
    const isAuth = useSelector((state) => state.login.isAuth)
    const userName = useSelector((state) => state.user.userName)
    const dispatch = useDispatch()

    const handleLoggOut = () => {
        dispatch(auth_service.logout())
        // removeTokenFromLocalStorage()
    }

    return (
        <div>
            {isAuth ? (
                <div>
                    <NavLink to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {userName}
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
