import React from 'react';
import Sidebar from './SidebarComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Outlet } from 'react-router-dom';


const LayoutComponent = () => {
  return (
    <div className="layout main-container flex">

      <div className="left-sidebar">
        <aside className="sidebar">
          <Sidebar />
        </aside>
      </div>
      <div className="main-content right-dashboard px-3">
     
        <header className="header">
          <Header />
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
