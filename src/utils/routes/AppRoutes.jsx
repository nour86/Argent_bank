import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../../pages/home/Home'
import Login from '../../pages/login/Login'
import User from '../../pages/user/User'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import Error from '../../pages/error/Error'

export default function AppRoutes() {
    const Private = (element) => {
        const isAuth = useSelector((state) => state.login.isAuth)
        return isAuth ? (
            element
        ) : typeof element === 'string' ? (
            '/home'
        ) : (
            <Home />
        )
    }

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path={Private('/user')} element={Private(<User />)} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}
