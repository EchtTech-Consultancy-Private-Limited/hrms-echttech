import React,  { useState } from 'react'
import { FaEye, FaTrashAlt } from 'react-icons/fa'; // Import icons
import { TbEditCircle } from 'react-icons/tb'; // Import icons

const DepartmentComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // const [entriesPerPage] = useState(10);
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to be dynamic


  const data = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    deptName: `Department ${index + 1}`,
    deptHead: `Head ${index + 1}`,
    location: `Location ${index + 1}`,
    addedBy: `User ${index + 1}`,
    numOfEmployees: Math.floor(Math.random() * 100),
    field1: `Field 1 - ${index + 1}`,
    field2: `Field 2 - ${index + 1}`,
    field3: `Field 3 - ${index + 1}`,
    field4: `Field 4 - ${index + 1}`,
  }));

  // Filter data based on the search term
  const filteredData = data.filter(item =>
    item.deptName.toLowerCase().includes(searchTerm.toLowerCase())
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
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-4">
        
        <div className="w-full top-section p-4 border rounded-lg bg-white">
          <div className="top-head ">
            <div className=" flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Add New Department</h1>
            </div>
            <hr className='mb-6' />
            {/* Department Form Section */}
            <div className='department-below-sect w-full '>
              <div className='flex flex-col md:flex-row md:space-x-4 justify-between' >
              <div className="flex-1 bg-white rounded-lg mb-4 ">
                <div>
                <label className="block text-black font-bold ">Name</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter department name"
                />
                </div>
                
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">Location</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md">
                  <option>Select location</option>
                  <option>New York</option>
                  <option>San Francisco</option>
                  <option>Chicago</option>
                  <option>London</option>
                </select>
                </div>
                
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">Department Head</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md">
                  <option>Select Department Head</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Michael Johnson</option>
                </select>
                </div>
               
              </div>

              <div className='add-reset-btns flex items-center justify-end pt-4'>
              <button
                  className=" mx-1 main-bg-color bg-blue-500 text-white px-2 py-2 rounded w-full md:w-auto "
                >
                  Save
                </button>
                <button
                  className=" bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto"
                >
                  Reset
                </button>

              </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>


      <div className='department-list mt-10'>
      <div className="container dep-list-con mx-auto p-6 border rounded-lg bg-white">
      <h1 className="text-lg font-bold mb-2">Department List</h1>
      
       
         
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
            <label className=' mb-0 text-sm text-gray-600' htmlFor="#">Search : </label>
             <input
            type="text"
            placeholder="Search..."
            className="ml-1 border mob-search-dc border-gray-300 text-gray-600 rounded px-2 py-1 text-sm"
            onChange={e => setSearchTerm(e.target.value)}
          />

              </div>  
          
          </div>
      
      <div className='overflow-auto' >
      <table className="min-w-full bg-white border border-gray-300 rounded-t-lg">
        <thead>
          <tr className="main-bg-color text-white">
            <th className="px-4 border-gray-300 main-bg-color border-l text-center py-3">S. No</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Department Name</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Department Head</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Location</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Added By</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">No of Employees</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Actions</th>

            
          </tr>
        </thead>
        <tbody>
          {currentEntries.map(entry => (
            <tr key={entry.id} className="hover:bg-gray-300 hover:border-r border-gray-300 transition duration-300">
              <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.id}</td>
              <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.deptName}</td>
              <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.deptHead}</td>
              <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.location}</td>
              <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.addedBy}</td>
              <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.numOfEmployees}</td>
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
  )
}

export default DepartmentComponent
