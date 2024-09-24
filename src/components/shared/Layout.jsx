import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
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

export default Layout;
