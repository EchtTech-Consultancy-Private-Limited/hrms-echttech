import React, { useState } from 'react'
import { FaEye, FaTrashAlt } from 'react-icons/fa'; // Import icons
import { TbEditCircle } from 'react-icons/tb'; // Import icons

const DesignationComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // const [entriesPerPage] = useState(10);
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to be dynamic

  const data = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    desName: `Designation ${index + 1}`,
    desHead: `Head ${index + 1}`,
    addedBy: `User ${index + 1}`,
  }));

  // Filter data based on the search term
  const filteredData = data.filter(item =>
    item.desName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

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
    

  
       // Dropdown for country
       const [isOpencountry, setIsOpencountry] = useState(false);
       const [searchTermcountry, setSearchTermcountry] = useState("");
       const [selectedItemcountry, setSelectedItemcountry] = useState("Developer");
     
       // Dropdown items
       const itemcountry = [
         "Accountant",
         "Human Resource",
         "Director",
         "Operator",
       ];
     
       // Toggle dropdown visibility
       const toggleDropdowncountry = (e) => {
        e.preventDefault();
         setIsOpencountry((prev) => !prev);
       };
    
       const filteredItemscountry = itemcountry.filter((item) =>
        item.toLowerCase().includes(searchTermcountry.toLowerCase())
      );
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-4">
        <div className="w-full top-section p-6 border rounded-lg bg-white">
          <div className="top-head ">
            <div className="flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Add New Designation</h1>
              
            </div>
            <hr className="mb-6" />
            {/* Department Form Section */}
            <div className="department-below-sect form-labels field-btn-parent flex-gap">
              <div className="left-fields row first-row flex items-center flex-wrap justify-start  justify-between flex-gap">
                <div className="first mb-4">
                  <label className="block text-black font-bold">Name</label>
                  <input
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter designation name"
                  />
                </div>

                <div className="first mb-4">
                  <label className="block text-black font-bold">Designation</label>
                   
 <div className="relative z-10 group">
              <button
                onClick={toggleDropdowncountry}
                type="button"
                className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                  
                <span className="mr-2">{selectedItemcountry}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpencountry && (
                <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                  <input
                    className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                    type="text"
                    placeholder="Search items"
                    value={searchTermcountry}
                    onChange={(e) => setSearchTermcountry(e.target.value)}
                    autoComplete="off"
                  />
                  {filteredItemscountry.map((itemcountry, index) => (
                    <div
                      key={index}
                      className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                      onClick={() => {
                        // Handle item click
                        // console.log(item);
                        setSelectedItemcountry(itemcountry); // Update selected item
                        setIsOpencountry(false);
                      }}
                    >
                      {itemcountry}
                    </div>
                  ))}
                </div>
              )}
                 </div>
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

      <div className="department-list mt-5">
        <div className=" mx-auto p-6 border rounded-lg bg-white">
        <h1 className="text-lg font-bold mb-2">Designation List</h1>

        <div className='flex justify-between  items-center mb-4' >
            <div className='mob-entries flex items-center'>
               <label className='mb-0 text-sm text-gray-600' htmlFor="#">Show</label>
              <select
                className="border esel-entry border-gray-300 text-gray-600 rounded px-1 py-1 text-sm"
                value={entriesPerPage}
                onChange={e => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1); // Reset to first page when changing entries per page
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span className='mb-0 mob-none-entries text-sm text-gray-600' >entries</span>
            </div>
           
           
            <div className='flex justify-end items-center' >
            <label className=' mb-0 text-sm text-gray-600 search-label' htmlFor="#">Search : </label>
             <input
            type="text"
            placeholder="Search..."
            className="border ml-1 mob-search-dc border-gray-300 text-gray-600 rounded px-2 py-1 text-sm"
            onChange={e => setSearchTerm(e.target.value)}
          />

              </div>  
          
          </div>
          <div className='overflow-auto' >
          <table className="min-w-full bg-white border border-gray-300 rounded-t-lg organization-table">
            <thead>
              <tr className="main-bg-color text-white">
                <th className="px-4 border-gray-300 main-bg-color border-l text-center py-3">S. No</th>
                <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Designation</th>
                <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Department</th>
                <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Added By</th>
                <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map(entry => (
                <tr key={entry.id} className="hover:bg-gray-300 hover:border-r border-gray-300 transition duration-300">
                  <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.id}</td>
                  <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.desName}</td>
                  <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.desHead}</td>
                  <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.addedBy}</td>
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
        Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredData.length)} of {filteredData.length} entries
      </div>
      <div>
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`px-2 py-1 mx-1 border rounded text-sm ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'main-bg-color text-white'}`}
      >
        Previous
      </button>
      <button
        onClick={nextPage}
        disabled={currentPage === Math.ceil(filteredData.length / entriesPerPage)}
        className={`px-2 py-1 border rounded text-sm ${currentPage === Math.ceil(filteredData.length / entriesPerPage) ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'main-bg-color text-white'}`}
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

export default DesignationComponent;
