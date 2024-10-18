import React, { useState } from "react";
import Selector from "../Common/Selector";

const NotificationPositionConfigurationComponent = () => {
  // State to manage each switch and select box
  const [emailSwitchOn, setEmailSwitchOn] = useState(false); // State for the first switch
  const [anotherSwitchOn, setAnotherSwitchOn] = useState(false); // State for the second switch
  const [notificationPosition, setNotificationPosition] =
    useState("bottom-left"); // State for select box

  const selectorData = [
    { name: "Afghanistan", cca2: "AF", flag: "🇦🇫", code: "93" },
    { name: "India", cca2: "IN", flag: "🇮🇳", code: "91" },
  ];

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
            switchOn ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              switchOn ? "translate-x-6" : "translate-x-1"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );

  return (
    <>
      <div className=" bg-white rounded-lg">
        <div className="top-hdr flex justify-between">
          <h1 className="font-bold text-lg">Animation Effect Configuration </h1>
        </div>
        {/* Grid layout with three items inline, responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {/* First grid: Select box for position */}
          <div className="p-2 border border-gray-300 rounded-lg mb-4">
            <p className="block text-black font-bold mb-2">
              Position for notification
            </p>
            <div className="relative z-10 group">
              <Selector selectorData={selectorData} />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Set position for notification
            </p>
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
        <div className="right-btn flex justify-end">
          <div className="add-reset-btns flex items-center  mb-4">
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

export default NotificationPositionConfigurationComponent;
