import React, { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { TbEditCircle } from "react-icons/tb";

const RolesComponent = () => {
  const leaveData = Array.from({ length: 100 }, (_, i) => {
    const fromDate = new Date(`2024-09-${(i % 30) + 1}`);
    const toDate = new Date(`2024-09-${(i % 30) + 3}`);

    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0"); // Format day as 2 digits
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Format month as 2 digits
      const year = String(date.getFullYear()).slice(-2); // Get last two digits of year
      return `${day}/${month}/${year}`;
    };

    return {
      leaveType: i % 3 === 0 ? "CL" : i % 3 === 1 ? "PL" : "EL",
      fromDate: formatDate(fromDate), // Format date to dd/mm/yy
      toDate: formatDate(toDate), // Format date to dd/mm/yy
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
        {/* <div className="w-full md:w-1/2 top-section p-4 border rounded-lg main-bg-color">
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
        </div> */}

        <div className="w-full top-section p-6 border rounded-lg bg-white">
          <div className="top-head ">
            <div className="flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Add New Roles</h1>
            </div>
            <hr className="mb-6" />
            {/* Department Form Section */}
           
            <div className="department-below-sect form-labels field-btn-parent flex-gap">
              <div className="left-fields row first-row flex items-center flex-wrap justify-start  justify-between flex-gap">
                <div className="first mb-4">
                  <label className="block text-black font-bold">Type Of Role</label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter designation name"
                  />
                </div>

                <div className="first mb-4">
                  <label className="block text-black font-bold">Designation</label>
                  <select className="block w-full p-2 border border-gray-300 rounded-md">
                    <option>Select Designation</option>
                    <option>Accountant</option>
                    <option>Technical Support</option>
                    <option>Tester</option>
                    <option>Developer</option>
                  </select>
                </div>
                <div className="add-reset-btns first mb-4">
                <button
                  className=" main-bg-color mx-1 bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto "
                >
                  Save
                </button>
                <button
                  className=" bg-gray-400 text-white px-4 py-2 rounded w-full md:w-auto"
                >
                  Reset
                </button>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* Roles Table */}
      <div className="leave-table overflow-auto mt-5">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="main-bg-color">
              <th className="px-4 border-l border-gray-300 text-center py-3">
                ID
              </th>
              <th className="px-4 border-l border-gray-300 text-center py-3">
                Role Name
              </th>
              <th className="px-4 border-l border-gray-300 text-center py-3">
                Created By
              </th>
              <th className="px-4 border-l border-gray-300 text-center py-3">
                Created Date
              </th>
              <th className="px-4 border-l border-gray-300 text-center py-3">
                Status
              </th>
              <th className="px-4 border-l border-gray-300 text-center py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((leave, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-l border-gray-300 text-center">
                  {leave.leaveType}
                </td>
                <td className="py-2 px-4 border-l border-gray-300 text-center">
                  {leave.fromDate}
                </td>
                <td className="py-2 px-4 border-l border-gray-300 text-center">
                  {leave.toDate}
                </td>
                <td className="py-2 px-4 border-l border-gray-300 text-center">
                  {leave.reason}
                </td>
                <td className="py-2 px-4 border-l border-gray-300 text-center">
                  {leave.status}
                </td>
                <td className="py-2 px-4 border-l border-gray-300 text-center">
                  <div className="flex justify-center space-x-2">
                    <button className="text-blue-500">
                      <FaEye />
                    </button>

                    <button className="text-yellow-500">
                      <TbEditCircle />
                    </button>
                    <button className="text-red-500">
                      <FaTrashAlt />
                    </button>
                  </div>
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
        <div className="">
          <button
            onClick={handlePrevPage}
            className="main-bg-color text-white px-2 mx-1 py-1 text-xs rounded"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="main-bg-color text-white px-2 mx-1 py-1 text-xs rounded"
            disabled={end >= totalEntries}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolesComponent;
