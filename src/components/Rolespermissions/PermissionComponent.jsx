import React from "react";
import Selector from "../Common/Selector";

const PermissionComponent = () => {
  const selectorData = [
    { name: "Afghanistan", cca2: "AF", flag: "🇦🇫", code: "93" },
    { name: "India", cca2: "IN", flag: "🇮🇳", code: "91" },
  ];
  const sections = [
    "Dashboard",
    "Employee Directory",
    "User Management",
    "Organization",
    "Payroll",
    "Attendance",
    "Leave",
  ];

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const checkboxes = document.querySelectorAll(".permission-checkbox");
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
              <div className="flex form-labels justify-between">
                {/* <div className="first mb-4" style={{ width: "30%" }}>
                  <label
                    for="type"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Role Type
                  </label>

                  <div className="relative group">
                    <Selector selectorData={selectorData} />
                  </div>
                </div> */}



           
           

            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Permissions Type
              </label>

              <div className="relative group">
                <Selector selectorData={selectorData} />
              </div>
            
          
        </div>
              </div>
              {/* Roles Table */}
              <div className="bg-white  mt-5 ">
                <div className="top-had template-section ">
                  <div className="flex justify-between pb-3 w-full text-black p-4">
                    <h1 className="text-lg font-bold">Roles Permission</h1>
                  </div>
                  <hr class="mb-6"></hr>
                  <div className="permission-table overflow-auto p-6">
                    <table className="min-w-full bg-white border border-gray-200 ">
                      <thead className="rouned rounded-lg">
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
                            <span className="ml-4">Select All</span>
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
                              <div className="flex items-center justify-between">
                                <div className="divider_table">
                                  <input
                                    type="checkbox"
                                    className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 border-gray-500"
                                  />
                                  <span className="ml-2 mr-2 text-gray-500">
                                    Read
                                  </span>{" "}
                                  |{" "}
                                  <span className="ml-2 text-gray-500">
                                    View
                                  </span>
                                </div>
                                <div className="divider_table">
                                  <input
                                    type="checkbox"
                                    className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                                  />
                                  <span className="ml-2 text-gray-500">
                                    Create
                                  </span>
                                </div>
                                <div className="divider_table">
                                  <input
                                    type="checkbox"
                                    className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                                  />
                                  <span className="ml-2 mr-2 text-gray-500">
                                    Edit
                                  </span>{" "}
                                  |{" "}
                                  <span className="ml-2 text-gray-500">
                                    Update
                                  </span>
                                </div>
                                <div className="divider_table">
                                  <input
                                    type="checkbox"
                                    className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                                  />
                                  <span className="ml-2 text-gray-500">
                                    Delete
                                  </span>
                                </div>
                                <div className="divider_table">
                                  <input
                                    type="checkbox"
                                    className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                                  />
                                  <span className="ml-2 text-gray-500">
                                    Approver
                                  </span>
                                </div>
                                <div className="divider_table">
                                  <input
                                    type="checkbox"
                                    className="permission-checkbox form-checkbox h-4 w-4 text-blue-600 ml-12"
                                  />
                                  <span className="ml-2 text-gray-500">
                                    Publisher
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="add-reset-btns flex items-center pb-4 px-4 justify-end">
                    <button className=" main-bg-color mx-1 bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto ">
                      Save
                    </button>
                    <button className=" bg-gray-400 text-white px-4 py-2 rounded w-full md:w-auto">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionComponent;
