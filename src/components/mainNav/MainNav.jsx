import { useDispatch, useSelector } from 'react-redux'
import { logoutSuccess } from '../../Redux/reducers/loginReducer'
import { NavLink } from 'react-router-dom'
import { removeTokenFromLocalStorage } from '../../Redux/services/localStorageServices'

export const MainNav = () => {
    const isAuth = useSelector((state) => state.login.isAuth)
    const userName = useSelector((state) => state.user.userName)
    const dispatch = useDispatch()

    console.log('mainNav rerender')

    const handleLoggOut = () => {
        isAuth && dispatch(logoutSuccess())
        removeTokenFromLocalStorage()
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
