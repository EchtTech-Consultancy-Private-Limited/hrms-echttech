import {Navigate, useRoutes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MissingPage from "../components/Error/404";
import PublicRoutesLayout from "../components/RouteComponent/PublicRoute";
import ProtectedRoutesLayout from "../components/RouteComponent/ProtectedRoute";
import LayoutComponent from "../components/shared/LayoutComponent";
import Dashboard from "../pages/Dashboard";
import AccountSettingPage from "../pages/AccountSettingPage";
import CompanyCreatePage from "../pages/OrganizationPages/CompanyCreatePage";
import LocationCompanyBranchPage from "../pages/OrganizationPages/LocationCompanyBranchPage";
import DepartmentPage from "../pages/OrganizationPages/DepartmentPage";
import DesignationPage from "../pages/OrganizationPages/DesignationPage";
import AnnouncementPage from "../pages/OrganizationPages/AnnouncementPage";
import PoliciesPage from "../pages/OrganizationPages/PoliciesPage";
import ExpensePage from "../pages/OrganizationPages/ExpensePage";
import EmployeeCreatePage from "../pages/EmployeesPages/EmployeeCreatePage";
import AwardsPage from "../pages/EmployeesPages/AwardsPage";
import TransfersPage from "../pages/EmployeesPages/TransfersPage";
import AttendanceListPage from "../pages/AttendancePages/AttendanceListPage";
import LeaveListPage from "../pages/LeavePages/LeaveListPage";
import PayslipListPage from "../pages/PaySlipPages/PayslipListPage";
import HolidayListPage from "../pages/HolidayPages/HolidayListPage";
import PayrollTemplatesPage from "../pages/PayRollPages/PayrollTemplatesPage";
import HourlyWagesPage from "../pages/PayRollPages/HourlyWagesPage";
import ManageSalaryPage from "../pages/PayRollPages/ManageSalaryPage";
import GeneratePayslipPage from "../pages/PayRollPages/GeneratePayslipPage";
import PaymentHistoryPage from "../pages/PayRollPages/PaymentHistoryPage";
import ContractTypePage from "../pages/ConstantsPages/ContractTypePage";
import QualificationPage from "../pages/ConstantsPages/QualificationPage";
import DocumentTypePage from "../pages/ConstantsPages/DocumentTypePage";
import AwardTypePage from "../pages/ConstantsPages/AwardTypePage";
import LeaveTypePage from "../pages/ConstantsPages/LeaveTypePage";
import WarningTypePage from "../pages/ConstantsPages/WarningTypePage";
import TerminationTypePage from "../pages/ConstantsPages/TerminationTypePage";
import ExpenseTypePage from "../pages/ConstantsPages/ExpenseTypePage";
import JobTypePage from "../pages/ConstantsPages/JobTypePage";
import EmployeeExitTypePage from "../pages/ConstantsPages/EmployeeExitTypePage";
import TravelArrangementTypePage from "../pages/ConstantsPages/TravelArrangementTypePage";
import PaymentMethodPage from "../pages/ConstantsPages/PaymentMethodPage";
import CurrencyTypePage from "../pages/ConstantsPages/CurrencyTypePage";
import RolesPage from "../pages/RolesPermissionsPages/RolesPage";
import PermissionPage from "../pages/RolesPermissionsPages/PermissionPage";
import GeneralConfigurationPage from "../pages/SettingPages/GeneralConfigurationPage";
import SystemLogoPage from "../pages/SettingPages/SystemLogoPage";
import SystemConfigurationPage from "../pages/SettingPages/SystemConfigurationPage";
import RoleConfigurationPage from "../pages/SettingPages/RoleConfigurationPage";
import AttendanceConfigurationPage from "../pages/SettingPages/AttendanceConfigurationPage";
import PayrollSalarySlipLogoPage from "../pages/SettingPages/PayrollSalarySlipLogoPage";
import RecruitmentConfigurationPage from "../pages/SettingPages/RecruitmentConfigurationPage";
import EmailNotificationsConfigurationPage from "../pages/SettingPages/EmailNotificationsConfigurationPage";
import AnimationEffectsConfigurationPage from "../pages/SettingPages/AnimationEffectsConfigurationPage";
import NotificationPositionConfigurationPage from "../pages/SettingPages/NotificationPositionConfigurationPage";

export default function Router () {
    
    return useRoutes([

        { path: '/', element: <LayoutComponent />,
            children: [
                    {path: 'dashboard', element: <Dashboard />},
                    { path:'account-setting', element:<AccountSettingPage />},
                    { path:'company', element:<CompanyCreatePage />},
                    { path:'location', element:<LocationCompanyBranchPage />},
                    { path:'department', element:<DepartmentPage />},
                    { path:'designation', element:<DesignationPage />},
                    { path:'announcement', element:<AnnouncementPage />},
                    { path:'policies', element:<PoliciesPage />},
                    { path:'expense', element:<ExpensePage />},
                    { path:'employees', element:<EmployeeCreatePage />},
                    { path:'awards', element:<AwardsPage />},
                    { path:'transfers', element:<TransfersPage />},
                    { path:'attendance', element:<AttendanceListPage />},
                    { path:'leave', element:<LeaveListPage />},
                    { path:'payslip', element:<PayslipListPage />},
                    { path:'holidays', element:<HolidayListPage />},
                    { path:'payrolltemplate', element:<PayrollTemplatesPage />},
                    { path:'hourly-wages', element:<HourlyWagesPage />},
                    { path:'manage-salary', element:<ManageSalaryPage />},
                    { path:'generate-payslip', element:<GeneratePayslipPage />},
                    { path:'payment-history', element:<PaymentHistoryPage />},
                    { path:'contract-type', element:<ContractTypePage />},
                    { path:'qualification', element:<QualificationPage />},
                    { path:'document-type', element:<DocumentTypePage />},
                    { path:'award-type', element:<AwardTypePage />},
                    { path:'leave-type', element:<LeaveTypePage />},
                    { path:'warning-type', element:<WarningTypePage />},
                    { path:'termination-type', element:<TerminationTypePage />},
                    { path:'expense-type', element:<ExpenseTypePage />},
                    { path:'job-type', element:<JobTypePage />},
                    { path:'employee-exit-type', element:<EmployeeExitTypePage />},
                    { path:'travel-arrangement-type', element:<TravelArrangementTypePage />},
                    { path:'payment-methods', element:<PaymentMethodPage />},
                    { path:'currency-type', element:<CurrencyTypePage />},
                    { path:'roles', element:<RolesPage />},
                    { path:'permissions', element:<PermissionPage />},
                     /** Setting Route */
                    { path:'general-configuration', element:<GeneralConfigurationPage />},
                    { path:'system-logo', element:<SystemLogoPage />},
                    { path:'system-configuration', element:<SystemConfigurationPage />},
                    { path:'role-configuration', element:<RoleConfigurationPage />},
                    { path:'attendance-configuration', element:<AttendanceConfigurationPage />},
                    { path:'payroll-logo-salaryslip', element:<PayrollSalarySlipLogoPage />},
                    { path:'recruitment-configuration', element:<RecruitmentConfigurationPage />},
                    { path:'email-notifications-configuration', element:<EmailNotificationsConfigurationPage />},
                    { path:'animation-effects-configuration', element:<AnimationEffectsConfigurationPage />},
                    { path:'notification-position-configuration', element:<NotificationPositionConfigurationPage />},
            ],
        },
        {
            path: '/',
            element: <PublicRoutesLayout />,
            children: [
                    // {  index: true, element: <LoginPage /> },
                    {  path: 'login', element: <LoginPage /> },
                    { path: 'page404', element: <MissingPage /> },    
            ],
        },
        { path: "*", element: <Navigate to="/page404" replace={true} /> },
    ])
}