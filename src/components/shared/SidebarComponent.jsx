import React from 'react'
import logo from "../../assetsechttech/logo/logo.png"

const SidebarComponent = () => {
  return (
    <div className='left-sidebar-inner p-4'>
       <div className="sidebar-top-logo-con w-full rounded-lg logo-custom-border p-2">
         <img src={logo} alt="" />
       </div>
       <div className="below-content mt-8">
         <h3 className='text-slate-500 hover:text-white' >PAGES</h3>
       </div>
    </div>
  )
}

export default SidebarComponent
