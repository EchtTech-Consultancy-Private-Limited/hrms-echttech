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
    <div className={`layout main-container flex ${isActive ? 'hide' : 'show'}`}>

      <div className="left-sidebar main-bg-color">
        <aside className="sidebar">
          <Sidebar />
        </aside>
      </div>
      <div className="main-content right-dashboard">
     
        <header className="header">
          <Header toggleClass={handleClick} isToggled={isActive} />
        </header>

       
        <main className="content">
          <Outlet />
        </main>

        
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default LayoutComponent;
