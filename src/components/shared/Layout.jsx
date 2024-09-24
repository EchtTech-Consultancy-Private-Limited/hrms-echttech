import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Sidebar />
        <div>
            <Header />
            <div>
                <Outlet />
                </div>
            </div>
        </div>
  )
}

export default Layout
