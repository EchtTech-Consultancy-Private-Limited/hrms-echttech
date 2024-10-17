import React, { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { TbEditCircle } from "react-icons/tb";

const AttendanceListComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // const [entriesPerPage] = useState(10);
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to be dynamic

  const attendanceData = Array.from({ length: 100 }, (_, i) => ({
    status: i % 2 === 0 ? "Present" : "Absent",
    date: `2024-09-${(i % 30) + 1}`,
    clockIn: `09:00`,
    clockOut: `17:00`,
  }));

  const [currentPage, setCurrentPage] = useState(1);

  const totalEntries = attendanceData.length;
  const start = (currentPage - 1) * entriesPerPage;
  const end = start + entriesPerPage;
  const pageData = attendanceData.slice(start, end);

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

  return (
    <>
      <div className="w-full top-section  p-4 border rounded-lg bg-white">
        <div className="top-head flex justify-between items-center">
          <div className="left-part flex justify-between pb-3 w-full items-center">
            <h1 className="headings text-lg font-bold">Attendance Information</h1>
            <button className="main-bg-color text-white px-4 py-2 rounded w-full md:w-auto text-sm">
              Add Attendance
            </button>
          </div>
        </div>
        <hr class="mb-6"></hr>
        {/* <h2 className="text-lg pt-2 border-t font-semibold mb-2">
          Select Date
        </h2> */}
        <div className="form-labels">
          <div className="flex-gap items-center">
            <div className="first mb-4 ">
              <div>
                <label className="block text-black  font-bold">From :</label>
                <input
                  type="date"
                  className="block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="first mb-4 ">
              <div>
                <label className="block text-black  font-bold">To :</label>
                <input
                  type="date"
                  className="block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="first mb-4">
              <div>
                <button className="main-bg-color text-white px-4 py-2 rounded w-full md:w-auto text-sm">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="below-section data-table-attendance mt-5">
        <div className=" mx-auto p-6 border rounded-lg bg-white">
          <h1 className="text-lg  font-bold mb-2">Attendance List</h1>

          <div className="flex justify-between  items-center mb-4">
            <div className="mob-entries flex items-center">
              <label className="mb-0 text-sm text-gray-600" htmlFor="#">
                Show
              </label>
              <select
                className="border esel-entry border-gray-300 text-gray-600 rounded px-1 py-1 text-sm"
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1); // Reset to first page when changing entries per page
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span className="mb-0 mob-none-entries text-sm text-gray-600">
                entries
              </span>
            </div>

            <div className="flex justify-end items-center">
              <label
                className=" mb-0 text-sm text-gray-600 search-label"
                htmlFor="#"
              >
                Search :{" "}
              </label>
              <input
                type="text"
                placeholder="Search..."
                className="border ml-1 mob-search-dc border-gray-300 text-gray-600 rounded px-2 py-1 text-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-t-lg attendance-table">
              <thead>
                <tr className="main-bg-color text-white">
                  <th className="px-4 border-gray-300 border-l text-center py-3">
                    S. No
                  </th>
                  <th className="px-4 border-l border-gray-300 text-center py-3">
                    Check-in
                  </th>
                  <th className="px-4 border-l border-gray-300 text-center py-3">
                    Check-out
                  </th>
                  <th className="px-4 border-l border-gray-300 text-center py-3">
                    Date
                  </th>
                  <th className="px-4 border-l border-gray-300 text-center py-3">
                    Status
                  </th>
                  <th className="px-4 border-l border-gray-300 text-center py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {pageData.map((entry, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-300 hover:border-r border-gray-300 transition duration-300"
                  >
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {start + index + 1}
                    </td>
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {entry.clockIn}
                    </td>
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {entry.clockOut}
                    </td>
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {entry.date}
                    </td>
                    <td
                      className={`py-2 px-4 border-l border-gray-300 text-center ${
                        entry.status === "Absent"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {entry.status}
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

          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600 text-sm">
              Showing {start + 1} to {Math.min(end, totalEntries)} of{" "}
              {totalEntries} entries
            </span>
            <div>
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
        </div>
      </div>
    </>
  );
};

export default AttendanceListComponent;
