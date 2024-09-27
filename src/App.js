import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LayoutComponent from './components/shared/LayoutComponent'
import LoginPage from './pages/LoginPage'
import AttendanceListPage from './pages/AttendancePages/AttendanceListPage'
import LeaveListPage from './pages/LeavePages/LeaveListPage'
import HolidayListPage from './pages/HolidayPages/HolidayListPage'
import AccountSettingPage from './pages/AccountSettingPage'
import PayslipListPage from './pages/PaySlipPages/PayslipListPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<Dashboard />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='account-setting' element={<AccountSettingPage />} />
                    <Route path='attendance' element={<AttendanceListPage />} />
                    <Route path='leave' element={<LeaveListPage />} />
                    <Route path='payslip' element={<PayslipListPage />} />
                    <Route path='holidays' element={<HolidayListPage />} />
                </Route>
               
            </Routes>
        </Router>
    )
}

export default App
