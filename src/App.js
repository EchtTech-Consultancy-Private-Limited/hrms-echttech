import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LayoutComponent from './components/shared/LayoutComponent'
import LoginPage from './pages/LoginPage'
import AttendancePage from './pages/AttendancePage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<Dashboard />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='attendance' element={<AttendancePage />} />
                </Route>
               
            </Routes>
        </Router>
    )
}

export default App
