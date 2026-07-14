import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import Login from '../pages/Login/Login'


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/create-account' element={<CreateAccount />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    )
}

export default AppRouter