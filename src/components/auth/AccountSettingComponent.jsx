import React, { useState } from 'react'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineHome, HiOutlineCalendar } from "react-icons/hi";
import { FaCity, FaBirthdayCake } from "react-icons/fa";
import staffprofile from '../../assetsechttech/image/female.jpg';

function AccountSettingComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div>
      <div className="w-full p-4 bg-white">
        {/* Tab Headers */}
        <div className="flex border-b">
          <button
            className={`py-2 px-4 text-sm font-medium transition duration-300 ${activeTab === 1
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
              }`}
            onClick={() => handleTabClick(1)}
          >
            Overview
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium transition duration-300 ${activeTab === 2
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
              }`}
            onClick={() => handleTabClick(2)}
          >
            Edit Profile
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium transition duration-300 ${activeTab === 3
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
              }`}
            onClick={() => handleTabClick(3)}
          >
            Change Password
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-4 ">
          {activeTab === 1 && (
            <div className='main-profile-content' >

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-2">
                <div className="bg-white p-4 md:col-span-4 border">
                  <div className=" p-2 mb-4">
                    <div className='flex items-center space-x-4' >
                      {/* <img src="https://via.placeholder.com/100" alt="Profile Image" className="w-10 h-10 object-cover rounded-lg"/> */}
                      <img src={staffprofile} alt="Profile Image" className="w-10 h-10 object-cover rounded-lg" />

                      <div>
                        <h2 className="text-xl-2x font-semibold">Shrinivas Ayeeyar</h2>
                        <p className="text-sm text-gray-500">Designation</p>
                      </div>


                    </div>
                    <div className='mt-4' >
                      <h2 className="text-sm-1x font-semibold">About</h2>
                      <div className="flex items-center space-x-2">
                        <HiOutlinePhone className="text-gray-500 text-sm" />

                        <p className="text-sm text-gray-500">Phone:</p>
                        <span className="text-base font-sm">+91-8800990087</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <HiOutlineMail className="text-gray-500 text-sm" />

                        <p className="text-sm text-gray-500">Official Email:</p>
                        <span className="text-base font-sm">Office@123.com</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <HiOutlineMail className="text-gray-500 text-sm" />

                        <p className="text-sm text-gray-500">Personal Mail:</p>
                        <span className="text-base font-sm">Personal@123.com</span>
                      </div>

                    </div>
                  </div>
                  <div className="border-t border-gray-300 my-4"></div>
                  <div className="bg-white p-2">
                    <div >
                      <h2 className="text-sm-1x font-semibold mb-1">Address</h2>
                      <div className="flex items-center space-x-2">
                        <HiOutlineHome className="text-gray-500 text-sm" />

                        <p className="text-sm text-gray-500">Address:</p>
                        <span className="text-base font-sm">B-390, Fish Market JJ Colony</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCity className="text-gray-500 text-sm" />

                        <p className="text-sm text-gray-500">City State:</p>
                        <span className="text-base font-sm">Jharkhand</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <HiOutlineLocationMarker className="text-gray-500 text-sm" />

                        <p className="text-sm text-gray-500">Post Code:</p>
                        <span className="text-base font-sm">110099-23</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 my-4"></div>
                  <div className="bg-white p-2">
                    <div >
                      <h2 className="text-sm-1x font-semibold mb-1">Employee Details</h2>
                      <div className="flex items-center space-x-2">
                        <FaBirthdayCake className="text-gray-500 text-sm" />
                        <p className="text-sm text-gray-500">D.O.B:</p>
                        <span className="text-base font-sm">12 Feb,1985</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCity className="text-gray-500 text-sm" />
                        <p className="text-sm text-gray-500">National Id:</p>
                        <span className="text-base font-sm">10654</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <HiOutlineLocationMarker className="text-gray-500 text-sm" />
                        <p className="text-sm text-gray-500">Title:</p>
                        <span className="text-base font-sm">Project Manager</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <HiOutlineCalendar className="text-gray-500 text-sm" />

                        <p className="text-sm text-gray-500">Hire Date:</p>
                        <span className="text-base font-sm">Jan 05, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 md:col-span-8 border">
                  <div className="bg-white w-full py-4 mb-4">
                    <div className='flex justify-between items-center'>
                      <h2 className="text-sm-1x font-semibold mb-1">Employee Details</h2>
                      {/* <button className='mx-1 main-bg-color text-white text-sm px-2 py-1 rounded w-full md:w-auto ' >Add Info + </button> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="bg-white p-">
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                          <thead>
                            <tr className="main-bg-color text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-2 px-6 text-left">Department</th>
                              <th className="py-2 px-6 text-left">Division</th>
                              <th className="py-2 px-6 text-left">Manager</th>
                              <th className="py-2 px-6 text-left">Hire Date</th>
                              <th className="py-2 px-6 text-left">Location</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-600 text-sm font-light">
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-2 px-6">Human Resources</td>
                              <td className="py-2 px-6">Recruitment</td>
                              <td className="py-2 px-6">Alice Johnson</td>
                              <td className="py-2 px-6">2020-01-15</td>
                              <td className="py-2 px-6">New York</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-2 px-6">Marketing</td>
                              <td className="py-2 px-6">Digital</td>
                              <td className="py-2 px-6">Bob Smith</td>
                              <td className="py-2 px-6">2019-04-10</td>
                              <td className="py-2 px-6">San Francisco</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-2 px-6">Sales</td>
                              <td className="py-2 px-6">Retail</td>
                              <td className="py-2 px-6">Charlie Brown</td>
                              <td className="py-2 px-6">2021-07-22</td>
                              <td className="py-2 px-6">Chicago</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-2 px-6">Development</td>
                              <td className="py-2 px-6">Frontend</td>
                              <td className="py-2 px-6">Dana Lee</td>
                              <td className="py-2 px-6">2022-03-05</td>
                              <td className="py-2 px-6">Austin</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-2 px-6">Finance</td>
                              <td className="py-2 px-6">Accounting</td>
                              <td className="py-2 px-6">Eve Williams</td>
                              <td className="py-2 px-6">2023-06-18</td>
                              <td className="py-2 px-6">Los Angeles</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="">
                      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                          <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
                          <hr />
                          <ul className="mt-4">
                            <li className="flex items-center py-2">
                              <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full mr-3" />
                              <span className="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                            </li>
                            <li className="flex items-center py-2">
                              <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full mr-3" />
                              <span className="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                            </li>
                            <li className="flex items-center py-2">
                              <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full mr-3" />
                              <span className="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                            </li>
                            <li className="flex items-center py-2">
                              <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full mr-3" />
                              <span className="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                            </li>
                            <li className="flex items-center py-2">
                              <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full mr-3" />
                              <span className="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                          <h2 className="text-lg font-semibold text-gray-800">Compensation</h2>
                          <hr />
                          <ul className="mt-4">

                            <li className=" items-center py-2">
                              <p className='text-sm text-black' >862.00 USD Per month </p>
                              <p className='text-sm font-semibold text-gray-800' >Effective Date On <span>May 10 2016</span> </p>
                            </li>
                            <li className=" items-center py-2">
                              <p className='text-sm text-black' >862.00 USD Per month </p>
                              <p className='text-sm font-semibold text-gray-800' >Effective Date On <span>May 10 2016</span> </p>
                            </li>
                            <li className=" items-center py-2">
                              <p className='text-sm text-black' >862.00 USD Per month </p>
                              <p className='text-sm font-semibold text-gray-800' >Effective Date On <span>May 10 2016</span> </p>
                            </li>
                            <li className=" items-center py-2">
                              <p className='text-sm text-black' >862.00 USD Per month </p>
                              <p className='text-sm font-semibold text-gray-800' >Effective Date On <span>May 10 2016</span> </p>
                            </li>
                            <li className=" items-center py-2">
                              <p className='text-sm text-black' >862.00 USD Per month </p>
                              <p className='text-sm font-semibold text-gray-800' >Effective Date On <span>May 10 2016</span> </p>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="form-container shadow radius">
            <div className="top-hdr flex justify-between">
              <h1 className="pb-1 font-bold text-xl">Edit Profile</h1>
            </div>
            <hr />
    
            <form className="mt-10">
              <div className="form-step">
                <div className="form-labels">
                  <div className="row first-row flex items-center flex-wrap justify-start md:space-x-3 justify-between flex-gap">
                    <div className="first mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-bold mb-2"
                      >
                        First Name
                      </label>
                      <input
                        className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                        type="text"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="first mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                        type="text"
                        placeholder="Company Name"
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
                        type="text"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="first mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Address
                      </label>
                      <input
                        className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                        type="text"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="first mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-bold mb-2"
                      >
                        City
                      </label>
                      <input
                        className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                        type="text"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="first mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-bold mb-2"
                      >
                        State
                      </label>
                      <input
                        className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                        type="text"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="first mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-bold mb-2"
                      >
                        PIN Code
                      </label>
                      <input
                        className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                        type="text"
                        placeholder="Company Name"
                      />
                    </div>

                    
                    
                    <div className="button mt-2 flex justify-between first mb-4">
    
    
                      <div className="add-reset-btns flex items-center justify-end">
                        <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                          Save
                        </button>
                        <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
                          Cancel
                        </button>
                      </div>
                    </div>
    
    
    
    
    
    
    
                  </div>
    
                </div>
    
              </div>
            </form>
          </div>
          )}

          {activeTab === 3 && (
            <div>
              <div className="form-container shadow radius">
                <form className="mt-2">
                  <div className="form-step">
                    <div className="form-labels">
                      <div className="ro firs-row flex flex-col items-center flex-wrap md:space-x-3 justify-between flex-gap">
                        <div className="top-hdr flex justify-between">
                          <h1 className="pb-1 font-bold text-xl">Password Update</h1>
                        </div>
                        <hr />
                        <div className='p-4 border border-gray-500 rounded-lg' >
                          <div className="firs mb-4">
                            <label
                              htmlFor=""
                              className="block text-gray-700 font-bold mb-2"
                            >
                              Current Password
                            </label>
                            <input
                              className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                              type="text"
                              placeholder="Travel Arrangement Type"
                            />
                          </div>

                          <div className="firs mb-4">
                            <label
                              htmlFor=""
                              className="block text-gray-700 font-bold mb-2"
                            >
                              New Password
                            </label>
                            <input
                              className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                              type="text"
                              placeholder="Travel Arrangement Type"
                            />
                          </div>

                          <div className="firs mb-4">
                            <label
                              htmlFor=""
                              className="block text-gray-700 font-bold mb-2"
                            >
                              Confirm Password
                            </label>
                            <input
                              className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                              type="text"
                              placeholder="Travel Arrangement Type"
                            />
                          </div>

                          <div className="button mt-2 flex justify-between firs mb-4">


                            <div className="add-reset-btns flex items-center justify-end">
                              <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                                Update Password
                              </button>
                              <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
                                Reset
                              </button>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default AccountSettingComponent
