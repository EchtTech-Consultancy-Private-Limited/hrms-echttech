import React, { useState, } from 'react';
import { Link} from 'react-router-dom'; // Import Link here
import { CONSTANTS_SIDEBAR_LINKS } from '../../lib/constants';
import Sidebar from './SidebarComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Outlet } from 'react-router-dom';
import { PiCaretDoubleRightBold } from "react-icons/pi";



const LayoutComponent = () => {

  const [isActive, setIsActive] = useState(false)
  
  const handleClick = () => {
    setIsActive(!isActive)
  }


  return (
    <div className="complete-layout">
        <div className="header-container">
              <header className="header">
                <Header />
              </header>
        </div>
        <div className={`layout main-container flex ${isActive ? 'hide' : 'show'}`}>

          <div className="left-sidebar main-bg-color relative">
            <aside className="sidebar">
              <Sidebar toggleClass={handleClick} isToggled={isActive} />
            </aside>
          </div>
          <div className='absolute z-50 top-28 constant-sidebar main-bg-color overflow-scroll ' >
        <ul>
        {CONSTANTS_SIDEBAR_LINKS.map((tab) => (
          <li className='py-2 px-1 flex justify-between my-2 border-b border-white' > 
            <Link className='text-white' to={tab.path}>{tab.label}</Link> <PiCaretDoubleRightBold className='text-sm text-white' />
          </li>
        ))}
        </ul>
          </div>
          <div className="main-content right-dashboard">
        
            <main className="content">
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
