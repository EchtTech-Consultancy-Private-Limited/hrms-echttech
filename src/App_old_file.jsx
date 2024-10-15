import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MissingPage from './components/Error/404';
import Loader from "./components/shared/Loader";
import ProtectedRoute from "./components/RouteComponent/ProtectedRoute";
// Translation
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import { useSelector } from "react-redux";
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
import ContractTypePage from './pages/ConstantsPages/ContractTypePage'
import QualificationPage from './pages/ConstantsPages/QualificationPage'
import DocumentTypePage from './pages/ConstantsPages/DocumentTypePage'
import AwardTypePage from './pages/ConstantsPages/AwardTypePage'
import LeaveTypePage from './pages/ConstantsPages/LeaveTypePage'
import WarningTypePage from './pages/ConstantsPages/WarningTypePage'
import TerminationTypePage from './pages/ConstantsPages/TerminationTypePage'
import ExpenseTypePage from './pages/ConstantsPages/ExpenseTypePage'
import JobTypePage from './pages/ConstantsPages/JobTypePage'
import EmployeeExitTypePage from './pages/ConstantsPages/EmployeeExitTypePage'
import TravelArrangementTypePage from './pages/ConstantsPages/TravelArrangementTypePage'
import PaymentMethodPage from './pages/ConstantsPages/PaymentMethodPage'
import CurrencyTypePage from './pages/ConstantsPages/CurrencyTypePage'
import RolesPage from './pages/RolesPermissionsPages/RolesPage'
import PermissionPage from './pages/RolesPermissionsPages/PermissionPage'
import GeneralConfigurationPage from './pages/SettingPages/GeneralConfigurationPage';
import AnimationEffectsConfigurationPage from './pages/SettingPages/AnimationEffectsConfigurationPage';
import AttendanceConfigurationPage from './pages/SettingPages/AttendanceConfigurationPage';
import EmailNotificationsConfigurationPage from './pages/SettingPages/EmailNotificationsConfigurationPage';
import NotificationPositionConfigurationPage from './pages/SettingPages/NotificationPositionConfigurationPage';
import PayrollSalarySlipLogoPage from './pages/SettingPages/PayrollSalarySlipLogoPage';
import RecruitmentConfigurationPage from './pages/SettingPages/RecruitmentConfigurationPage';
import RoleConfigurationPage from './pages/SettingPages/RoleConfigurationPage';
import SystemConfigurationPage from './pages/SettingPages/SystemConfigurationPage';
import SystemLogoPage from './pages/SettingPages/SystemLogoPage';

function App() {
    const { loading } = useSelector((state) => state.alerts);
    i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      supportedLngs: ["en", "hi"],
      fallbackLng: "en",
      detection: {
        order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
      react: { useSuspense: false },
    });
    return (
        <div>
        {loading && <Loader />}
        <Router>
            <Routes>
                <Route index path='/' element={<LoginPage />} />
                {/* <Route path='/login' element={<LoginPage />} /> */}
                <Route path="/" element={<LayoutComponent />}>
                    {/* <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
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
                    <Route path='contract-type' element={<ContractTypePage />} />
                    <Route path='qualification' element={<QualificationPage />} />
                    <Route path='document-type' element={<DocumentTypePage />} />
                    <Route path='award-type' element={<AwardTypePage />} />
                    <Route path='leave-type' element={<LeaveTypePage />} />
                    <Route path='warning-type' element={<WarningTypePage />} />
                    <Route path='termination-type' element={<TerminationTypePage />} />
                    <Route path='expense-type' element={<ExpenseTypePage />} />
                    <Route path='job-type' element={<JobTypePage />} />
                    <Route path='employee-exit-type' element={<EmployeeExitTypePage />} />
                    <Route path='travel-arrangement-type' element={<TravelArrangementTypePage />} />
                    <Route path='payment-methods' element={<PaymentMethodPage />} />
                    <Route path='currency-type' element={<CurrencyTypePage />} />
                    <Route path='roles' element={<RolesPage />} />
                    <Route path='permissions' element={<PermissionPage />} />
                    /** Setting Route */
                    <Route path='general-configuration' element={<GeneralConfigurationPage />} />
                    <Route path='system-logo' element={<SystemLogoPage />} />
                    <Route path='system-configuration' element={<SystemConfigurationPage />} />
                    <Route path='role-configuration' element={<RoleConfigurationPage />} />
                    <Route path='attendance-configuration' element={<AttendanceConfigurationPage />} />
                    <Route path='payroll-logo-salaryslip' element={<PayrollSalarySlipLogoPage />} />
                    <Route path='recruitment-configuration' element={<RecruitmentConfigurationPage />} />
                    <Route path='email-notifications-configuration' element={<EmailNotificationsConfigurationPage />} />
                    <Route path='animation-effects-configuration' element={<AnimationEffectsConfigurationPage />} />
                    <Route path='notification-position-configuration' element={<NotificationPositionConfigurationPage />} />
                </Route>
                <Route component={MissingPage} />
            </Routes>
        </Router>
        </div>
    )
}

export default App