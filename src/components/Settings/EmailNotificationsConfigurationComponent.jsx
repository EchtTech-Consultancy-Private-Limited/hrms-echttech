// import React from 'react'

// const EmailNotificationsConfigurationComponent = () => {
//   return (
//     <div>
//       EmailNotificationsConfigurationComponent
//     </div>
//   )
// }

// export default EmailNotificationsConfigurationComponent




import React, { useState } from 'react';

const EmailNotificationsConfigurationComponent = () => {
  // State to manage the single switch
  const [switchOn, setSwitchOn] = useState(false);

  // Function to toggle the switch
  const toggleSwitch = () => {
    setSwitchOn(!switchOn);
  };

  // Grid Item Component
  const GridItem = ({ title }) => (
    <div className="p-2 border border-gray-300 rounded-lg mb-4">
      <p className="block text-black font-bold mb-2">{title}</p>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="toggle-checkbox hidden"
          checked={switchOn}
          onChange={toggleSwitch}
        />
        <div
          className={`toggle-switch w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out ${
            switchOn ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              switchOn ? 'translate-x-6' : 'translate-x-1'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );

  return (
    <>
      <div className="container mx-auto p-6 bg-white rounded-lg">
        <h1 className="my-3 text-lg font-bold">Email Notification Configuration</h1>
        <hr className="mb-6" />
        {/* Grid layout with only one switch */}
        <div className="grid grid-cols-1 gap-6">
          <GridItem title="Enable email notification" />
        </div>
        <div className="right-btn">
          <div className="add-reset-btns flex items-center mb-4">
            <button className="mx-1 main-bg-color bg-blue-500 text-white px-2 py-2 rounded w-full md:w-auto">
              Save
            </button>
            <button className="bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailNotificationsConfigurationComponent;

