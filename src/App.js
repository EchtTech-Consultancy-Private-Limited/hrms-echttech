import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LayoutComponent from './components/shared/LayoutComponent'
import LoginPage from './pages/LoginPage'
import AttendanceListPage from './pages/AttendancePages/AttendanceListPage'
import LeaveListPage from './pages/LeavePages/LeaveListPage'
import HolidayListPage from './pages/HolidayPages/HolidayListPage'
import AccountSettingPage from './pages/AccountSettingPage'
import PayslipListPage from './pages/PaySlipPages/PayslipListPage'
import CompanyCreatePage from './pages/OrganizationPages/CompanyCreatePage'
import LocationCompanyBranchPage from './pages/OrganizationPages/LocationCompanyBranchPage'
import DepartmentPage from './pages/OrganizationPages/DepartmentPage'
import DesignationPage from './pages/OrganizationPages/DesignationPage'
import AnnouncementPage from './pages/OrganizationPages/AnnouncementPage'
import PoliciesPage from './pages/OrganizationPages/PoliciesPage'
import ExpensePage from './pages/OrganizationPages/ExpensePage'
import EmployeeCreatePage from './pages/EmployeesPages/EmployeeCreatePage'
import AwardsPage from './pages/EmployeesPages/AwardsPage'
import TransfersPage from './pages/EmployeesPages/TransfersPage'
import GeneratePayslipPage from './pages/PayRollPages/GeneratePayslipPage'
import HourlyWagesPage from './pages/PayRollPages/HourlyWagesPage'
import ManageSalaryPage from './pages/PayRollPages/ManageSalaryPage'
import PaymentHistoryPage from './pages/PayRollPages/PaymentHistoryPage'
import PayrollTemplatesPage from './pages/PayRollPages/PayrollTemplatesPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<Dashboard />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='account-setting' element={<AccountSettingPage />} />
                    <Route path='company' element={<CompanyCreatePage />} />
                    <Route path='location' element={<LocationCompanyBranchPage />} />
                    <Route path='department' element={<DepartmentPage />} />
                    <Route path='designation' element={<DesignationPage />} />
                    <Route path='announcement' element={<AnnouncementPage />} />
                    <Route path='policies' element={<PoliciesPage />} />
                    <Route path='expense' element={<ExpensePage />} />
                    <Route path='employees' element={<EmployeeCreatePage />} />
                    <Route path='awards' element={<AwardsPage />} />
                    <Route path='transfers' element={<TransfersPage />} />
                    <Route path='attendance' element={<AttendanceListPage />} />
                    <Route path='leave' element={<LeaveListPage />} />
                    <Route path='payslip' element={<PayslipListPage />} />
                    <Route path='holidays' element={<HolidayListPage />} />
                    <Route path='payrolltemplate' element={<PayrollTemplatesPage />} />
                    <Route path='hourly-wages' element={<HourlyWagesPage />} />
                    <Route path='manage-salary' element={<ManageSalaryPage />} />
                    <Route path='generate-payslip' element={<GeneratePayslipPage />} />
                    <Route path='payment-history' element={<PaymentHistoryPage />} />
                </Route>
               
            </Routes>
        </Router>
    )
}

export default App
