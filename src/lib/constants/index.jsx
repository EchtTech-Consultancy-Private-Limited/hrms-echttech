import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <HiOutlineViewGrid />,
    submenu: [] // No submenu for dashboard
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
      { key: 'leave-history', label: 'Leave History', path: '/leave/history' },
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
