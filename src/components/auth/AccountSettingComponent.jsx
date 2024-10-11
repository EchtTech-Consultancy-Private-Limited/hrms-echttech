import React,{useState} from 'react'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineHome, HiOutlineCalendar} from "react-icons/hi";
import { FaCity,FaBirthdayCake } from "react-icons/fa"; 
import staffprofile from '../../images/female.jpg';

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
          className={`py-2 px-4 text-sm font-medium transition duration-300 ${
            activeTab === 1
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500 hover:text-blue-500'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Overview
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium transition duration-300 ${
            activeTab === 2
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500 hover:text-blue-500'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Edit Profile
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium transition duration-300 ${
            activeTab === 3
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
            
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-2">
              <div class="bg-white p-4 md:col-span-4 border">
                  <div class=" p-2 mb-4">
                    <div className='flex items-center space-x-4' >
                      {/* <img src="https://via.placeholder.com/100" alt="Profile Image" class="w-10 h-10 object-cover rounded-lg"/> */}
                      <img src={staffprofile} alt="Profile Image" class="w-10 h-10 object-cover rounded-lg"/>

                      <div>
                        <h2 class="text-xl-2x font-semibold">Shrinivas Ayeeyar</h2>
                        <p class="text-sm text-gray-500">Designation</p>
                      </div>

                      
                    </div>
                    <div className='mt-4' >
                        <h2 class="text-sm-1x font-semibold">About</h2>
                        <div className="flex items-center space-x-2">
                          <HiOutlinePhone className="text-gray-500 text-sm" />

                          <p className="text-sm text-gray-500">Phone:</p>
                          <span className="text-base font-sm">+91-8800990087</span>
                        </div>
                        <div className="flex flex-wrap items-center space-x-2 overflow-hidden">
                          <HiOutlineMail className="text-gray-500 text-sm" />
                          <p className="text-sm text-gray-500">Email:</p>
                          <span className="text-base font-sm">account123@abc.com </span>
                          <span className="text-base font-sm">account456@abc.com</span>
                          
                         
                        </div>
                      </div>
                  </div>
                  <div class="border-t border-gray-300 my-4"></div>
                  <div class="bg-white p-2">
                  <div >
                        <h2 class="text-sm-1x font-semibold mb-1">Address</h2>
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
                  <div class="border-t border-gray-300 my-4"></div>
                  <div class="bg-white p-2">
                  <div >
                        <h2 class="text-sm-1x font-semibold mb-1">Employee Details</h2>
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

              <div class="bg-white p-4 md:col-span-8 border">
                <div class="bg-white w-full py-4 mb-4">
                  <div className='flex justify-between items-center'>
                  <h2 class="text-sm-1x font-semibold mb-1">Employee Details</h2>
                  <button className='mx-1 main-bg-color text-white text-sm px-2 py-1 rounded w-full md:w-auto ' >Add Info + </button>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div class="bg-white p-">
                  <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
            <thead>
                <tr class="main-bg-color text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-2 px-6 text-left">Department</th>
                    <th class="py-2 px-6 text-left">Division</th>
                    <th class="py-2 px-6 text-left">Manager</th>
                    <th class="py-2 px-6 text-left">Hire Date</th>
                    <th class="py-2 px-6 text-left">Location</th>
                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-2 px-6">Human Resources</td>
                    <td class="py-2 px-6">Recruitment</td>
                    <td class="py-2 px-6">Alice Johnson</td>
                    <td class="py-2 px-6">2020-01-15</td>
                    <td class="py-2 px-6">New York</td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-2 px-6">Marketing</td>
                    <td class="py-2 px-6">Digital</td>
                    <td class="py-2 px-6">Bob Smith</td>
                    <td class="py-2 px-6">2019-04-10</td>
                    <td class="py-2 px-6">San Francisco</td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-2 px-6">Sales</td>
                    <td class="py-2 px-6">Retail</td>
                    <td class="py-2 px-6">Charlie Brown</td>
                    <td class="py-2 px-6">2021-07-22</td>
                    <td class="py-2 px-6">Chicago</td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-2 px-6">Development</td>
                    <td class="py-2 px-6">Frontend</td>
                    <td class="py-2 px-6">Dana Lee</td>
                    <td class="py-2 px-6">2022-03-05</td>
                    <td class="py-2 px-6">Austin</td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-2 px-6">Finance</td>
                    <td class="py-2 px-6">Accounting</td>
                    <td class="py-2 px-6">Eve Williams</td>
                    <td class="py-2 px-6">2023-06-18</td>
                    <td class="py-2 px-6">Los Angeles</td>
                </tr>
            </tbody>
        </table>
    </div>
                  </div>
                 
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div class="main-bg-color p-4">
                  <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-4">
            <h2 class="text-lg font-semibold text-gray-800">Activity</h2>
            <hr />
            <ul class="mt-4">
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                </li>
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                </li>
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                </li>
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                </li>
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                </li>
            </ul>
        </div>
    </div>
                  </div>
                  <div class="main-bg-color p-4">
                  <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-4">
            <h2 class="text-lg font-semibold text-gray-800">Activity</h2>
            <hr />
            <ul class="mt-4">
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                </li>
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                </li>
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                </li>
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
                </li>
                <li class="flex items-center py-2">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="rounded-full mr-3"/>
                    <span class="text-sm text-gray-600">John Miller last login on 05 Feb, 2024 05:36 P:M</span>
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
          <div>
            <h3 className="text-lg font-bold mb-2">Tab 2 Content</h3>
            <p>
              This is the content for the second tab. You can add other HTML
              elements like forms, images, or lists here.
            </p>
          </div>
        )}

        {activeTab === 3 && (
          <div>
            <h3 className="text-lg font-bold mb-2">Tab 3 Content</h3>
            <p>
              Here you can put different elements, such as a gallery, contact
              section, or anything else you want.
            </p>
          </div>
        )}
      </div>
    </div>
   </div>
    
  )
}

export default AccountSettingComponent
