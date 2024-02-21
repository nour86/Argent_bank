import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import User from '../../pages/User'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function AppRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer />
        </Router>
    )
}
