import React, { useState } from 'react';

const RoleConfigurationComponent = () => {
  // State to manage switch buttons
  const [switches, setSwitches] = useState(Array(8).fill(false)); // 8 switches, 4 in each grid

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
        {/* <span className="mr-2 block text-black text-sm">Switch</span> */}
        <input
          type="checkbox"
          className="toggle-checkbox hidden"
          checked={switches[index]}
          onChange={() => toggleSwitch(index)}
        />
        {/* Added transition here */}
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
    "Employee can manage own information",
    "Employee can Bank Account ",
    "Employee can Qualification",
    "Employee can Work Experience",
    "Employee can manage own Documents",
    "Employee can Profile pictures",
    "Employee can Profile Information",
    "Employee can Social Information",
  ];

  return (
    <>
      {/* Create it here */}
      <div className="container mx-auto p-6 bg-white rounded rounded-lg">
        <h1 className="my-3 text-lg font-bold">Role Configuration</h1>
        <hr className="mb-6" />
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Grid 1 */}
          <div>
            {[0, 1, 2, 3].map((item, index) => (
              <GridItem key={index} index={item} title={titles[item]} />
            ))}
          </div>
          {/* Grid 2 */}
          <div>
            {[4, 5, 6, 7].map((item, index) => (
              <GridItem key={index} index={item} title={titles[item]} />
            ))}
          </div>
        </div>
        <div className="right-btn">
                  <div className="add-reset-btns flex items-center mb-4">
                    <button className=" mx-1 main-bg-color bg-blue-500 text-white px-2 py-2 rounded w-full md:w-auto ">
                      Save
                    </button>
                    <button className=" bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
                      Reset
                    </button>
                  </div>
                </div>
      </div>
    </>
  );
};

export default RoleConfigurationComponent;
