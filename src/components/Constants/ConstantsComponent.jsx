import React,{useState} from 'react'
import ContractTypePage from '../../pages/ConstantsPages/ContractTypePage';
import LeaveTypePage from '../../pages/ConstantsPages/LeaveTypePage';
import AwardTypePage from '../../pages/ConstantsPages/AwardTypePage';
import QualificationPage from '../../pages/ConstantsPages/QualificationPage';
import DocumentTypePage from '../../pages/ConstantsPages/DocumentTypePage';
import WarningTypePage from '../../pages/ConstantsPages/WarningTypePage';
import TerminationTypePage from '../../pages/ConstantsPages/TerminationTypePage';
import ExpenseTypePage from '../../pages/ConstantsPages/ExpenseTypePage';
import JobTypePage from '../../pages/ConstantsPages/JobTypePage';
import EmployeeExitTypePage from '../../pages/ConstantsPages/EmployeeExitTypePage';






const ConstantsComponent = () => {
  const tabs = [
    { id: 1, title: 'Contract Type', content: 'Content for Tab 1' },
    { id: 2, title: 'Qualification', content: 'Content for Tab 2' },
    { id: 3, title: 'Document Type', content: 'Content for Tab 3' },
    { id: 4, title: 'Award Type', content: 'Content for Tab 4' },
    { id: 5, title: 'Leave Type', content: 'Content for Tab 5' },
    { id: 6, title: 'Warning Type', content: 'Content for Tab 6' },
    { id: 7, title: 'Termination Type', content: 'Content for Tab 7' },
    { id: 8, title: 'Expense Type', content: 'Content for Tab 8' },
    { id: 9, title: 'Job Type', content: 'Content for Tab 9' },
    { id: 10, title: 'Employee Exit Type', content: 'Content for Tab 10' },
    { id: 11, title: 'Travel Arrangement Type', content: 'Content for Tab 11' },
    { id: 12, title: 'Payment Methods', content: 'Content for Tab 12' },
    { id: 13, title: 'Currency Type', content: 'Content for Tab 13' },

  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id); // Set the first tab as active initially

  return (
    <div>
      <div className='tabs-section  p-4 border rounded-lg bg-white' >
      <div className="w-full p-4">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300 overflow-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 transition-all ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            <p className="text-gray-700">{tab.content}</p>
            {tab.id === 1 && activeTab === 1 && <ContractTypePage />}
            {tab.id === 2 && activeTab === 2 && <QualificationPage />}
            {tab.id === 3 && activeTab === 3 && <DocumentTypePage />}
            {tab.id === 4 && activeTab === 4 && <AwardTypePage />}
            {tab.id === 5 && activeTab === 5 && <LeaveTypePage />}
            {tab.id === 6 && activeTab === 6 && <WarningTypePage />}
            {tab.id === 7 && activeTab === 7 && <TerminationTypePage />}
            {tab.id === 8 && activeTab === 8 && <ExpenseTypePage />}
            {tab.id === 9 && activeTab === 9 && <JobTypePage />}
            {tab.id === 10 && activeTab === 10 && <EmployeeExitTypePage />}








          </div>
        ))}
      </div>
    </div>
      </div>
      
    </div>
  )
}

export default ConstantsComponent
