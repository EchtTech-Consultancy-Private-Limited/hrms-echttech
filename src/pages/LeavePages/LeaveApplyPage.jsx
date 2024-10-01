import React, { useState } from 'react'
import ReactQuill from "react-quill"; // Importing the ReactQuill component
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const LeaveApplyPage = ({setIsModalOpen}) => {
    // Modal state
  

  const closeModal = () => {
     setIsModalOpen(false);
   
  };

  const [editorContent, setEditorContent] = useState('');

  const handleChange = (content) => {
    setEditorContent(content);
  };

  // Dropdown state
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Dropdown items
  const items = [
    'Privileged Leave',
    'Vacation Leave',
    'Earned Leave',
    'Casual Leave',
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Filter items based on search input
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal on background click
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            {/* 1. Heading */}
            <h2 className="text-xl font-semibold mb-4">Apply Leave</h2>
           
            <div className="flex gap-x-4" >
              <div className='sectors w-3/4' >
              <div className="">
              <label className="block text-gray-700 font-medium mb-2">
                Leave Type
              </label>
            </div>
            <div className="relative z-10 group mb-4">
              <button
                onClick={toggleDropdown}
                className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                <span className="mr-2">Leave Type</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                  <input
                    className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                    type="text"
                    placeholder="Search items"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoComplete="off"
                  />
                  {filteredItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                      onClick={() => {
                        // Handle item click
                        console.log(item);
                        setIsOpen(false);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
              </div>
            <div className="sectors w-3/4 ">
              <label className="block text-gray-700 font-medium mb-2">
                From Date
              </label>
              <input
                type="date"
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
              />
            </div>
            <div className="sectors w-3/4  ">
              <label className="block text-gray-700 font-medium mb-2">
                To Date
              </label>
              <input
                type="date"
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
              />
            </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Reason
              </label>
              <ReactQuill
                value={editorContent}
                onChange={handleChange}
                placeholder="Write your reason here..."
                theme="snow"
                className="border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Upload Document
              </label>
              <input
                type="file"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                id="file_upload"
                />
                <span className='text-sm text-gray-700' >Upload : Marriage Card, Medical Appointment, etc. </span>
            </div>
            <div className="flex  justify-end gap-x-2">
              <button
                onClick={closeModal}
                className="bg-amber-300 text-gray-700 px-4 py-2 rounded"
                >
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
 
export default LeaveApplyPage