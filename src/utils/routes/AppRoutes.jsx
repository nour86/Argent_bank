import { createBrowserRouter, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../../pages/home/Home'
import Login from '../../pages/login/Login'
import User from '../../pages/user/User'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import Error from '../../pages/error/Error'

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
        return <Navigate to={'/home'} />
    } else {
        // user not logged in, redirect to login page
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
