import React, { useState } from "react";
import { FaEye, FaTrashAlt, FaPlus } from "react-icons/fa";
import { TbEditCircle } from "react-icons/tb";
import LeaveApplyPage from "../../pages/LeavePages/LeaveApplyPage";

const LeaveComponentList = () => {

  const leaveData = Array.from({ length: 100 }, (_, i) => {
    const fromDate = new Date(`2024-09-${(i % 30) + 1}`);
    const toDate = new Date(`2024-09-${(i % 30) + 3}`);
  
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0'); // Format day as 2 digits
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Format month as 2 digits
      const year = String(date.getFullYear()).slice(-2); // Get last two digits of year
      return `${day}/${month}/${year}`;
    };
  
    return {
      leaveType: i % 3 === 0 ? "CL" : i % 3 === 1 ? "PL" : "EL",
      fromDate: formatDate(fromDate), // Format date to dd/mm/yy
      toDate: formatDate(toDate),     // Format date to dd/mm/yy
      status: i % 2 === 0 ? "Approved" : "Pending",
      reason: i % 2 === 0 ? "Personal Work" : "Medical Appointment", // Adding reason
    };
  });
  

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const entriesPerPage = 10;

  const totalEntries = leaveData.length;
  const start = (currentPage - 1) * entriesPerPage;
  const end = start + entriesPerPage;
  const pageData = leaveData.slice(start, end);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (end < totalEntries) {
      setCurrentPage(currentPage + 1);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Top Section for filtering and leave balance */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-4">
        <div className="w-full md:w-1/2 top-section py-6 px-4 border rounded-lg bg-white">
          <div className="top-head flex justify-between items-center">
            <div className="left-part flex justify-between pb-3 w-full">
              <h1 className="headings">Leaves Information</h1>
            </div>
          </div>
          <h2 className="text-lg pt-6 border-t font-semibold mb-2">Select Date</h2>
          <div className="flex pt-2 flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
            <label className="text-gray-600 mb-0" >From: </label>
            <input
              type="date"
              className="border border-gray-300 text-gray-500 p-1 rounded w-full md:w-auto"
              placeholder="Start Date"
            />
            <label className="text-gray-600 mb-0" >To: </label>
            <input
              type="date"
              className="border border-gray-300 text-gray-500 p-1 rounded w-full md:w-auto"
              placeholder="End Date"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto text-sm">
              Filter
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 top-section p-4 border rounded-lg bg-blue-500">
          <div className="top-head flex justify-between items-center">
            <div className="left-part flex justify-between pb-3 w-full text-white">
              <h1 className="headings">Leaves Balance</h1>
              <button
                className="apply-leave-btn bg-white text-blue-500 px-4 py-2 rounded w-full md:w-auto text-sm"
                onClick={openModal} // Open modal on button click
              >
                Apply Leave
              </button>
            </div>
          </div>
          <div className="flex pt-1 flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2 p-1 border rounded-lg bg-white">
              <h2 className="font-semibold text-sm pb-1">Total Leave</h2>
              <div className="py-2 border-t">
                <p className="text-sm">
                  CL: <span className="font-medium text-sm">10</span>
                </p>
                <p className="text-sm">
                  PL: <span className="font-medium text-sm">15</span>
                </p>
                <p className="text-sm">
                  EL: <span className="font-medium text-sm">20</span>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-1 border rounded-lg bg-blue-500 text-white">
              <h2 className="font-semibold text-sm pb-1">Rest Leave</h2>
              <div className="py-2 border-t">
                <p className="text-sm">
                  CL: <span className="font-medium text-sm">5</span>
                </p>
                <p className="text-sm">
                  PL: <span className="font-medium text-sm">3</span>
                </p>
                <p className="text-sm">
                  EL: <span className="font-medium text-sm">2</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <LeaveApplyPage  setIsModalOpen={setIsModalOpen}/>
      )}
  
      {/* Leave Table */}
      <div className="leave-table overflow-auto mt-10">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Leave Type</th>
              <th className="border border-gray-300 px-4 py-2">From Date</th>
              <th className="border border-gray-300 px-4 py-2">To Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Reason</th> 
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((leave, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{leave.leaveType}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.fromDate}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.toDate}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.status}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.reason}</td>
                <td className="px-4 py-3 flex justify-start">
                  <FaEye className="text-blue-500 cursor-pointer mr-2" />
                  <FaPlus className="text-blue-500 cursor-pointer mr-2" />
                  <TbEditCircle className="text-green-500 cursor-pointer mr-2" />
                  <FaTrashAlt className="text-red-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-between items-center mt-4">
        
        <span>
          Page {currentPage} of {Math.ceil(totalEntries / entriesPerPage)}
        </span>
         
         <div className="" >
         <button
          onClick={handlePrevPage}
          className="bg-blue-500 text-white px-2 mx-1 py-1 text-xs rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white px-2 mx-1 py-1 text-xs rounded"
          disabled={end >= totalEntries}
        >
          Next
        </button>
         </div>
        
      </div>
    </>
  );
};

export default LeaveComponentList;
