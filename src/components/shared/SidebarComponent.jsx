import React from 'react'
import logo from "../../assetsechttech/logo/logo.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


 
const SidebarComponent = () => {
  return (
    <div className='left-sidebar-inner p-4'>
       <div className="sidebar-top-logo-con w-full rounded-lg logo-custom-border p-2">
         <img src={logo} alt="" />
       </div>
       <div className="below-content mt-8">
         <h3 className='text-white mb-10 dashboard-text' ><DashboardOutlinedIcon className='color-white mr-3' fontSize="small" />Dashboard</h3>
         {/* <div className="listing">
          <ul>
            <li className='list'><Link to="" className='text-base'>Attendance<ArrowForwardIosOutlinedIcon className='arrow-icons' /></Link>
            <ul>
              <li className='list'><Link to="">demo1</Link></li>
              <li className='list'><Link to="">demo2</Link></li>
              <li className='list'><Link to="">demo3</Link></li>
              <li className='list'><Link to="">demo4</Link></li>
            </ul>
            </li>
            <li className='list'><Link to="">Payroll<ArrowForwardIosOutlinedIcon className='arrow-icons' /></Link>
            <ul>
            <li className='list'><Link to="">demo1</Link></li>
              <li className='list'><Link to="">demo2</Link></li>
              <li className='list'><Link to="">demo3</Link></li>
              <li className='list'><Link to="">demo4</Link></li>
            </ul>
            </li>
          </ul>
         </div> */}
        <Accordion className='ul-list'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Attendance
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='ul-list'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Payroll
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  )
}

export default SidebarComponent
