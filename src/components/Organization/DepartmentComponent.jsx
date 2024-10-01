import React,  { useState } from 'react'

const DepartmentComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);

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
        
        <div className="w-full top-section mt-10 p-4 border rounded-lg bg-white">
          <div className="top-head ">
            <div className=" flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Add New Department</h1>

             
            </div>
            <hr className='mb-6' />
            {/* Department Form Section */}
            <div className='department-below-sect w-full '>
              <div className='flex flex-col md:flex-row md:space-x-4 justify-between' >
              <div className="flex-1 bg-white rounded-lg mb-4">
                <label className="block text-black font-bold m-2">Name</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter department name"
                />
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <label className="block text-black font-bold m-2">Location</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md">
                  <option>Select location</option>
                  <option>New York</option>
                  <option>San Francisco</option>
                  <option>Chicago</option>
                  <option>London</option>
                </select>
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <label className="block text-black font-bold  m-2">Department Head</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md">
                  <option>Select Department Head</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Michael Johnson</option>
                </select>
              </div>
              </div>
              <div className='add-reset-btns flex justify-end'>
                <button
                  className="apply-leave-btn mx-1 bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto text-sm"
                >
                  Add
                </button>
                <button
                  className="apply-leave-btn bg-gray-400 text-white px-4 py-2 rounded w-full md:w-auto text-sm"
                >
                  Reset
                </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>


      <div className='department-list mt-10'>
      <div className="container mx-auto p-6 border rounded-lg bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Department List</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 text-gray-600 rounded px-2 py-1 text-sm"
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded-t-lg">
        <thead>
          <tr className="main-bg-color text-white">
            <th className="px-4 border-gray-300 main-bg-color border-l text-center py-3">S. No</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Department Name</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Department Head</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Location</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">Added By</th>
            <th className="px-4 border-l main-bg-color border-gray-300 text-center py-3">No of Employees</th>
            
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
              
            </tr>
          ))}
        </tbody>
      </table>

      
       {/* Pagination */}
       <div className="flex justify-between items-center mt-4">
       <div className="text-gray-600 mt-2">
        Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredData.length)} of {filteredData.length} entries
      </div>
      <div>
      <button
  onClick={prevPage}
  disabled={currentPage === 1}
  className={`px-2 py-1 mx-1 border rounded text-sm ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
>
  Previous
</button>
<button
  onClick={nextPage}
  disabled={currentPage === Math.ceil(filteredData.length / entriesPerPage)}
  className={`px-2 py-1 border rounded text-sm ${currentPage === Math.ceil(filteredData.length / entriesPerPage) ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
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
