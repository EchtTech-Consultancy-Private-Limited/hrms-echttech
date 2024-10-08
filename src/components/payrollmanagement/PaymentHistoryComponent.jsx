import React, { useState } from "react";
import { FaEye, FaTrashAlt, FaPlus } from "react-icons/fa"; // Import icons
import { TbEditCircle } from "react-icons/tb"; // Import icons

const PaymentHistoryComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to be dynamic

  // Sample data to populate the table
  const data = [
    {
      id: 1,
      empId: "ET112",
      name: "Akash",
      sal: "10,000",
      createdDate: "2023-10-01",
      slip: "Generated",
      type: "NEFT",
    },
    {
      id: 2,
      empId: "ET113",
      name: "Sachin",
      sal: "12,000",
      createdDate: "2023-10-02",
      slip: "Generated",
      type: "CASH",
    },
    {
      id: 3,
      empId: "ET114",
      name: "Rohit",
      sal: "10,000",
      createdDate: "2023-10-03",
      slip: "Generated",
      type: "NEFT",
    },
    {
      id: 4,
      empId: "ET115",
      name: "Girish",
      sal: "9,000",
      createdDate: "2023-10-01",
      slip: "Generated",
      type: "CASH",
    },
    {
      id: 5,
      empId: "ET116",
      name: "Anubha",
      sal: "11,000",
      createdDate: "2023-10-02",
      slip: "Generated",
      type: "NEFT",
    },
    {
      id: 6,
      empId: "ET117",
      name: "Sarita",
      sal: "13,000",
      createdDate: "2023-10-03",
      slip: "Generated",
      type: "CASH",
    },
    {
      id: 7,
      empId: "ET118",
      name: "Praveen",
      sal: "14,500",
      createdDate: "2023-10-01",
      slip: "Generated",
      type: "NEFT",
    },
    {
      id: 8,
      empId: "ET119",
      name: "Rahul",
      sal: "16,000",
      createdDate: "2023-10-02",
      slip: "Generated",
      type: "CASH",
    },
    {
      id: 9,
      empId: "ET120",
      name: "Suraj",
      sal: "17,799",
      createdDate: "2023-10-03",
      slip: "Generated",
      type: "NEFT",
    },
    {
      id: 10,
      empId: "ET121",
      name: "Aman",
      sal: "2000",
      createdDate: "2023-10-01",
      slip: "Generated",
      type: "CASH",
    },
    {
      id: 11,
      empId: "ET122",
      name: "Dheeraj",
      sal: "1000",
      createdDate: "2023-10-02",
      slip: "Generated",
      type: "NEFT",
    },
    {
      id: 12,
      empId: "ET123",
      name: "Ram",
      sal: "6000",
      createdDate: "2023-10-03",
      slip: "Generated",
      type: "CASH",
    },
  ];

  // Filter data based on the search term
  const filteredData = data.filter((item) =>
    item.empId.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="w-full department-list mt-0">
        <div className=" dep-list-con mx-auto p-6 border rounded-lg bg-white">
          <h1 className="text-lg font-bold mb-2">List All Payment History</h1>

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
              <label className=" mb-0 text-sm text-gray-600 search-label" htmlFor="#">
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
                  <th className="px-4 main-bg-color py-2">Emp ID</th>
                  <th className="px-4 main-bg-color py-2">Emp Name</th>
                  <th className="px-4 main-bg-color py-2">Paid Amount</th>
                  <th className="px-4 main-bg-color py-2">Payment Month</th>
                  <th className="px-4 main-bg-color py-2">Payment Date</th>
                  <th className="px-4 main-bg-color py-2">Payment Type</th>
                  <th className="px-4 main-bg-color py-2">Pay Slip</th>
                  <th className="px-4 main-bg-color py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentEntries.length > 0 ? (
                  currentEntries.map((item, index) => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{item.empId}</td>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">{item.sal}</td>
                      <td className="border px-4 py-2">{item.createdDate}</td>
                      <td className="border px-4 py-2">{item.createdDate}</td>
                      <td className="border px-4 py-2">{item.type}</td>
                      <td className="border px-4 py-2">{item.slip}</td>
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

export default PaymentHistoryComponent;
