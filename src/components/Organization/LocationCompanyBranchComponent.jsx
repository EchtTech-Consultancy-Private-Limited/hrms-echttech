import React,{useState} from "react";

const LocationCompanyBranchComponent = () => {
    // Dropdown state
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItem, setSelectedItem] = useState("leave type");
  
    // Dropdown items
    const items = [
      "Privileged Leave",
      "Vacation Leave",
      "Earned Leave",
      "Casual Leave",
    ];
  
    // Toggle dropdown visibility
    const toggleDropdown = (e) => {
     e.preventDefault();
      setIsOpen((prev) => !prev);
    };
  
    // Filter items based on search input
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );


    // ------------------

         // Dropdown for country
   const [isOpencountry, setIsOpencountry] = useState(false);
   const [searchTermcountry, setSearchTermcountry] = useState("");
   const [selectedItemcountry, setSelectedItemcountry] = useState("India");
 
   // Dropdown items
   const itemcountry = [
     "India",
     "Pakistan",
     "Bangladesh",
     "Nepal",
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
            <div className=" flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Add New Location</h1>
            </div>
            <hr className="mb-6" />
            {/* Department Form Section */}
            <div className="department-below-sect w-full form-labels">
              <div className="row first-row flex items-center flex-wrap justify-start md:space-x-3 justify-between flex-gap">
                <div className="first bg-white rounded-lg mb-4 ">
                  <div>
                    <label className="block text-black font-bold ">
                      Company
                    </label>
                    
                       <div className="relative z-10 group">
              <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                  
                <span className="mr-2">{selectedItem}</span>
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
              {isOpen && (
                <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                  <input
                    className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                    type="text"
                    placeholder="Search items"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoComplete="off"
                  />
                  {filteredItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                      onClick={() => {
                        // Handle item click
                        // console.log(item);
                        setSelectedItem(item); // Update selected item
                        setIsOpen(false);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
                       </div>
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      Location name
                    </label>
                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter department name"
                    />
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      Department Head
                    </label>
                    <input
                      type="email"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter your mail"
                    />
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Number"
                    />
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      Fax Number
                    </label>
                    <input
                      type="number"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Fax Number"
                    />
                  </div>
                </div>

                <div className="first bg-white rounded-lg mb-4 ">
                  <div>
                    <label className="block text-black font-bold ">
                      Location Head
                    </label>
                    <select
                      name="location-head"
                      id=""
                      className="block w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="1">Brijesh Sir</option>
                      <option value="2">Gaurav Sir</option>
                      <option value="3">Brijesh Sir</option>
                    </select>
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      Location
                    </label>
                    <select className="block w-full p-2 border border-gray-300 rounded-md">
                      <option>Select location</option>
                      <option>New York</option>
                      <option>San Francisco</option>
                      <option>Chicago</option>
                      <option>London</option>
                    </select>
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      Location HR Manager
                    </label>
                    <select className="block w-full p-2 border border-gray-300 rounded-md">
                      <option>Select location</option>
                      <option>Hr 1</option>
                      <option>Hr 2</option>
                    </select>
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      Address
                    </label>

                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Address Line 1"
                    />
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      {" "}
                      Address 2
                    </label>

                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Address Line 2"
                    />
                  </div>
                </div>

                <div className="first bg-white rounded-lg mb-4 ">
                  <div>
                    <label className="block text-black font-bold ">Name</label>
                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter department name"
                    />
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">City</label>
                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="city"
                    />
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      State/Province
                    </label>
                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="State/Province"
                    />
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      Zip/Postal Code
                    </label>
                    <input
                      type="text"
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Zip/Postal Code"
                    />
                  </div>
                </div>

                <div className="first bg-white mb-4 rounded-lg">
                  <div>
                    <label className="block text-black font-bold ">
                      Country
                    </label>
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
                </div>
              </div>

              {/* <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
               
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
                
              </div> */}
              <div className="add-reset-btns top-border flex items-center justify-end pt-4">
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
    </>
  );
};

export default LocationCompanyBranchComponent;
