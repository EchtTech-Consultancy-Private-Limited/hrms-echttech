

import React, { useState } from 'react';

const NotificationPositionConfigurationComponent = () => {
  // State to manage each switch and select box
  const [emailSwitchOn, setEmailSwitchOn] = useState(false); // State for the first switch
  const [anotherSwitchOn, setAnotherSwitchOn] = useState(false); // State for the second switch
  const [notificationPosition, setNotificationPosition] = useState('bottom-left'); // State for select box

  // Function to toggle the email switch
  const toggleEmailSwitch = () => {
    setEmailSwitchOn(!emailSwitchOn);
  };

  // Function to toggle the second switch
  const toggleAnotherSwitch = () => {
    setAnotherSwitchOn(!anotherSwitchOn);
  };

  // Handle select box change
  const handlePositionChange = (e) => {
    setNotificationPosition(e.target.value);
  };

  // Grid Item Component for switch
  const GridItem = ({ title, switchOn, toggleSwitch }) => (
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
        <h1 className="my-3 text-lg font-bold">Position For Notification</h1>
        <hr className="mb-6" />
        {/* Grid layout with three items inline, responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First grid: Select box for position */}
          <div className="p-2 border border-gray-300 rounded-lg mb-4">
            <p className="block text-black font-bold mb-2">Position for notification</p>
            <select
              className="border border-gray-300 rounded p-2 w-full"
              value={notificationPosition}
              onChange={handlePositionChange}
            >
              <option value="bottom-left">Bottom-left</option>
              <option value="bottom-right">Bottom-right</option>
              <option value="top-left">Top-left</option>
              <option value="top-right">Top-right</option>
            </select>
            <p className="mt-2 text-sm text-gray-600">Set position for notification</p>
          </div>

          {/* Second grid: Switch for enabling email notification */}
          <GridItem
            title="Enable email notification"
            switchOn={emailSwitchOn}
            toggleSwitch={toggleEmailSwitch}
          />

          {/* Third grid: Another independent switch */}
          <GridItem
            title="Another Configuration Switch"
            switchOn={anotherSwitchOn}
            toggleSwitch={toggleAnotherSwitch}
          />
        </div>

        {/* Save and Reset buttons */}
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

export default  NotificationPositionConfigurationComponent;


