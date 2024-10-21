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
      <div className=" bg-white rounded-lg top-head top-section">
        <h2 className="text-lg font-semibold pb-3">
          System Configuration
        </h2>
        <hr className="mb-6" />
        <div className="flex items-start gap-6 px-4 both-address template-section">
          {/* First Half */}
          <div className="left-container template-section reg-add pr-4 pt-4">
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
              <div className="relative group" >
              <Selector selectorData={selectorData}/>
              
              </div>
              
            </div>
            <div>
              <label className="block mb-2 mt-2" htmlFor="app-name-3">
                Currency Code(Symbol code)
              </label>
              <div className="relative group" >
              <Selector selectorData={selectorData}/>
              </div>
            </div>
            <div>
              <label className="block mb-2 mt-2" htmlFor="app-name-4">
                Currency Code
              </label>
              <div className="relative group" >
              <Selector selectorData={selectorData}/>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4 mt-2">
              <label className="block mb-2 mt-2">
                Enable CodeIgniter Page Rendered on Footer
              </label>
              <div className="flex items-center">
                
                <label className="relative inline-flex items-center cursor-pointer mb-0">
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
          <div className="right-container template-section corp-add pt-4">
            <label className="block mb-2 mt-2">Date Format:</label>
            <div className="flex flex-col">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="date-format"
                  value="dd-mm-yy"
                  className="mr-2"
                />
                dd-mm-YYYY (14-10-2024)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="date-format"
                  value="mm-dd-yy"
                  className="mr-2"
                />
                mm-dd-YYYY (10-14-2024)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="date-format"
                  value="yy-mm-dd"
                  className="mr-2"
                />
                dd-MM-YYYY (14-Oct-20)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="date-format"
                  value="full-date"
                  className="mr-2"
                />
                MM-dd-YYYY (Oct-10-2024)
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
            <div className="flex items-center justify-between mb-4 mt-2">
              <label className="block mb-2 mt-2">
                Enable Current year on footer
              </label>
              <div className="flex items-center">
                
                <label className="relative inline-flex items-center cursor-pointer mb-0">
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
        <div className="add-reset-btns top-border flex items-center justify-end p-4">
        <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
          Save
        </button>
        <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
          Reset
        </button>
      </div>
      </div>
    </div>
  );
};

export default SystemConfigurationPage;
