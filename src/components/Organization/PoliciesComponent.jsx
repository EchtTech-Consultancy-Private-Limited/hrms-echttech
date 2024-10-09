import React, { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa"; // Import icons
import { TbEditCircle } from "react-icons/tb"; // Import icons
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PoliciesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to be dynamic

  // Updated data structure to include all necessary fields
  const data = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    desName: `List ${index + 1}`,
    desHead: `Summary for List ${index + 1}`,
    startDate: `2024-10-${(index % 30) + 1}`, // Example start date
    endDate: `2024-11-${(index % 30) + 1}`, // Example end date
    addedBy: `User ${index + 1}`,
  }));

  // Filter data based on the search term
  const filteredData = data.filter((item) =>
    item.desName.toLowerCase().includes(searchTerm.toLowerCase())
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

  // Quill editor
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-4">
        <div className="w-full top-section p-6 border rounded-lg bg-white">
          <div className="top-head ">
            <div className="flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Add New Policy</h1>
            </div>
            <hr className="mb-6" />

            {/* Policy Form Section */}
            <div className="department-below-sect w-full">
              <div className="flex justify-between policy-container">
                {/* Grid Item 1: Policy Title */}
                <div className="policy-left-fields flex justify-between">
                  <div className="first bg-white rounded-lg mb-4">
                    <label className="block text-black font-bold m-2">
                      Policy Title
                    </label>
                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter policy title"
                    />
                  </div>

                  {/* Grid Item 2: Company Type */}
                  <div className="second bg-white mb-4 rounded-lg">
                    <label className="block text-black font-bold m-2">
                      Company Type
                    </label>
                    <select className="block w-full p-2 border border-gray-300 rounded-md">
                      <option>Select Company Type</option>
                      <option>Government</option>
                      <option>Private</option>
                      <option>LLP</option>
                      <option>Foundation</option>
                    </select>
                  </div>
                  </div>
                  <div className="policy-right-fields">
                  <div className="third mb-4">
                    <label className="block text-black font-bold m-2">
                      Policy Content
                    </label>
                    <ReactQuill
                      value={editorContent}
                      onChange={handleEditorChange}
                      className="bg-white w-full"
                    />
                  </div>
                  </div>
              </div>
              <div className="add-reset-btns flex justify-end">
                <button className="apply-leave-btn mx-1 main-bg-color text-white px-4 py-2 rounded w-full md:w-auto text-sm">
                  Save
                </button>
                <button className="apply-leave-btn bg-gray-400 text-white px-4 py-2 rounded w-full md:w-auto text-sm">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="policy-list">
        <div className=" mx-auto p-6 border rounded-lg bg-white my-5">
          <h1 className="text-lg font-bold mb-2">Policy List</h1>

          <div className="">
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
                  className="border mob-search-dc border-gray-300 text-gray-600 rounded ml-1 px-2 py-1 text-sm"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-t-lg organization-table">
              <thead>
                <tr className="main-bg-color text-white">
                  <th className="px-4 border-gray-300 main-bg-color border-l text-center py-3">
                    S. No
                  </th>
                  <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                    Title
                  </th>
                  <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                    Summary
                  </th>
                  <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                    Start Date
                  </th>
                  <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                    End Date
                  </th>
                  <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">
                    Added By
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
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {entry.id}
                    </td>
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {entry.desName}
                    </td>
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {entry.desHead}
                    </td>
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {entry.startDate}
                    </td>
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {entry.endDate}
                    </td>
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {entry.addedBy}
                    </td>
                    <td className="py-2 px-4 border-l border-gray-300 text-center">
                      {/* Action Buttons */}
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
    </>
  );
};

export default PoliciesComponent;
