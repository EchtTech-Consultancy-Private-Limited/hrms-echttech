import React from 'react'
import SidebarcontentComponent from './SidebarcontentComponent'
import { HiChevronDoubleRight,  HiChevronDoubleLeft  } from "react-icons/hi";

 
const SidebarComponent = ({toggleClass, isToggled, consttoggleClass, handleSettingSidebar, constisToggled, setIsSettingactive}) => {
  return (
    <div className='left-sidebar-inner'>
         <button className='collapse-btn' onClick={()=>{toggleClass()}}> {isToggled ? <HiChevronDoubleRight className='text-xl color-white'/> : <HiChevronDoubleLeft  className='text-xl color-white'/>}</button>
       <div className="below-content pt-4 ">
        
         <SidebarcontentComponent setIsSettingactive={setIsSettingactive} consttoggleClass={consttoggleClass} handleSettingSidebar={handleSettingSidebar} toggleClass={toggleClass} isToggled={isToggled} constisToggled={constisToggled}/>
      </div>
    </div>
  )
}

export default SidebarComponent
