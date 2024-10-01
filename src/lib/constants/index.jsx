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
    path: '/company',
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
    path: '/company',
    icon: <HiUserGroup />,
    submenu: [
      { key: 'employees', label: 'Employees', path: '/employees' },
      { key: 'awards', label: 'Awards', path: '/awards' },
      { key: 'transfers', label: 'Transfers', path: '/transfers' },
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
    path: '/leave',
    icon: <HiOutlineShoppingCart />,
    submenu: [
      { key: 'leave-requests', label: 'Leave Requests', path: '/leave' },
    ]
  },
  {
    key: 'payslip',
    label: 'Pay Slip',
    path: '/payslip',
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
