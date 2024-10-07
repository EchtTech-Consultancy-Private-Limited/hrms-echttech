import React, { useState } from "react";
import { FaEye, FaTrashAlt, FaPlus } from "react-icons/fa"; // Import icons
import { TbEditCircle } from "react-icons/tb"; // Import icons

const ManageSalaryComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to be dynamic

  // Sample data to populate the table
  const data = [
    {
      id: 1,
      payrollTemplate: "Wage 1",
      hourlyRate: 15,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 2,
      payrollTemplate: "Wage 2",
      hourlyRate: 20,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 3,
      payrollTemplate: "Wage 3",
      hourlyRate: 18,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 4,
      payrollTemplate: "Wage 1",
      hourlyRate: 15,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 5,
      payrollTemplate: "Wage 2",
      hourlyRate: 20,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 6,
      payrollTemplate: "Wage 3",
      hourlyRate: 18,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 7,
      payrollTemplate: "Wage9",
      hourlyRate: 15,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 8,
      payrollTemplate: "Wage 2",
      hourlyRate: 20,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 9,
      payrollTemplate: "Wage 3",
      hourlyRate: 18,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 10,
      payrollTemplate: "Wage 1",
      hourlyRate: 15,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 11,
      payrollTemplate: "Wage 2",
      hourlyRate: 20,
      createdBy: "",
      createdDate: "",
    },
    {
      id: 12,
      payrollTemplate: "Wage 3",
      hourlyRate: 18,
      createdBy: "",
      createdDate: "",
    },
  ];

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
      <div className="w-full top-section p-4 border rounded-lg bg-white">
        <div className="top-head ">
          <div className="flex justify-between pb-3 w-full text-black">
            <h1 className="text-lg font-bold">Manage Salary</h1>
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
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div className="add-reset-btns flex items-center justify-end pt-4">
                <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                  Search
                </button>
                {/* <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
                  Reset
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full department-list mt-10">
        <div className=" dep-list-con mx-auto p-6 border rounded-lg bg-white">
          <h1 className="text-lg font-bold mb-2">All Employee salary List</h1>

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
                <tr className="main-bg-color text-center">
                  <th className="px-4 py-2 text-center">Employee Name</th>
                  <th className="px-4 py-2 text-center">User Name</th>
                  <th className="px-4 py-2 text-center">Designation</th>
                  <th className="px-4 py-2 text-center">Hourly</th>
                  <th className="px-4 py-2 text-center">Monthaly</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentEntries.length > 0 ? (
                  currentEntries.map((item, index) => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {item.payrollTemplate}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {item.hourlyRate}
                      </td>
                      <td className="px-4 py-2 text-center td-select flex justify-evenly items-center">
                        <input type="checkbox" />
                        <select name="cars" id="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                          <option value="audi">Audi</option>
                        </select>
                      </td>
                      <td className="border px-4 py-2 td-select2">
                        <input type="checkbox" />
                        <select name="cars" id="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                          <option value="audi">Audi</option>
                        </select>
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
  );
};

export default ManageSalaryComponent;
