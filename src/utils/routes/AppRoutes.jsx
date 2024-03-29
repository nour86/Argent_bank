import { createBrowserRouter, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../../pages/home/Home'
import Login from '../../pages/login/Login'
import User from '../../pages/user/User'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import Error from '../../pages/error/Error'
import SignUp from '../../pages/signup/SignUp'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export function PrivateRoute({ children }) {
    const isAuth = useSelector((state) => state.login.isAuth)
    if (!isAuth) {
        return <Navigate to={'/login'} />
    } else {
        return children
    }
}

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: '/home',
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: '/login',
        element: (
            <Layout>
                <Login />
            </Layout>
        ),
    },
    {
        path: '/signup',
        element: (
            <Layout>
                <SignUp />
            </Layout>
        ),
    },

    {
        path: '/user',
        element: (
            <Layout>
                <PrivateRoute>
                    <User />
                </PrivateRoute>
            </Layout>
        ),
    },
    {
        path: '/*',
        element: (
            <Layout>
                <Error />
            </Layout>
        ),
    },
])

export default router
