import React from 'react'
import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { PiUsersThree, PiUserCheck } from "react-icons/pi";
import { MdOutlineTimer } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FiUmbrella } from "react-icons/fi";
import employee_img from "../../assetsechttech/utility-images/employee_img.png"


const days = [


  {
    id: 1,
    name: 'Last 15 days',
    // avatar:
    //   'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Last 30 days',
   
  },
  {
    id: 3,
    name: 'Last 60 days',
  },
   
]

const data = [
  ['Title', 'Project Date', 'Status', 'Progress'],
  ['A', '22-Aug-2024', 'Complete', 'Active'],
  ['B', '22-spt-2024', 'Complete', 'Active'],
  ['C', '22-Aug-2024', 'Complete', 'Active'],
  ['D', '22-Aug-2024', 'Complete', 'Active'],
];

const DashboardStatsGrid = () => {

  const [selected, setSelected] = useState(days[1])

  return (

// ============== Super Admin Dashboard Start ==========================================================================================================================

    <div id='dashboard' className='px-10 py-12'>
  
      <div className='dashboard-stats-grid  super-admin'>
        <div className="top-head flex justify-between items-center">
          <div className="left-part">
            <h1 className='headings'>User's Information</h1>
          </div>
          <div className="right-part">
                    <Listbox value={selected} onChange={setSelected}>
                    {/* <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label> */}
                  <div className="relative mt-2">
                  <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      {/* <img alt="" src={selected.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                      <span className="ml-3 block truncate">{selected.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                  >
                    {days.map((person) => (
                      <ListboxOption
                        key={person.id}
                        value={person}
                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                      >
                        <div className="flex items-center">
                          <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                            {person.name}
                          </span>
                        </div>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                          <CheckIcon aria-hidden="true" className="h-5 w-5" />
                        </span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
                </Listbox>
          </div>
        </div>
        <div className="mid-content">
          <div className="info-cards-section mt-10 flex flex-wrap">
           
            <div className="card relative shadow">
              <div className="top-part relative">
                <div className="card-icons one"><PiUsersThree className='text-2xl'/></div>
              </div>
              <div className="mid-part my-10">
                <p className='text-3xl font-semibold'>1000+</p>
              </div>
              <div className="bottom-part">
                <p className='text-base'>Total No of Users</p>
              </div>
            </div>
            <div className="card relative shadow">
              <div className="top-part relative">
                <div className="card-icons two"><CiCalendar className='text-2xl'/></div>
              </div>
              <div className="mid-part my-10">
                <p className='text-3xl font-semibold'>7</p>
              </div>
              <div className="bottom-part">
                <p className='text-base'>Total No of Leave</p>
              </div>
            </div>
            <div className="card relative shadow">
              <div className="top-part relative">
                <div className="card-icons three"><FiUmbrella className='text-2xl'/></div>
              </div>
              <div className="mid-part my-10">
                <p className='text-3xl font-semibold'>5</p>
              </div>
              <div className="bottom-part">
                <p className='text-base'>Total No of Holiday</p>
              </div>
            </div>
            <div className="card relative shadow">
              <div className="top-part relative">
                <div className="card-icons four"><PiUserCheck  className='text-2xl'/></div>
              </div>
              <div className="mid-part my-10">
                <p className='text-3xl font-semibold'>23</p>
              </div>
              <div className="bottom-part">
                <p className='text-base'>Total No of Attendance</p>
              </div>
            </div>
            <div className="card relative shadow">
              <div className="top-part relative">
                <div className="card-icons five"><PiUsersThree className='text-2xl'/></div>
              </div>
              <div className="mid-part my-10">
                <p className='text-3xl font-semibold'>1000+</p>
              </div>
              <div className="bottom-part">
                <p className='text-base'>Total No of Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* =========================== Super Admin Dashboard End =================================================================================================== */}

      <br /><br /><br />

{/* =========================== Employee Dashboard Start =================================================================================================== */}

      <div className='dashboard-stats-grid employee-das'>
          <div className="top-head flex justify-between items-center">
              <div className="left-part">
                <h1 className='headings'>Employee Dashboard</h1>
              </div>
          </div>
          {/* Employee Card information Section start */}
          <div className="emp-info-section flex mt-10 flex-wrap">
            <div className="time-card relative shadow flex justify-center">
              <div className="top-head flex flex-col items-center">
                <div className="timer-icon"><MdOutlineTimer className='text-3xl mb-5'/></div>
                <p>Last Login:<span>26-sep-2024</span> 06:10 pm</p>
              </div>
              <div className="mid-part my-10">
                <div id='time-in' className="timer  my-5 flex items-center justify-center"><p>Login Time:</p><p className='text-3xl px-5'>09:10 <span className='text-xs'>am</span></p></div>
                <div id='time-out' className="timeer my-5 flex items-center justify-center"><p>Logout Time:</p><p className='text-3xl px-5'>09:10 <span className='text-xs'>pm</span></p></div>
                <div className="time-btn mt-10"><h3>Start</h3></div>
              </div>
              <div className="bottom-part">
                <p>office shift Time: 09:00 am to 06:00 pm</p>
              </div>
            </div>
            <div className="emp-info first relative shadow">
              <div className="top-head">
                    <h3>Echttech HRMS</h3>
              </div>
              <div className="mid-part my-5 flex items-center flex-col">
                    <div className="emp-img my-5"><img src={employee_img} alt="" /></div>
                    <div className="full-name flex items-center flex-col">
                      <h2>Rohit Sharma</h2>
                      <h4>UI Developer</h4>
                    </div>
              </div>
              <div className="bottom-part">
                      <div className="bottom-info"><h6>Emp ID</h6><span>:</span><p>123456</p></div>
                      <div className="bottom-info"><h6>User Name</h6><span>:</span><p>rohit_sharma123</p></div>
                      <div className="bottom-info"><h6>Email</h6><span>:</span><p>rohit.sharma458@echttech.com</p></div>
                      <div className="bottom-info"><h6>Contact</h6><span>:</span><p>9999999999</p></div>
              </div>
            </div>
            <div className="emp-info second relative shadow">
            <div className="top-head">
                    <h4>Terms & Conditions</h4>
                    <ul>
                      <li><p>Praesentium, atque inventore quam id eius sit odio mollitia</p></li>
                      <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                    </ul>
              </div>
              <div className="mid-part my-10">
                    <div className="bottom-info"><h6>Joining Date</h6><span>:</span><p>20-oct-2024</p></div>
                    <div className="bottom-info"><h6>Expire Date</h6><span>:</span><p>.........</p></div>
              </div>
              {/* <div className="bottom-part">
                      
              </div> */}
            </div>
          </div>
          {/* Employee Card information Section End */}


          {/* Employee Table Section Start */}
          <div className="emp-table-section">
            <div className="head my-10">
              
            </div>
            <div className="emp-table">
              
              <div className="table-container shadow">
              <div className="head mb-4">
                <h2 className='headings text-lg font-bold'>My Project</h2>
              </div>
             
                  <table>
                    <thead>
                      <tr>
                        {data[0].map((header, index) => (
                          <th key={index}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
            </div>

            <div className="head my-10">
              
            </div>
            <div className="emp-table">
              <div className="table-container shadow">
              <div className="head mb-4">
                <h2 className='headings text-lg font-bold'>My Tasks</h2>
              </div>
                  <table>
                    <thead>
                      <tr>
                        {data[0].map((header, index) => (
                          <th key={index}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DashboardStatsGrid
