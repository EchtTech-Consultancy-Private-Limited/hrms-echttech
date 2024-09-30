import React,{useState} from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { TbEditCircle } from "react-icons/tb";




const AttendanceListComponent = () => {

    const attendanceData = Array.from({ length: 100 }, (_, i) => ({
        status: i % 2 === 0 ? "Present" : "Absent",
        date: `2024-09-${(i % 30) + 1}`,
        clockIn: `09:00`,
        clockOut: `17:00`,
      }));
    
      const [currentPage, setCurrentPage] = useState(1);
      const entriesPerPage = 10;
    
      const totalEntries = attendanceData.length;
      const start = (currentPage - 1) * entriesPerPage;
      const end = start + entriesPerPage;
      const pageData = attendanceData.slice(start, end);
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
        if (end < totalEntries) {
          setCurrentPage(currentPage + 1);
        }
      };
   
  return (
    <>
       <div className="w-full top-section mt-10 p-4 border rounded-lg bg-white">
       <div class="top-head flex justify-between items-center">
          <div class="left-part flex justify-between pb-3 w-full"><h1 class="headings">Attendance Information</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto text-sm">
          Add Attendance
        </button>
          </div>
        </div>
      <h2 className="text-lg pt-2 border-t font-semibold mb-2">Select Date</h2> 
      <div className="flex  pt-1 flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
        <label>From : </label>
      <input
          type="date"
          className="border border-gray-300 text-gray-500 p-1 h-9 rounded w-full md:w-auto"
          placeholder="Start Date"
        />
         <label>To : </label>
        <input
          type="date"
          className="border border-gray-300 text-gray-500 p-1 h-9 rounded w-full md:w-auto"
          placeholder="End Date"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto text-sm">
          Filter
        </button>
      </div>
    </div>


    <div className="below-section data-table-attendance mt-10" >
    <div className="container mx-auto p-6 border rounded-lg bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Attendance</h1>
        <div className="flex items-center space-x-4">
            <select id="entries" className="w-full border border-gray-300 text-gray-600 rounded px-5 py-1 text-sm">
                <option value="25">Show 25</option>
                <option value="50">Show 50</option>
                <option value="100">Show 100</option>
            </select>
            <input
                type="text"
                id="search"
                placeholder="Search..."
                className="border border-gray-300 text-gray-600 rounded px-2 py-1 text-sm"
            />
            </div>
      </div>

     

<table className="min-w-full bg-white border border-gray-300 rounded-t-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-4 border-gray-300 border-l text-center py-3">S. No</th>
                <th className="px-4 border-l border-gray-300 text-center py-3">Check-in</th>
                <th className="px-4 border-l border-gray-300 text-center py-3">Check-out</th>
                <th className="px-4 border-l border-gray-300 text-center py-3">Date</th>
                <th className="px-4 border-l border-gray-300 text-center py-3">Status</th>
                <th className="px-4 border-l border-gray-300 text-center py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((entry, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-300 hover:border-r border-gray-300 transition duration-300"
                >
                  <td className="py-2 px-4 border-l border-gray-300 text-center">{start + index + 1}</td>
                  <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.clockIn}</td>
                  <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.clockOut}</td>
                  <td className="py-2 px-4 border-l border-gray-300 text-center">{entry.date}</td>
                  <td
                    className={`py-2 px-4 border-l border-gray-300 text-center ${
                      entry.status === "Absent" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {entry.status}
                  </td>
                  <td className="py-2 px-4 border-l border-gray-300 text-center">
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


      <div className="flex justify-between items-center mt-4">
       
        <span className="text-gray-600 text-sm">
          Showing {start + 1} to {Math.min(end, totalEntries)} of {totalEntries} entries
        </span>
          <div>
          <button
          onClick={handlePrevPage}
          className="bg-blue-500 text-white text-sm rounded mx-1 px-2 py-1"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-sm text-white rounded px-2 py-1"
          disabled={end >= totalEntries}
        >
          Next
        </button>

          </div>

      
      </div>
    </div>

    </div>
    </>
  );
}

export default AttendanceListComponent;
