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
  const [isconstsidebarActive, setIsconstsidebarActive] = useState(false)

  
  const handleClick = () => {
    setIsActive(!isActive)
    console.log("parent1")
  }

  const handleconstsidebarClick = () => {
    setIsconstsidebarActive(!isconstsidebarActive)
    console.log("parent2")
  }


  return (
    <div className="complete-layout">
        <div className="header-container">
              <header className="header">
                <Header />
              </header>
        </div>
        <div className={`layout main-container flex ${isActive ? 'hide' : 'show'} ${isconstsidebarActive ? 'consthide' : 'constshow'}`}>

          <div className="left-sidebar main-bg-color relative">
            <aside className="sidebar">
              <Sidebar toggleClass={handleClick} consttoggleClass={handleconstsidebarClick} isToggled={isActive} constisToggled={isconstsidebarActive} />
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
