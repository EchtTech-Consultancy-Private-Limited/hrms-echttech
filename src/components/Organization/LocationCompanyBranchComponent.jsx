import React from 'react'

const LocationCompanyBranchComponent = () => {
  return (
    <>
       <div className="flex md:flex-row flex-col justify-between items-center gap-x-4">
        
        <div className="w-full top-section p-4 border rounded-lg bg-white">
          <div className="top-head ">
            <div className=" flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Add New Location</h1>
            </div>
            <hr className='mb-6' />
            {/* Department Form Section */}
            <div className='department-below-sect w-full '>
              <div className='flex flex-col md:flex-row md:space-x-4 justify-between' >
              <div className="flex-1 bg-white rounded-lg mb-4 ">
                <div>
                <label className="block text-black font-bold ">Company</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md">
                  <option>Select Company</option>
                  <option>Government</option>
                  <option>Private</option>
                  <option>LLP</option>
                </select>
                </div>
                
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">Location name</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter department name"
                />
                </div>
                
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">Department Head</label>
                   <input type="email" className='block w-full p-2 border border-gray-300 rounded-md'
                   placeholder='Enter your mail' />
                </div>
               
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">Phone Number</label>
                <input type="number" className='block w-full p-2 border border-gray-300 rounded-md'
                placeholder='Number' />
                </div>
               
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">Fax Number</label>
                <input type="number" className='block w-full p-2 border border-gray-300 rounded-md'
                placeholder='Fax Number' />
                </div>
               
              </div>

              
              </div>

              <div className='flex flex-col md:flex-row md:space-x-4 justify-between' >
              <div className="flex-1 bg-white rounded-lg mb-4 ">
                <div>
                <label className="block text-black font-bold ">Location Head</label>
                 <select name="location-head" id="" className='block w-full p-2 border border-gray-300 rounded-md'>
                  <option value="1">Brijesh Sir</option>
                  <option value="2">Gaurav Sir</option>
                  <option value="3">Brijesh Sir</option>

                 </select>
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
                <label className="block text-black font-bold ">Location HR Manager</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md">
                  <option>Select location</option>
                  <option>Hr 1</option>
                  <option>Hr 2</option>
                </select>
                </div>
               
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">Address</label>
                
                  <input type="text" className='block w-full p-2 border border-gray-300 rounded-md' placeholder='Address Line 1' />
                </div>
               
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold "> Address 2</label>

                <input type="text" className='block w-full p-2 border border-gray-300 rounded-md' placeholder='Address Line 2' />

                </div>
               
              </div>

              
              </div>
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
                <label className="block text-black font-bold ">City</label>
                 <input type="text" className="block w-full p-2 border border-gray-300 rounded-md" placeholder='city' />
                </div>
                
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">State/Province</label>
                <input type="text" className="block w-full p-2 border border-gray-300 rounded-md" placeholder='State/Province' />

                </div>
               
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">Zip/Postal Code</label>
                <input type="text" className="block w-full p-2 border border-gray-300 rounded-md" placeholder='Zip/Postal Code' />

                </div>
               
              </div>

              <div className="flex-1 bg-white mb-4 rounded-lg">
                <div>
                <label className="block text-black font-bold ">Country</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md">
                  <option>Select Country</option>
                  <option>Sri lanka</option>
                  <option>Bangladesh</option>
                  <option>China</option>
                </select>
                </div>
               
              </div>

              
              </div>
              <div className='add-reset-btns flex items-center justify-end pt-4'>
              <button
                  className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto "
                >
                  Save
                </button>
                <button
                  className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto"
                >
                  Reset
                </button>

              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default LocationCompanyBranchComponent
