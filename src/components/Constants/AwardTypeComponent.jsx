import React, { useState, useEffect } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { TbEditCircle } from "react-icons/tb";

const AwardTypeComponent = () => {
  // Data state
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Sample data
  useEffect(() => {
    const fetchData = () => {
      const sampleData = [];
      for (let i = 1; i <= 100; i++) {
        sampleData.push({
          sno: i,
          name: `Employee ${i}`,
          position: "Developer",
          office: "Office " + (i % 10),
          age: 25 + (i % 10),
          startDate: "2023-10-01",
          actions: (
            <>
              <button className="text-blue-500">
                <FaEye />
              </button>
              <button className="text-yellow-500 mx-2">
                <TbEditCircle />
              </button>
              <button className="text-red-500">
                <FaTrashAlt />
              </button>
            </>
          ),
        });
      }
      setData(sampleData);
    };
    fetchData();
  }, []);

  // Filtered data based on search term
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.office.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="form-container shadow radius">
        <div className="top-hdr flex justify-between">
          <h1 className="font-bold text-lg">Add New Contract Type</h1>
        </div>
        <hr class="mb-6"></hr>
        <form className="mt-0">
          <div className="">
            <div className="form-labels">
              <div className="row first-row flex items-center flex-wrap justify-start md:space-x-3 justify-between flex-gap">
                <div className="first mb-4">
                  <label
                    htmlFor=""
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Award Type
                  </label>
                  <input
                    className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                    type="text"
                    placeholder="Company Name"
                  />
                </div>

                <div className="button mt-2 flex justify-between first mb-4">
                  <div className="add-reset-btns flex items-center justify-end">
                    <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                      Save
                    </button>
                    <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="contract-type-list  mx-auto p-6 border rounded-lg bg-white mt-5">
        <h1 className="text-lg font-bold mb-2">Award Type List</h1>
        {/* Entries selector and search bar */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <span>Show</span>
            <select
              className="mx-2 border border-gray-300 rounded-md w-[58px]"
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="flex items-center">
            <span>Search:</span>
            <input
              type="text"
              className="ml-2 border border-gray-300 rounded-md p-1"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="main-bg-color">
                <th className="border border-gray-300 px-4 py-2">S.No</th>
                <th className="border border-gray-300 px-4 py-2">Award Type</th>
                <th className="border border-gray-300 px-4 py-2">
                  Employee Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Department</th>
                {/* <th className="border border-gray-300 px-4 py-2">Age</th> */}
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((entry) => (
                <tr key={entry.sno} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.sno}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.position}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.office}
                  </td>
                  {/* <td className="border border-gray-300 px-4 py-2">{entry.age}</td> */}
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.startDate}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.actions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing {indexOfFirstEntry + 1} to {indexOfLastEntry} of{" "}
            {filteredData.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <button
              className={`px-2 py-1 main-bg-color text-white text-sm rounded-md ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className={`px-2 py-1 main-bg-color text-white text-sm rounded-md ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardTypeComponent;
