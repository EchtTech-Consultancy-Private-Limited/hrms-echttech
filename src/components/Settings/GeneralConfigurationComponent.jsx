import React from "react";
import Selector from "../Common/Selector";
import { TextAreaEditor } from "../Common/TextAreaEditor";
import InputFiled from "../Common/InputFiled";

const GeneralConfigurationComponent = () => {
  const selectorData = [
    { name: "Afghanistan", cca2: "AF", flag: "🇦🇫", code: "93" },
    { name: "India", cca2: "IN", flag: "🇮🇳", code: "91" },
  ];
  return (
    <div className="w-full top-section p-4 border rounded-lg bg-white">
      <div className="top-head ">
        <div className="flex justify-between pb-3 w-full text-black">
          <h1 className="text-lg font-bold">General</h1>
        </div>
        <hr className="mb-6" />
        {/* Department Form Section */}
        <div className="department-below-sect form-labels">
          <div className=" flex-gap justify-between">
            <div className="first mb-4">
              <InputFiled
                fileType="text"
                filedName="Company Name"
                filedplaceholder="Company Name"
                filedlabelName="Company Name" 
              />
            </div>

            <div className="first mb-4">
              <InputFiled
                fileType="text"
                filedName="Contact Person"
                filedplaceholder="Contact Person"
                filedlabelName="Contact Person" 
              />
            </div>

            <div className="first mb-4">
              <InputFiled
                fileType="text"
                filedName="Email"
                filedplaceholder="Email"
                filedlabelName="Email" 
              />
            </div>
            <div className="first mb-4">
              <InputFiled
                fileType="text"
                filedName="Phone"
                filedplaceholder="Phone"
                filedlabelName="Phone" 
              />
            </div>
          </div>
          <TextAreaEditor />
        </div>
      </div>

      <div className="template-section ">
        <div className="flex justify-between p-4 w-full text-black">
          <h1 className="text-lg  font-bold">ISO Certification</h1>
        </div>
        <hr className="mb-6" />
        {/* Department Form Section */}
        <div className="department-below-sect form-labels">
          <div className="flex-gap template-sec justify-between">
            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Certification Type
              </label>

              <div className="relative group">
                <Selector selectorData={selectorData} />
              </div>
            </div>

            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Level
              </label>

              <div className="relative group">
                <Selector selectorData={selectorData} />
              </div>
            </div>

            <div className="first mb-4">
              <InputFiled
                fileType="text"
                filedName="Certification Authority"
                filedplaceholder="Certification Authority"
                filedlabelName="Certification Authority" 
              />
            </div>

            <div className="first mb-4">
              <InputFiled
                fileType="date"
                filedName="Date of Certification"
                filedplaceholder="Date of Certification"
                filedlabelName="Date of Certification" 
              />
            </div>

            <div className="first mb-4">
              <InputFiled
                fileType="date"
                filedName="Validity Period"
                filedplaceholder="Validity Period"
                filedlabelName="Validity Period" 
              />
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
  );
};

export default GeneralConfigurationComponent;
