import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import Home from '../../pages/home/Home'
import Login from '../../pages/login/Login'
import User from '../../pages/user/User'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import Error from '../../pages/error/Error'

export default function AppRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/user" element={<User />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}
