import React, { useState } from 'react'
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { TbEditCircle } from "react-icons/tb";

const RolesComponent = () => {
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
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-4 leave-info-container">
        <div className="w-full md:w-1/2 top-section p-4 border rounded-lg main-bg-color">
          <div className="top-head flex justify-between items-center">
            <div className="left-part flex justify-between pb-3 w-full text-white">
              <h1 className="headings">Leaves Balance</h1>
              <button
                className="apply-leave-btn bg-white text-blue-500 px-4 py-2 rounded w-full md:w-auto text-sm"
                onClick={openModal} // Open modal on button click
              >
                Add Roles
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Roles Table */}
      <div className="leave-table overflow-auto mt-5">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="main-bg-color">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Role Name</th>
              <th className="border border-gray-300 px-4 py-2">Created By</th>
              <th className="border border-gray-300 px-4 py-2">Created Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th> 
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((leave, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{leave.leaveType}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.fromDate}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.toDate}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.reason}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.status}</td>
                <td className="px-4 py-3 flex justify-start">
                  <FaEye className="text-blue-500 cursor-pointer mr-2" />
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
            className="main-bg-color text-white px-2 mx-1 py-1 text-xs rounded"
            disabled={currentPage === 1}
          >Previous
          </button>
          <button
            onClick={handleNextPage}
            className="main-bg-color text-white px-2 mx-1 py-1 text-xs rounded"
            disabled={end >= totalEntries}
          >Next
          </button>
         </div>
      </div>
    </div>
  )
}

export default RolesComponent
