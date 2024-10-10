import React, { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
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
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-4 leave-info-container">
        <div className="w-full md:w-1/2 top-section py-6 px-4 border rounded-lg bg-white">
          <div className="top-head flex justify-between items-center">
            <div className="left-part flex justify-between pb-3 w-full">
              <h1 className="headings">Leaves Information</h1>
            </div>
          </div>
          <h2 className="text-lg pt-2 border-t font-semibold mb-2">Select Date</h2>
          <div className="form-labels">
          <div className="flex-gap items-end">
            <div className="first ">
              <div>
                <label className="block text-black  font-bold">From :</label>
                <input
                  type="date"
                  className="block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="first ">
              <div>
                <label className="block text-black  font-bold">To :</label>
                <input
                  type="date"
                  className="block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className=" flex justify-end">
              <div>
                <button className="main-bg-color text-white px-4 py-2 rounded w-full md:w-auto text-sm">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="w-full md:w-1/2 top-section p-4 border rounded-lg main-bg-color">
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
            <div className="w-full md:w-1/2 p-1 border rounded-lg main-bg-color text-white">
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
      <div className="leave-table overflow-auto mt-5">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="main-bg-color">
              <th className="px-4 border-l border-gray-300 text-center py-3">Leave Type</th>
              <th className="px-4 border-l border-gray-300 text-center py-3">From Date</th>
              <th className="px-4 border-l border-gray-300 text-center py-3">To Date</th>
              <th className="px-4 border-l border-gray-300 text-center py-3">Status</th>
              <th className="px-4 border-l border-gray-300 text-center py-3">Reason</th> 
              <th className="px-4 border-l border-gray-300 text-center py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((leave, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-l border-gray-300 text-center">{leave.leaveType}</td>
                <td className="py-2 px-4 border-l border-gray-300 text-center">{leave.fromDate}</td>
                <td className="py-2 px-4 border-l border-gray-300 text-center">{leave.toDate}</td>
                <td className="py-2 px-4 border-l border-gray-300 text-center">{leave.status}</td>
                <td className="py-2 px-4 border-l border-gray-300 text-center">{leave.reason}</td>
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
         
         <div className="" >
         <button
          onClick={handlePrevPage}
          className="px-2 py-1 border rounded text-sm main-bg-color text-white mx-1 cursor-pointer"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="px-2 py-1 border rounded text-sm main-bg-color text-white cursor-pointer"
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
