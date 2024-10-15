import React from 'react'

const GeneralConfigurationComponent = () => {
  return (
    <div className="form-container shadow radius">
    <div className="top-hdr flex justify-between">
      <h1 className="pb-3 font-bold text-lg">Add New Company</h1>
    </div>
    <hr class="mb-6"></hr>
    <form className="mt-5">
      <div className="form-step">
        <div className="form-labels">
          <div className="row first-row flex items-center flex-wrap justify-start md:space-x-3 justify-between flex-gap">
            <div className="first mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Echt Tech Consultancy Pvt. Ltd."
              />
            </div>

            

            <div className="first mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2"
              >
               Contact Person
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Legal/Tranding Name"
              />
            </div>

            <div className="first mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="first mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Number
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Contact Number"
              />
            </div>


            <div className="first mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2"
              >
                Address 1
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Website"
              />
            </div>

            <div className="first mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2"
              >
                Adress 2
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Registration Number"
              />
            </div>

            <div className="first mb-4">
              <div className="address-with-label">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Test
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Address Line 1"
                />
              </div>
            </div>
            <div className="first mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2"
              >
                Federal
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Address Line 2"
              />
            </div>

            <div className="first mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2"
              >
                Code
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="44000"
              />
            </div>
            <div className="first mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2"
              >
                Country
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="India"
              />
            </div>
            
           
            </div>
          </div>

         
        
        <div className="button mt-10 flex justify-between">

          <div className="add-reset-btns flex items-center justify-end">
            <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
              Save
            </button>
            <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
              Reset
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export default GeneralConfigurationComponent
