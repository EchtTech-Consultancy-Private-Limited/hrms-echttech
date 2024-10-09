import React from 'react'

const PermissionComponent = () => {

  const sections = [
    'Dashboard',
    'Employee Directory',
    'User Management',
    'Organization',
    'Payroll',
    'Attendance',
    'Leave',
  ];

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const checkboxes = document.querySelectorAll('.permission-checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-4 leave-info-container">

        <div className="w-full top-section p-6 border rounded-lg bg-white">
          <div className="top-head ">
            <div className="flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Add New Roles</h1>
            </div>
            <hr className="mb-6" />
            {/* Department Form Section */}
            <div className="department-below-sect w-full">
              <div className="flex flex-col md:flex-row md:space-x-4 justify-between">

                <div className="flex-1 bg-white mb-4 rounded-lg">
                  <label className="block text-black font-bold">Select Role Name</label>
                  <select className="block w-full p-2 border border-gray-300 rounded-md">
                    <option>Select Role name</option>
                    <option>Accountant</option>
                    <option>Technical Support</option>
                    <option>Tester</option>
                    <option>Developer</option>
                  </select>
                </div>

              </div>
              {/* Roles Table */}
              <div className='bg-white pt-4 mt-5 rounded-lg' >

                <h1 className="text-2x-lg font-bold">Role Permissions</h1>
                <div className="permission-table overflow-auto mt-5">
                  <table className="min-w-full bg-white border border-gray-200  rounded-lg">
                    <thead className='rounded rounded-lg' >
                      <tr>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-black rounded rounded-lg">
                          Administrator Access
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-black rounded rounded-lg">
                          <input
                            type="checkbox"
                            onChange={handleSelectAll}
                            className="form-checkbox h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2">Select All</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sections.map((section) => (
                        <tr key={section}>
                          <td className="py-3 px-4 border-b border-gray-200 text-gray-500">
                            {section}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 border-gray-500"
                              />
                              <span className="ml-2 mr-2 text-gray-500">Read</span> | <span className="ml-2 text-gray-500">View</span>

                              <input
                                type="checkbox"
                                className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                              />
                              <span className="ml-2 text-gray-500">Create</span>
                              <input
                                type="checkbox"
                                className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                              />
                              <span className="ml-2 mr-2 text-gray-500">Edit</span> | <span className="ml-2 text-gray-500">Update</span>

                              <input
                                type="checkbox"
                                className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                              />
                              <span className="ml-2 text-gray-500">Delete</span>
                              <input
                                type="checkbox"
                                className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                              />
                              <span className="ml-2 text-gray-500">Approver</span>
                              <input
                                type="checkbox"
                                className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                              />
                              <span className="ml-2 text-gray-500">Publisher</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="add-reset-btns flex items-center pt-4 justify-end">
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
  )
}

export default PermissionComponent
