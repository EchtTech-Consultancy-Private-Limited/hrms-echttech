import React, { useState } from "react";
import Selector from "./../Common/Selector"

const SystemConfigurationPage = () => {
  const [isCodeIgniterEnabled, setIsCodeIgniterEnabled] = useState(false);
  const selectorData = [
    { name: "Afghanistan", cca2: "AF", flag: "🇦🇫", code: "93" },
    { name: "India", cca2: "IN", flag: "🇮🇳", code: "91" },
  ];
  const handleToggle = () => {
    setIsCodeIgniterEnabled(!isCodeIgniterEnabled);
  };

  return (
    <div className="content-mid bg-white rounded-lg">
      <div className=" bg-white rounded-lg top-head">
        <h2 className="text-lg font-semibold pb-3">
          System Configuration
        </h2>
        <hr className="mb-6" />
        <div className="flex items-center gap-6 px-4 both-address template-section">
          {/* First Half */}
          <div className="left-container template-section reg-add pr-4">
            <div>
              <label className="block mb-2 mt-2" htmlFor="app-name-1">
                Application Name
              </label>
              <input
                id="app-name-1"
                type="text"
                className="border border-gray-300 rounded p-2 w-full"
                placeholder="Enter application name"
              />
            </div>
            <div>
              <label className="block mb-2 mt-2" htmlFor="app-name-2">
                Default Currency
              </label>
              <div className="relative z-10 group" >
              <Selector selectorData={selectorData}/>
              
              </div>
              
            </div>
            <div>
              <label className="block mb-2 mt-2" htmlFor="app-name-3">
                Default Currency (Symbol code)
              </label>
              <div className="relative z-10 group" >
              <Selector selectorData={selectorData}/>
              </div>
            </div>
            <div>
              <label className="block mb-2 mt-2" htmlFor="app-name-4">
                Currency Position
              </label>
              <div className="relative z-10 group" >
              <Selector selectorData={selectorData}/>
              </div>
            </div>
            <div>
              <label className="block mb-2 mt-2">
                Enable CodeIgniter Page Rendered on Footer
              </label>
              <div className="flex items-center">
                <span className="mr-2 mb-2">
                  {isCodeIgniterEnabled ? "On" : "Off"}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isCodeIgniterEnabled}
                    onChange={handleToggle}
                  />
                  <div
                    className={`toggle-bg w-10 h-6 rounded-full transition-all duration-300 ${
                      isCodeIgniterEnabled ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  ></div>
                  <div
                    className={`toggle-dot absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                      isCodeIgniterEnabled ? "translate-x-4" : "translate-x-0"
                    }`}
                  ></div>
                </label>
              </div>
            </div>
          </div>
          {/* Second Half */}
          <div className="right-container template-section corp-add pr-4">
            <label className="block mb-2">Select Date Format:</label>
            <div className="flex flex-col">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="date-format"
                  value="dd-mm-yy"
                  className="mr-2"
                />
                dd-mm-yy (14-10-2024)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="date-format"
                  value="mm-dd-yy"
                  className="mr-2"
                />
                mm-dd-yy (10-14-2024)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="date-format"
                  value="yy-mm-dd"
                  className="mr-2"
                />
                yy-mm-dd (24-10-20)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="date-format"
                  value="full-date"
                  className="mr-2"
                />
                Full Date (14-10-2024)
              </label>
            </div>
            <div className=" mt-4">
              <label className="mr-2">Footer Text</label>
              <input
                type="text"
                className="custom-footer border border-gray-300 rounded p-2 w-full"
                placeholder="ET HRMS Consultancy Services Pvt. Ltd."
              />
            </div>
            <div className="flex items-center mt-4">
              <label className="mr-2">Enable Current year on footer</label>
              <div className="flex items-center">
                <span className="mr-2 mb-2">
                  {isCodeIgniterEnabled ? "(On)" : "(Off)"}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isCodeIgniterEnabled}
                    onChange={handleToggle}
                  />
                  <div
                    className={`toggle-bg w-10 h-6 rounded-full transition-all duration-300 ${
                      isCodeIgniterEnabled ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  ></div>
                  <div
                    className={`toggle-dot absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                      isCodeIgniterEnabled ? "translate-x-4" : "translate-x-0"
                    }`}
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemConfigurationPage;
