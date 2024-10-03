import React from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import SidebarcontentComponent from './SidebarcontentComponent'
import { HiChevronDoubleRight,  HiChevronDoubleLeft  } from "react-icons/hi";
import { Link } from 'react-router-dom';

 
const SidebarComponent = ({toggleClass, isToggled}) => {
  return (
    <div className='left-sidebar-inner'>
         <button className='collapse-btn' onClick={toggleClass}> {isToggled ? <HiChevronDoubleRight className='text-xl color-white'/> : <HiChevronDoubleLeft  className='text-xl color-white'/>}</button>
       <div className="below-content p-4 ">
        {/* <div className="dash-icon flex ml-6">
            <AiOutlineDashboard  className='color-white mr-3 text-xl'/>
            <h1 className='text-white mb-3 dashboard-text'><Link to="dashboard">Dashboard</Link></h1>
         </div> */}
         <SidebarcontentComponent />
      </div>
    </div>
  )
}

export default SidebarComponent
