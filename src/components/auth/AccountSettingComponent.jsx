import React,{useState} from 'react'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineHome, HiOutlineCalendar} from "react-icons/hi";
import { FaCity,FaBirthdayCake } from "react-icons/fa"; 

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
          Tab 1
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium transition duration-300 ${
            activeTab === 2
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500 hover:text-blue-500'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium transition duration-300 ${
            activeTab === 3
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500 hover:text-blue-500'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 ">
        {activeTab === 1 && (
          <div className='main-profile-content' >
            <h3 className="text-lg font-bold mb-2">Profile Section</h3>
            <p>
              You can add your profile section here. Use HTML elements like
              headings, paragraphs, etc.
            </p>


            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-2">
              <div class="bg-white p-4 md:col-span-4 border">
                  <div class=" p-2 mb-4">
                    <div className='flex items-center space-x-4' >
                      <img src="https://via.placeholder.com/100" alt="Profile Image" class="w-10 h-10 object-cover rounded-lg"/>
                      
                      <div  >
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
                        <div className="flex items-center space-x-2">
                          <HiOutlineMail className="text-gray-500 text-sm" />

                          <p className="text-sm text-gray-500">Email:</p>
                          <span className="text-base font-sm">Account123@abc.com</span>
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
                <div class="bg-white w-full p-4 mb-4">
                  <div className='flex justify-between items-center'>
                  <h2 class="text-sm-1x font-semibold mb-1">Employee Details</h2>
                  <button className='text-red-500 font-semibold text-sm border border-red-500 px-4 py-1 rounded-lg' >Add Info + </button>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div class="bg-red-300 p-4">
                    <p>This is the first 50% width div.</p>
                  </div>
                  <div class="bg-green-300 p-4">
                    <p>This is the second 50% width div.</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-red-300 p-4">
                    <p>This is the first 50% width div.</p>
                  </div>
                  <div class="bg-green-300 p-4">
                    <p>This is the second 50% width div.</p>
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
