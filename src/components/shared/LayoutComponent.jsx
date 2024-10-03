import React, { useState } from 'react';
import Sidebar from './SidebarComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Outlet } from 'react-router-dom';


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
