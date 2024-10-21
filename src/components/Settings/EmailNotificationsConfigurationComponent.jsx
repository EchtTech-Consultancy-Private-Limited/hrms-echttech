
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
      <div className="bg-white rounded-lg">
      <div className="top-hdr flex justify-between">
          <h1 className="font-bold text-lg">Email Notification Configuration</h1>
        </div>
        <hr className="mb-6"></hr>
        <div className='p-4' >
        {/* Grid layout with only one switch */}
        <div className="grid grid-cols-2 gap-6 mt-4">
          <GridItem title="Enable email notification" />
        </div>
        <div className="right-btn ">
          <div className="add-reset-btns flex items-center justify-end mb-4">
            <button className="mx-1 main-bg-color bg-blue-500 text-white px-2 py-2 rounded w-full md:w-auto">
              Save
            </button>
            <button className="bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
              Reset
            </button>
          </div>
        </div>
        </div>
     
      </div>
    </>
  );
};

export default EmailNotificationsConfigurationComponent;

