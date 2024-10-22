import React, { useState } from "react";

const LoginMethodComponent = () => {
  const [isEmployeeIdEnabled, setIsEmployeeIdEnabled] = useState(false);
  const [isEmailIdEnabled, setIsEmailIdEnabled] = useState(false);

  const handleEmployeeIdToggle = () => {
    setIsEmployeeIdEnabled(!isEmployeeIdEnabled);
  };

  const handleEmailIdToggle = () => {
    setIsEmailIdEnabled(!isEmailIdEnabled);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="mb4">
        <div className="top-hdr flex justify-between">
          <h1 className="font-bold text-lg">Login Method</h1>
        </div>
        <hr className="mb-6"></hr>

        <div className="pt-8 px-4 flex gap-x-2">
          <div className="w-1/2">
          <div className="p-2 border border-gray-300 rounded-lg flex items-center justify-between" >
          <label className="block m-0 ">Using Employee ID</label>
          <div className="flex items-center">
            <span className="">{isEmployeeIdEnabled ? "" : ""}</span>
            <label className="relative inline-flex items-center cursor-pointer m-0">
              <input
                type="checkbox"
                className="sr-only"
                checked={isEmployeeIdEnabled}
                onChange={handleEmployeeIdToggle}
              />
              <div
                className={`toggle-bg w-10 h-6 rounded-full transition-all duration-300 ${
                  isEmployeeIdEnabled ? "bg-blue-500" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`toggle-dot ml-1 absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                  isEmployeeIdEnabled ? "translate-x-4" : "translate-x-0"
                }`}
              ></div>
            </label>
          </div>
          </div>
          </div>
          
          
          <div className="w-1/2" >
            <div className="p-2 border border-gray-300 rounded-lg flex items-center justify-between" >
            <label className="block m-0">Using Email ID</label>
            <div className="flex items-center">
              <span className="">{isEmailIdEnabled ? "" : ""}</span>
              <label className="relative inline-flex items-center cursor-pointer m-0">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isEmailIdEnabled}
                  onChange={handleEmailIdToggle}
                />
                <div
                  className={`toggle-bg w-10 h-6 rounded-full transition-all duration-300 ${
                    isEmailIdEnabled ? "bg-blue-500" : "bg-gray-200"
                  }`}
                ></div>
                <div
                  className={`toggle-dot ml-1 absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                    isEmailIdEnabled ? "translate-x-4" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>
            </div>
            
          </div>
          
        </div>
        <div className="right-btn">
          <div className="add-reset-btns flex justify-end items-center pb-8 pr-4 pt-6">
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
  );
};

export default LoginMethodComponent;
