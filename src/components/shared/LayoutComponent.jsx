import React, { useState, } from 'react';
import { Link, useNavigate} from 'react-router-dom'; // Import Link here
import { CONSTANTS_SIDEBAR_LINKS } from '../../lib/constants';
import Sidebar from './SidebarComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LayoutComponent = ({children}) => {

  const [isActive, setIsActive] = useState(false)
  const [isconstsidebarActive, setIsconstsidebarActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }

  const handleconstsidebarClick = () => {
    setIsconstsidebarActive(!isconstsidebarActive)

  }

  const handleSettingSidebar = () => {
    setIsSettingactive(!isSettingactive)

  }

  return (
    <div className="complete-layout">
      <div className="header-container">
        <header className="header">
          <Header />
        </header>
      </div>
      <div className={`layout main-container flex ${isActive ? 'hide' : 'show'} ${isconstsidebarActive ? 'consthide' : 'constshow'} ${isSettingactive ? 'settingshow':'settinghide'}`}>

        <div className="left-sidebar main-bg-color relative">
          <aside className="sidebar">
            <Sidebar toggleClass={handleClick} consttoggleClass={handleconstsidebarClick} handleSettingSidebar={handleSettingSidebar} isToggled={isActive} constisToggled={isconstsidebarActive} isSettingactive={isSettingactive} />
          </aside>
        </div>
        <div className='absolute z-50 top-28 constant-sidebar main-bg-color ' >
          <ul>
            {CONSTANTS_SIDEBAR_LINKS.map((tab) => (
              <li className='py-2 px-1 flex justify-between my-2 border-b border-white' key={tab.key}>
                <Link className='text-white no-underline flex items-center' to={tab.path}>
                  {/* Display the icon before the label */}
                  <span className='mr-2'>{tab.icon}</span>
                  {tab.label}
                </Link>

              </li>
            ))}
          </ul>
         </div>
         <div className='absolute setting-sidebar main-bg-color ' >
          <ul>
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/contract-type">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M64 371.2h76.795V448H192V320H64v51.2zm76.795-230.4H64V192h128V64h-51.205v76.8zM320 448h51.2v-76.8H448V320H320v128zm51.2-307.2V64H320v128h128v-51.2h-76.8z"></path>
                      </svg>
                    </span>
                    General
                </a>
              </li>
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/qualification">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11zm10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13 11 11.09zM14.5 6 9 9l5.5 3L20 9l-5.5-3z"></path>
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                      </svg>
                    </span>
                    Logos
                </a>
              </li>
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/document-type">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"></path>
                          <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M288 72v120a32 32 0 0 0 32 32h120"></path>
                          <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"></path>
                      </svg>
                    </span>
                    System
                </a>
              </li>
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/award-type">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </span>
                    Role
                </a>
              </li>
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/leave-type">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <g id="Calendar">
                            <path d="M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5
                                c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372
                                c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11
                                c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5
                                c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592
                                h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5
                                c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954
                                H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z"></path>
                          </g>
                      </svg>
                    </span>
                    Attendance
                </a>
              </li>
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/warning-type">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <g id="Warning">
                            <g>
                                <g>
                                  <path d="M12.5,8.752a.5.5,0,0,0-1,0h0v6a.5.5,0,0,0,1,0Z"></path>
                                  <circle cx="11.999" cy="16.736" r="0.5"></circle>
                                </g>
                                <path d="M18.642,20.934H5.385A2.5,2.5,0,0,1,3.163,17.29L9.792,4.421a2.5,2.5,0,0,1,4.444,0L20.865,17.29a2.5,2.5,0,0,1-2.223,3.644ZM12.014,4.065a1.478,1.478,0,0,0-1.334.814L4.052,17.748a1.5,1.5,0,0,0,1.333,2.186H18.642a1.5,1.5,0,0,0,1.334-2.186L13.348,4.879A1.478,1.478,0,0,0,12.014,4.065Z"></path>
                            </g>
                          </g>
                      </svg>
                    </span>
                    Payroll
                </a>
              </li>
              
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/travel-arrangement-type">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path>
                      </svg>
                    </span>
                    Recruitment
                </a>
              </li>
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/payment-methods">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                      </svg>
                    </span>
                    Email  Notification
                </a>
              </li>
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/currency-type">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <g id="Dollar">
                            <g>
                                <path d="M12,21.934A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.066Z"></path>
                                <path d="M14.5,13.5a2.006,2.006,0,0,1-2,2v1.01a.5.5,0,0,1-1,0V15.5H10.25a.5.5,0,0,1,0-1H12.5a1,1,0,0,0,0-2h-1a2,2,0,0,1,0-4V7.49a.5.5,0,0,1,1,0V8.5h1.25a.5.5,0,0,1,0,1H11.5a1,1,0,0,0,0,2h1A2.006,2.006,0,0,1,14.5,13.5Z"></path>
                            </g>
                          </g>
                      </svg>
                    </span>
                    Animation Effects
                </a>
              </li>
              <li class="py-2 px-1 flex justify-between my-2 border-b border-white">
                <a class="text-white no-underline flex items-center" href="/currency-type">
                    <span class="mr-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <g id="Dollar">
                            <g>
                                <path d="M12,21.934A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.066Z"></path>
                                <path d="M14.5,13.5a2.006,2.006,0,0,1-2,2v1.01a.5.5,0,0,1-1,0V15.5H10.25a.5.5,0,0,1,0-1H12.5a1,1,0,0,0,0-2h-1a2,2,0,0,1,0-4V7.49a.5.5,0,0,1,1,0V8.5h1.25a.5.5,0,0,1,0,1H11.5a1,1,0,0,0,0,2h1A2.006,2.006,0,0,1,14.5,13.5Z"></path>
                            </g>
                          </g>
                      </svg>
                    </span>
                    Notification Positions
                </a>
              </li>
          </ul>
        </div>
          <div className="main-content right-dashboard">
        
            <main className="content base-bg-color" children={children}>
              <Outlet />
            </main>
            
            <footer className="footer">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
  );
}

export default LayoutComponent;
