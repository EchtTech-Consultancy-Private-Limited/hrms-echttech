import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'attendance',
		label: 'Attendance',
		path: '/attendance',
		icon: <HiOutlineCube />
	},
	{
		key: 'leave',
		label: 'Leave',
		path: '/leave',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'holidays',
		label: 'Holidays',
		path: '/holidays',
		icon: <HiOutlineUsers />
	},
	{
		key: 'payslip',
		label: 'Payslip',
		path: '/payslip',
		icon: <HiOutlineDocumentText />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
