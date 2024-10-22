import React, { useState } from "react";

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
      <label for="type" className="block text-black mb-2">{title}</label>
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
            switches[index] ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              switches[index] ? "translate-x-6" : "translate-x-1"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );

  // Titles for each switch
  const titles = [
    "Employee can manage own contact information",
    "Employee can manage own bank Account ",
    "Employee can own qualification",
    "Employee can manage own work experience",
    "Employee can manage own documents",
    "Employee can manage own profile picture",
    "Employee can manage own profile information",
    "Employee can manage own social information",
  ];

  return (
    <>
      {/* Create it here */}
      <div className=" bg-white rounded rounded-lg top-head ">
        <h2 className=" text-lg font-bold pb-3">Employee</h2>
        <hr className="mb-6" />
        {/* Responsive grid layout */}
        <div className="p-4" >
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
          <div className="add-reset-btns flex justify-end items-center">
            <button className=" mx-1 main-bg-color bg-blue-500 text-white px-2 py-2 rounded w-full md:w-auto ">
              Save
            </button>
            <button className=" bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
              Reset
            </button>
          </div>
        </div>
        </div>
        
      </div>

      {/* <div className=" bg-white rounded rounded-lg top-head mt-4">
        <h2 className=" text-lg font-bold pb-3">Admin</h2>
        <hr className="mb-6" />
      
        <div className="p-4 " >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        </div>
        <div className="right-btn">
          <div className="add-reset-btns flex justify-end items-center">
            <button className=" mx-1 main-bg-color bg-blue-500 text-white px-2 py-2 rounded w-full md:w-auto ">
              Save
            </button>
            <button className=" bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
              Reset
            </button>
          </div>
        </div>
        </div>
        
      </div> */}
    </>
  );
};

export default RoleConfigurationComponent;
