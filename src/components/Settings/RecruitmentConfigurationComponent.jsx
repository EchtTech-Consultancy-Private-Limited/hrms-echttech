import React, { useState } from 'react';

const RecruitmentConfigurationComponent = () => {
  const [isJobsEnabled, setIsJobsEnabled] = useState(false);

  const handleToggle = () => {
    setIsJobsEnabled(prevState => !prevState);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* First Card: Recruitment Configuration */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-full ">
        <h2 className="text-lg font-semibold mb-4">Recruitment Configuration</h2>
        <hr className='mb-4' />
        
        {/* Toggle Switch */}
        <div className="flex items-center mb-4">
          <div className='w-1/2'>
          <label className="mr-2 block text-black font-bold ">Enable Jobs for Employees</label>
         

           <div className="toggle-switch w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out bg-gray-300"><div className="bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out translate-x-1"></div></div>
          </div>
         

          <div className='w-1/2'>
          <label className="mb-2 block text-black font-bold " htmlFor="fileFormat">Job Application File Format</label>
            <select
              id="fileFormat"
              className="border border-gray-300 rounded-lg w-1/2"
            >
              <option value="">Choose a format</option>
              <option value="doc">DOC</option>
              <option value="jpeg">JPEG</option>
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="txt">TXT</option>
            </select>
          </div>
        </div>

        
      </div>

      {/* Second Card: Job Listing (Logo Frontend) */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-full">
        <h2 className="text-lg font-semibold mb-4">Job Listing (Logo Frontend)</h2>
        <hr className='mb-4' />

        {/* Logo Content Here */}
      </div>
    </div>
  );
};

export default RecruitmentConfigurationComponent;
