import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LayoutComponent from './components/shared/LayoutComponent'
import LoginPage from './pages/LoginPage'
import PayrollListPage from './pages/PayrollPages/PayrollListPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<Dashboard />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='payrolllist' element={<PayrollListPage />} />
                </Route>
               
            </Routes>
        </Router>
    )
}

export default App
