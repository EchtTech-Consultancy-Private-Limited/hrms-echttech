import React, { useState } from "react";
import { FaEye, FaTrashAlt, FaPlus } from "react-icons/fa"; // Import icons
import { AiOutlinePlus } from "react-icons/ai";
import { TbEditCircle } from "react-icons/tb"; // Import icons

const PayrollTemplatesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to be dynamic

  const data = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    payrollTemplate: `Template ${index + 1}`,
    basicSalary: Math.floor(Math.random() * 10000 + 30000), // Random salary
    netSalary: Math.floor(Math.random() * 50000 + 60000), // Random net salary
    totalAllowance: Math.floor(Math.random() * 5000), // Random allowance
    createdBy: `User ${index + 1}`,
    createDate: new Date().toLocaleDateString(), // Random date
  }));

  // Filter data based on the search term
  const filteredData = data.filter((item) =>
    item.payrollTemplate.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="flex flex-col justify-between items-center gap-x-4">
        <div className="w-full top-section p-4 border rounded-lg bg-white">
          <div className="top-head ">
            <div className="flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Set Up PayRoll Template</h1>
            </div>
            <hr className="mb-6" />
            {/* Department Form Section */}
            <div className="department-below-sect w-full">
              <div className="flex flex-col md:flex-row md:space-x-1 justify-between">
                <div className="flex-1 bg-white rounded-lg mb-4">
                  <label className="block text-black  font-bold">
                    Name of Template
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter designation name"
                  />
                </div>

                <div className="flex-1 bg-white mb-4 rounded-lg">
                  <label className="block text-black font-bold">Select</label>
                  <select className="block w-full p-2 border border-gray-300 rounded-md">
                    <option>Select Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                  </select>
                </div>
                <div className="flex-1 bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">Monthly</label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter Value"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="template-section ">
            <div className="flex justify-between pb-3 pt-5 w-full text-black">
              <h1 className="text-2x font-bold">Earning Salary</h1>
            </div>
            <hr className="mb-6" />
            {/* Department Form Section */}
            <div className="department-below-sect w-full">
              <div className="flex flex-wrap template-sec">
                <div className="w-full md:w-1/4 bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Basic Salary
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Dearness Allowance
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Overtime(Per hour)
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    House Rent Allowance
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Medical Allowance
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Leave Travel Assistance
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Conveyance Allowance
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Special Allowance
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Statuary Bonus
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Education Allowance
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="template-section ">
            <div className="flex justify-between pb-3 pt-5 w-full text-black">
              <h1 className="text-2x font-bold">Deduction Salary</h1>
            </div>
            <hr className="mb-6" />
            {/* Department Form Section */}
            <div className="department-below-sect w-full">
              <div className="flex flex-wrap template-sec">
                <div className="w-full md:w-1/4 bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    EPF Employee Contribution
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    ESIC Employee
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Tax Deduction
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Security Deposit
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Medical Insurance
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="template-section ">
            <div className="flex justify-between pb-3 pt-5 w-full text-black">
              <h1 className="text-2x font-bold">Benefits Salary</h1>
            </div>
            <hr className="mb-6" />
            {/* Department Form Section */}
            <div className="department-below-sect w-full">
              <div className="flex flex-wrap template-sec">
                <div className="w-full md:w-1/4 bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    EPF Employee Contribution
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    ESIC Employee
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">Gratuity</label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Medical Insurance
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="total-salary-section ">
            <div className="flex justify-between pb-3 pt-5 w-full text-black">
              <h1 className="text-2x font-bold">Earning Salary</h1>
            </div>
            <hr className="mb-6" />
            {/* Department Form Section */}
            <div className="department-below-sect w-full">
              <div className="flex flex-wrap template-sec">
                <div className="w-full md:w-1/4 bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Gross Salary
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md opacity-40 cursor-not-allowed"
                    placeholder="0"
                    disabled
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Totak Allowance + Benefits
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md opacity-40 cursor-not-allowed"
                    placeholder="0"
                    disabled
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Total Deduction
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md opacity-40 cursor-not-allowed"
                    placeholder="0"
                    disabled
                  />
                </div>

                <div className="w-full md:w-1/4  bg-white rounded-lg mb-4">
                  <label className="block text-black font-bold">
                    Net Salary
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md opacity-40 cursor-not-allowed"
                    placeholder="0"
                    disabled
                  />
                </div>
              </div>
              <div className="add-reset-btns flex items-center justify-end pt-4">
                <button className="apply-leave-btn mx-1 bg-blue-500 text-white px-2 py-2 rounded w-full md:w-auto main-bg-color">
                  Save
                </button>
                <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full department-list mt-5">
          <div className=" dep-list-con mx-auto p-6 border rounded-lg bg-white">
            <div className="flex justify-between pb-3 w-full text-black items-center">
              <h1 className="text-lg font-bold mb-2">Template List</h1>
              <button className=" add-btn main-bg-color rounded color-white flex items-center justify-between"><AiOutlinePlus className="color-white"/>Add New</button>
            </div>
            <hr className="mb-6" />
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

            <div className="bottom-section template-list overflow-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-t-lg">
                <thead>
                  <tr className="main-bg-color text-white">
                    {/* <th className="px-4 border-gray-300 main-bg-color border-l text-center py-3">
                      S. No
                    </th> */}
                    <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                      Payroll Template
                    </th>
                    <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                      Basic Salary
                    </th>
                    <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                      Net Salary
                    </th>
                    <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                      Total Allowance
                    </th>
                    <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                      Created By
                    </th>
                    <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                      Create Date
                    </th>
                    <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentEntries.map((entry) => (
                    <tr
                      key={entry.id}
                      className="hover:bg-gray-300 hover:border-r border-gray-300 transition duration-300"
                    >
                      {/* <td className="py-2 px-4 border-l border-gray-300 text-center">
                        {entry.id}
                      </td> */}
                      <td className="py-2 px-4 border-l border-gray-300 text-center">
                        {entry.payrollTemplate}
                      </td>
                      <td className="py-2 px-4 border-l border-gray-300 text-center">
                        {entry.basicSalary}
                      </td>
                      <td className="py-2 px-4 border-l border-gray-300 text-center">
                        {entry.netSalary}
                      </td>
                      <td className="py-2 px-4 border-l border-gray-300 text-center">
                        {entry.totalAllowance}
                      </td>
                      <td className="py-2 px-4 border-l border-gray-300 text-center">
                        {entry.createdBy}
                      </td>
                      <td className="py-2 px-4 border-l border-gray-300 text-center">
                        {entry.createDate}
                      </td>
                      <td className="py-2 px-4 border-l border-gray-300 text-center">
                        {/* Action Buttons */}
                        <div className="flex justify-center space-x-2">
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
                  ))}
                </tbody>
              </table>

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
                        : "bg-blue-500 text-white"
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
      </div>
    </div>
  );
};

export default PayrollTemplatesComponent;
