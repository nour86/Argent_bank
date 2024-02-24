import { createBrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../../pages/home/Home'
import Login from '../../pages/login/Login'
import User from '../../pages/user/User'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import Error from '../../pages/error/Error'
import { getDataFromLocalStorage } from '../../Redux/services/localStorageServices'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

const PrivateUserRoute = () => {
    const isAuth = useSelector((state) => state.login.isAuth)
    return isAuth ? <User /> : <Home />
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
        loader: getDataFromLocalStorage,
    },
    {
        path: '/user',
        element: (
            <Layout>
                <PrivateUserRoute />
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
