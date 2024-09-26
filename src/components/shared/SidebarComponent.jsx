import React from 'react'
import logo from "../../assetsechttech/logo/logo.png"
import { AiOutlineDashboard } from "react-icons/ai";
import SidebarcontentComponent from './SidebarcontentComponent'

 
const SidebarComponent = () => {
  return (
    <div className='left-sidebar-inner'>
       <div className="sidebar-top-logo-con w-full rounded-lg logo-custom-border p-4 mt-8">
         <img src={logo} alt="" />
       </div>
       <div className="below-content mt-8 p-4 ">
        <div className="dash-icon flex ml-6">
          <AiOutlineDashboard  className='color-white mr-3 text-xl'/>
          <h1 className='text-white mb-3 dashboard-text' >Dashboard</h1>
         </div>
         <SidebarcontentComponent />
      </div>
    </div>
  )
}

export default SidebarComponent
