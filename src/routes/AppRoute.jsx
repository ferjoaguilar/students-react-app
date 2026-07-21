import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import ProtectedRoute from './ProtectedRoute'


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/create-account' element={<CreateAccount />} />
                <Route path='/login' element={<Login />} />

                <Route element={<ProtectedRoute />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter