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
import { VscSymbolConstant } from "react-icons/vsc";
import { IoMdContract } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FiAward } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { MdCardTravel } from "react-icons/md";
import { BiExit } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { FaCriticalRole } from "react-icons/fa";


export const DASHBOARD_SIDEBAR_LINKS = [
	{
    key: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <HiOutlineViewGrid />,
    secondsidebar: 0,
    submenu: [] // No submenu for dashboard
  },
  {
    key: 'organization',
    label: 'Organization',
    path: '#',
    icon: <SiAwsorganizations />,
    secondsidebar: 0,

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
    secondsidebar: 0,

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
    secondsidebar: 0,

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
    secondsidebar: 0,

    submenu: [
      { key: 'daily', label: 'Daily Attendance', path: '/attendance' },
    ]
  },
  {
    key: 'leave',
    label: 'Leave',
    path: '#',
    icon: <HiOutlineShoppingCart />,
    secondsidebar: 0,

    submenu: [
      { key: 'leave-requests', label: 'Leave Requests', path: '/leave' },
    ]
  },
  {
    key: 'payslip',
    label: 'Pay Slip',
    path: '#',
    icon: <FaAmazonPay />,
    secondsidebar: 0,
    submenu: [
      { key: 'payslip', label: 'Pay Slip List', path: '/payslip' },
    ]
  },
  {
    key: 'holidays',
    label: 'Holidays',
    path: '/holidays',
    icon: <HiOutlineUsers />,
    secondsidebar: 0,
    submenu: [] // No submenu for holidays
  },
  {
    key: 'constants',
    label: 'Constants',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'roles-permission',
    label: 'Roles & Permissions',
    icon: <FaCriticalRole />,
    secondsidebar: 0,
    submenu: [
      { key: 'roles', label: 'Roles', path: '/roles' },
      { key: 'permissions', label: 'Permissions', path: '/permissions' },
    ]
  },
]


export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
    settingsidebar:1,
		path: '/#',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
    settingsidebar:0,
		path: '/#',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

export const SETTING_SIDEBAR_BOTTOM_LINKS = [
	{
    key: 'general-configuration',
    label: 'General',
		path: '/general-configuration',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'system-logo',
    label: 'Logos',
		path: '/system-logo',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'system-configuration',
    label: 'System',
		path: '/system-configuration',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'role-configuration',
    label: 'Role',
		path: '/role-configuration',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'attendance-configuration',
    label: 'Attendance',
		path: '/attendance-configuration',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'payroll-logo-salaryslip',
    label: 'PaySlip Logo',
		path: '/payroll-logo-salaryslip',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'recruitment-configuration',
    label: 'Recruitment',
		path: '/recruitment-configuration',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'email-notifications-configuration',
    label: 'Email Notifications',
		path: '/email-notifications-configuration',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'animation-effects-configuration',
    label: 'Animation Effects',
		path: '/animation-effects-configuration',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
  {
    key: 'notification-position-configuration',
    label: 'Notification Position',
		path: '/notification-position-configuration',
    icon: <VscSymbolConstant />,
    secondsidebar: 1,
    submenu: [], // No submenu for holidays
  },
]
export const CONSTANTS_SIDEBAR_LINKS = [
	{
		key: '1',
		label: 'Contract Type',
		path: '/contract-type',
		icon: <IoMdContract />

	},
	{
		key: '2',
		label: 'Qualification',
		path: '/qualification',
		icon: <MdCastForEducation />

	},
  {
		key: '3',
		label: 'Document Type',
		path: '/document-type',
		icon: <IoDocumentAttachOutline />

	},
  {
		key: '4',
		label: 'Award Type',
		path: '/award-type',
		icon: <FiAward/>
	},
  {
		key: '5',
		label: 'Leave Type',
		path: '/leave-type',
		icon: <CiCalendar />
	},
  {
		key: '6',
		label: 'Warning Type',
		path: '/warning-type',
		icon: <CiWarning />
	},
  {
		key: '7',
		label: 'Termination Type',
		path: '/termination-type',
		icon: <CiDollar  /> 
	},
  {
		key: '8',
		label: 'Expense Type',
		path: '/expense-type',
		icon: <CiDollar  /> 
	},
  {
		key: '9',
		label: 'Job Type',
		path: '/job-type',
		icon: <MdWorkOutline />

	},
  {
		key: '10',
		label: 'Employee Exit Type',
		path: '/employee-exit-type',
		icon:  <BiExit />

	},
  {
		key: '11',
		label: 'Travel Arrangement Type',
		path: '/travel-arrangement-type',
		icon: <MdCardTravel />
	},
  {
		key: '12',
		label: 'Payment Methods',
		path: '/payment-methods',
		icon: <MdPayment />
	},
  {
		key: '13',
		label: 'Currency Type',
		path: '/currency-type',
		icon: <CiDollar  /> 
	},
]
