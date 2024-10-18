import React, { useState } from 'react';

const AttendanceConfigurationComponent = () => {
  // State to manage switch buttons
  const [switches, setSwitches] = useState(Array(2).fill(false)); // Only 2 switches for 2 blocks

  // Function to toggle switch
  const toggleSwitch = (index) => {
    const newSwitches = [...switches];
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);
  };

  // Grid Item Component
  const GridItem = ({ index, title }) => (
    <div className="p-2 border border-gray-300 rounded-lg mb-4">
      <p className="block text-black font-bold mb-2">{title}</p>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="toggle-checkbox hidden"
          checked={switches[index]}
          onChange={() => toggleSwitch(index)}
        />
        <div
          className={`toggle-switch w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out ${
            switches[index] ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              switches[index] ? 'translate-x-6' : 'translate-x-1'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );

  // Titles for each switch
  const titles = [
    "Enable Clockin Button On header (Show everywhere)",
    "Enable Clock In and Clock out",
  ];

  return (
    <>
      <div className=" bg-white rounded rounded-lg top-head">
        <h2 className=" text-lg font-bold pb-3">Attendance Configuration</h2>
        <hr className="mb-6" />
        {/* Grid layout with only two items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {titles.map((title, index) => (
            <GridItem key={index} index={index} title={title} />
          ))}
          
        </div>
        <div className="right-btn">
          <div className="add-reset-btns justify-end flex items-center pr-4 pb-4">
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

export default AttendanceConfigurationComponent;
