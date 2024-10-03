import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
  HiUserGroup
} from 'react-icons/hi';
import { SiAwsorganizations } from "react-icons/si";
import { FaAmazonPay } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { GiPayMoney } from "react-icons/gi";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <HiOutlineViewGrid />,
    submenu: [] // No submenu for dashboard
  },
  {
    key: 'organization',
    label: 'Organization',
    path: '#',
    icon: <SiAwsorganizations />,
    submenu: [
      { key: 'company', label: 'Company', path: '/company',icon:<IoMdArrowDropright  /> },
      { key: 'location', label: 'Location', path: '/location' },
      { key: 'department', label: 'Departments', path: '/department' },
      { key: 'designation', label: 'Designations', path: '/designation' },
      { key: 'announcement', label: 'Announcements', path: '/announcement' },
      { key: 'policies', label: 'Policies', path: '/policies' },
      { key: 'expense', label: 'Expenses', path: '/expense' },
    ]
  },
  {
    key: 'employees',
    label: 'Employees',
    path: '#',
    icon: <HiUserGroup />,
    submenu: [
      { key: 'employees', label: 'Employees', path: '/employees' },
      { key: 'awards', label: 'Awards', path: '/awards' },
      { key: 'transfers', label: 'Transfers', path: '/transfers' },
    ]
  },
  {
    key: 'payroll',
    label: 'Pay Roll',
    path: '#',
    icon: <GiPayMoney />,
    submenu: [
      { key: 'payrolltemplate', label: 'Payroll Templates', path: '/payrolltemplate' },
      { key: 'hourly-wages', label: 'Hourly Wages', path: '/hourly-wages' },
      { key: 'manage-salary', label: 'Manage Salary', path: '/manage-salary' },
      { key: 'generate-payslip', label: 'Generate Payslip', path: '/generate-payslip' },
      { key: 'payment-history', label: 'Payment History', path: '/payment-history' },
    ]
  },
  {
    key: 'attendance',
    label: 'Attendance',
    path: '/attendance',
    icon: <HiOutlineCube />,
    submenu: [
      { key: 'daily', label: 'Daily Attendance', path: '/attendance' },
    ]
  },
  {
    key: 'leave',
    label: 'Leave',
    path: '#',
    icon: <HiOutlineShoppingCart />,
    submenu: [
      { key: 'leave-requests', label: 'Leave Requests', path: '/leave' },
    ]
  },
  {
    key: 'payslip',
    label: 'Pay Slip',
    path: '#',
    icon: <FaAmazonPay />,
    submenu: [
      { key: 'payslip', label: 'Pay Slip List', path: '/payslip' },
    ]
  },
  {
    key: 'holidays',
    label: 'Holidays',
    path: '/holidays',
    icon: <HiOutlineUsers />,
    submenu: [] // No submenu for holidays
  },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/#',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/#',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
