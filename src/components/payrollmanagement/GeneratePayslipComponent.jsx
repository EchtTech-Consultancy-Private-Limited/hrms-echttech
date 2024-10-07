import React, { useState } from "react";
import { FaEye, FaTrashAlt, FaPlus } from "react-icons/fa"; // Import icons
import { FaFileCsv, FaUpload } from "react-icons/fa";
import { IoDownload } from "react-icons/io5";

import { TbEditCircle } from "react-icons/tb"; // Import icons

const GeneratePayslipComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to be dynamic

  // Sample data to populate the table
  const data = [
    {
      id: 1,
      empName: "Abhijeet",
      empId: "ET111",
      location: "Delhi",
      hourlyRate: 15,
      type: "Monthly",
      createdBy: "John",
      basicsal: "9000",
      createdDate: "2023-10-01",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 2,
      empName: "Harwinder",
      empId: "ET112",
      location: "Delhi",
      hourlyRate: 20,
      type: "Monthly",
      createdBy: "Doe",
      basicsal: "9000",
      createdDate: "2023-10-02",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 3,
      empName: "Anil",
      empId: "ET113",
      location: "Delhi",
      hourlyRate: 18,
      type: "Monthly",
      createdBy: "Alice",
      basicsal: "9000",
      createdDate: "2023-10-03",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 4,
      empName: "Anuj",
      empId: "ET114",
      location: "Delhi",
      hourlyRate: 15,
      type: "Monthly",
      createdBy: "John",
      basicsal: "9000",
      createdDate: "2023-10-01",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 5,
      empName: "Vikram",
      empId: "ET115",
      location: "Delhi",
      hourlyRate: 20,
      type: "Monthly",
      createdBy: "Doe",
      basicsal: "9000",
      createdDate: "2023-10-02",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 6,
      empName: "Shailesh",
      empId: "ET116",
      location: "Delhi",
      hourlyRate: 18,
      type: "Monthly",
      createdBy: "Alice",
      basicsal: "9000",
      createdDate: "2023-10-03",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 7,
      empName: "Rohit",
      empId: "ET117",
      location: "Delhi",
      hourlyRate: 15,
      type: "Monthly",
      createdBy: "John",
      basicsal: "9000",
      createdDate: "2023-10-01",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 8,
      empName: "Vineet",
      empId: "ET118",
      location: "Delhi",
      hourlyRate: 20,
      type: "Monthly",
      createdBy: "Doe",
      basicsal: "9000",
      createdDate: "2023-10-02",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 9,
      empName: "Sushma",
      empId: "ET119",
      location: "Delhi",
      hourlyRate: 18,
      type: "Monthly",
      createdBy: "Alice",
      basicsal: "9000",
      createdDate: "2023-10-03",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 10,
      empName: "HariPrasad",
      empId: "ET120",
      location: "Delhi",
      hourlyRate: 15,
      type: "Monthly",
      createdBy: "John",
      basicsal: "9000",
      createdDate: "2023-10-01",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 11,
      empName: "Neelu",
      empId: "ET121",
      location: "Delhi",
      hourlyRate: 20,
      type: "Monthly",
      createdBy: "Doe",
      basicsal: "9000",
      createdDate: "2023-10-02",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
    {
      id: 12,
      empName: "Gaurav",
      empId: "ET122",
      location: "Delhi",
      hourlyRate: 18,
      type: "Monthly",
      createdBy: "Alice",
      basicsal: "9000",
      createdDate: "2023-10-03",
      status: "Unpaid",
      details: "",
      salary: "12,000",
    },
  ];

  // Filter data based on the search term
  const filteredData = data.filter((item) =>
    item.empName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / entriesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <div className="w-full top-section p-4 border rounded-lg bg-white">
        <div className="top-head ">
          <div className="flex justify-between pb-3 w-full text-black">
            <h1 className="text-lg font-bold">Generate Pay Slip</h1>
          </div>
          <hr className="mb-6" />
          {/* Department Form Section */}
          <div className="department-below-sect w-full">
            <div className="flex flex-col md:flex-row md:space-x-1 justify-between">
              <div className="flex-1 bg-white rounded-lg mb-4">
                <label className="block text-black  font-bold">Employee</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md">
                  <option value="" disabled selected>
                    Select Title
                  </option>
                  <option value="Mr">Engineer</option>
                  <option value="Ms">Developer</option>
                  <option value="Mrs">Accountant</option>
                  <option value="Dr">Administrator</option>
                </select>
              </div>

              <div className="flex-1 bg-white rounded-lg mb-4">
                <label className="block text-black  font-bold">Location</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md">
                  <option value="" disabled selected>
                    Select Title
                  </option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="chennai">Chennai</option>
                  <option value="gurgaon">Gurgaon</option>
                </select>
              </div>

              <div className="flex-1 bg-white rounded-lg mb-4">
                <label className="block text-black  font-bold">
                  Select Date Range
                </label>
                <input
                  type="date"
                  className="block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="add-reset-btns flex items-center justify-end pt-4">
                <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                  Search
                </button>
                <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full department-list mt-10">
        <div className="container dep-list-con mx-auto p-6 border rounded-lg bg-white">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg font-bold mb-2">Payment Information</h1>
            <div className="flex space-x-2">
              {/* Generate Salary Button */}
              <button className="flex items-center bg-red-500 text-sm text-white py-1 px-2 rounded-md">
                <IoDownload className="mr-1" /> Generate Salary
              </button>

              {/* Export Salary Button */}
              <button className="flex items-center border border-green-500 text-green-500 text-sm py-1 px-2 rounded-md">
                <FaFileCsv className="mr-1" /> Export Salary
              </button>

              {/* Click to Upload CSV Button */}
              <button className="flex items-center border border-green-500 text-green-500 text-sm py-1 px-2 rounded-md">
                <FaUpload className="mr-1" /> Click to Upload CSV
              </button>
            </div>
          </div>

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
              <label className=" mb-0 text-sm text-gray-600" htmlFor="#">
                Search :{" "}
              </label>
              <input
                type="text"
                placeholder="Search..."
                className="border mob-search-dc border-gray-300 text-gray-600 rounded px-2 py-1 text-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="bottom-section template-list overflow-auto">
            <table className="table-auto w-full bg-white">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 main-bg-color py-2">S.no</th>
                  <th className="px-4 main-bg-color py-2">Emp Id</th>
                  <th className="px-4 main-bg-color py-2">Emp Name</th>
                  <th className="px-4 main-bg-color py-2">Location</th>
                  <th className="px-4 main-bg-color py-2">Salary Type</th>
                  <th className="px-4 main-bg-color py-2">Basic Salary</th>
                  <th className="px-4 main-bg-color py-2">Net Salary</th>
                  <th className="px-4 main-bg-color py-2">Details</th>
                  <th className="px-4 main-bg-color py-2">Status</th>
                  <th className="px-4 main-bg-color py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentEntries.length > 0 ? (
                  currentEntries.map((item, index) => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{item.empId}</td>
                      <td className="border px-4 py-2">{item.empName}</td>
                      <td className="border px-4 py-2">{item.location}</td>
                      <td className="border px-4 py-2">{item.type}</td>
                      <td className="border px-4 py-2">{item.basicsal}</td>
                      <td className="border px-4 py-2">{item.salary}</td>
                      <td className="border px-4 py-2">{item.details}</td>
                      <td className="border px-4 py-2 text-red-500">
                        {item.status}
                      </td>
                      <td className="border px-4 py-2">
                        <div className="flex space-x-2">
                          <button className="text-blue-500">
                            <FaEye />
                          </button>
                          <button className="text-blue-500">
                            <FaPlus />
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
                  ))
                ) : (
                  <tr>
                    <td className="border px-4 py-2 text-center" colSpan={6}>
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="text-gray-600 mt-2">
              Showing {indexOfFirstEntry + 1} to{" "}
              {Math.min(indexOfLastEntry, filteredData.length)} of{" "}
              {filteredData.length} entries
            </div>
            <div>
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-2 py-1 mx-1 border rounded text-sm ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "main-bg-color text-white"
                }`}
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                disabled={
                  currentPage ===
                  Math.ceil(filteredData.length / entriesPerPage)
                }
                className={`px-2 py-1 border rounded text-sm ${
                  currentPage ===
                  Math.ceil(filteredData.length / entriesPerPage)
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "main-bg-color text-white"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePayslipComponent;
