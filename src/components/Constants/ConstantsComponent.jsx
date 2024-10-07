import React,{useState} from 'react'
import LeaveTypePage from '../../pages/ConstantsPages/LeaveTypePage';
const ConstantsComponent = () => {
  const tabs = [
    { id: 1, title: 'Tab 1', content: 'Content for Tab 1' },
    { id: 2, title: 'Tab 2', content: 'Content for Tab 2' },
    { id: 3, title: 'Tab 3', content: 'Content for Tab 3' },
    { id: 4, title: 'Tab 4', content: 'Content for Tab 4' },
    { id: 5, title: 'Tab 5', content: 'Content for Tab 5' },
    { id: 6, title: 'Tab 6', content: 'Content for Tab 6' },
    { id: 7, title: 'Tab 7', content: 'Content for Tab 7' },
    { id: 8, title: 'Tab 8', content: 'Content for Tab 8' },
    { id: 9, title: 'Tab 9', content: 'Content for Tab 9' },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id); // Set the first tab as active initially

  return (
    <div>
      <div className='tabs-section  p-4 border rounded-lg bg-white' >
      <div className="w-full p-4">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300">
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
            {tab.id === 1 && activeTab === 1 && <LeaveTypePage />}

          </div>
        ))}
      </div>
    </div>
      </div>
      
    </div>
  )
}

export default ConstantsComponent
