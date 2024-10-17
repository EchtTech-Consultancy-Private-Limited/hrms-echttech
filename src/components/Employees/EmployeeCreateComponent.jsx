import React, { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa"; // Import icons
import { TbEditCircle } from "react-icons/tb"; // Import icons
import ReactQuill from "react-quill"; // Importing the ReactQuill component
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const EmployeeCreateComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const [entriesPerPage] = useState(10);
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to be dynamic

  // Updated data structure to include all necessary fields
  const data = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    desName: `Announcement ${index + 1}`,
    desHead: `Summary for Announcement ${index + 1}`,
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

  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-4">
        <div className="w-full top-section p-4 border rounded-lg bg-white">
          <div className="top-head ">
            <div className="flex justify-between pb-3 w-full text-black p-2">
              <h1 className="text-lg font-bold">Add New Employees</h1>
            </div>
            <hr className="mb-6" />
            {/* Announcement Form Section */}
            <div className="department-below-sect w-full ">
              <div className="flex flex-wrap department-prnt">
                <div className="form-labels w-full">
                  <div className="row first-row flex items-center flex-wrap justify-start justify-between flex-gap">
                    <div className="first mb-4">
                      <label className="block text-black font-bold">
                        Announcement Title
                        <span className="text-red-500 text-sm ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter Announcement name"
                      />
                    </div>
                    <div className="first mb-4">
                      <label
                        htmlFor="start-date"
                        className="block text-black font-bold"
                      >
                        Start Date
                        <span className="text-red-500 text-sm ml-1">*</span>
                      </label>
                      <input
                        type="date"
                        id="start-date"
                        name="start-date"
                        className="custom-width-ann-sd block p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="first mb-4">
                      <label
                        htmlFor="end-date"
                        className="block text-black font-bold"
                      >
                        End Date
                        <span className="text-red-500 text-sm ml-1">*</span>
                      </label>
                      <input
                        type="date"
                        id="end-date"
                        name="end-date"
                        className=" block custom-width-ann-end p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="first mb-4">
                      <div className="">
                        <label className="block text-black font-bold">
                          Company
                          <span className="text-red-500 text-sm ml-1">*</span>
                        </label>
                        <select className="block block custom-width-ann-sd p-2 border border-gray-300 rounded-md">
                          <option>Select Company Type</option>
                          <option>Government</option>
                          <option>Private</option>
                          <option>LLP</option>
                        </select>
                      </div>
                    </div>
                    <div className="first mb-4">
                      <div className="">
                        <label className="block text-black font-bold">
                          Location
                          <span className="text-red-500 text-sm ml-1">*</span>
                        </label>
                        <select className="block block custom-width-ann-end p-2 border border-gray-300 rounded-md">
                          <option>Select Location</option>
                          <option>North</option>
                          <option>East</option>
                          <option>West</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full second-child">
                  <label className="block text-gray-700 font-bold mb-2">
                    Remark
                    <span className="text-red-500 text-sm ml-1">*</span>
                  </label>
                  <ReactQuill
                    value={editorContent}
                    onChange={handleChange}
                    placeholder="Write your reason here..."
                    theme="snow"
                    className=" rounded-lg announcement-quill"
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
              <div className="add-reset-btns top-border flex items-center justify-end p-4">
                <button className="mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                  Save
                </button>
                <button className="bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="announcement-list">
        <div className=" mx-auto p-6 border rounded-lg bg-white my-5">
          <h1 className="text-lg font-bold mb-2">Employee List</h1>

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
                className="border mob-search-dc ml-1 border-gray-300 text-gray-600 rounded px-2 py-1 text-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
    </div>
  );
};

export default EmployeeCreateComponent;
