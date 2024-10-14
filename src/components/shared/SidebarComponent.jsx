import React from 'react'
import SidebarcontentComponent from './SidebarcontentComponent'
import { HiChevronDoubleRight,  HiChevronDoubleLeft  } from "react-icons/hi";

 
const SidebarComponent = ({toggleClass, isToggled, consttoggleClass, isconstsidebarActive}) => {
  return (
    <div className='left-sidebar-inner'>
         <button className='collapse-btn' onClick={()=>{toggleClass()}}> {isToggled ? <HiChevronDoubleRight className='text-xl color-white'/> : <HiChevronDoubleLeft  className='text-xl color-white'/>}</button>
       <div className="below-content pt-4 ">
        
         <SidebarcontentComponent consttoggleClass={consttoggleClass} toggleClass={toggleClass}  isToggled={isToggled} isconstsidebarActive={isconstsidebarActive} />
      </div>
    </div>
  )
}

export default SidebarComponent
