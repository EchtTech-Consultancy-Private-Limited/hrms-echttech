import React from 'react'
import SidebarcontentComponent from './SidebarcontentComponent'
import { HiChevronDoubleRight,  HiChevronDoubleLeft  } from "react-icons/hi";

 
const SidebarComponent = ({toggleClass, isToggled}) => {
  return (
    <div className='left-sidebar-inner'>
         <button className='collapse-btn' onClick={toggleClass}> {isToggled ? <HiChevronDoubleRight className='text-xl color-white'/> : <HiChevronDoubleLeft  className='text-xl color-white'/>}</button>
       <div className="below-content p-4 ">
        
         <SidebarcontentComponent toggleClass={toggleClass} />
      </div>
    </div>
  )
}

export default SidebarComponent
