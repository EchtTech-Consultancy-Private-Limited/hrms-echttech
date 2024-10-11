import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import { useState, SyntheticEvent } from 'react';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'



const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function SidebarcontentComponent({consttoggleClass, toggleClass}) {
export default function SidebarcontentComponent({consttoggleClass , isToggled}) {
  const [expanded, setExpanded] = useState('panel1');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleChange = 
    (panel) => (event: SyntheticEvent, newExpanded: Boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    console.log(toggleClass,consttoggleClass, "consttoggleClass" )
    const initialview =()=>
      {
        console.log("hii")
      }

    
  return (
    <div className='below-content-list'>
      {DASHBOARD_SIDEBAR_LINKS.map((link) => (
      <Accordion expanded={link.submenu?.length > 0 && expanded === link.key} onChange={handleChange(link.key)} className='ul-list'>
        <AccordionSummary aria-controls={`${link.key}-content`} id={`${link.key}-header`} className='color-white ul-parent'>
          <span className="mr-3 text-xl" onClick={ link.secondsidebar === 1 ? ()=> {consttoggleClass(); toggleClass()} : null}>{link.icon}</span>
          <span className="mr-3 text-xl" onClick={ link.secondsidebar === 1 ? consttoggleClass : isToggled}>{link.icon}</span>
          <Typography>
            {
            link.secondsidebar === 1 ?<Link to={link.path} onClick={() => { consttoggleClass(); toggleClass(); }}>{link.label}</Link>:<Link to={link.path}>{link.label}</Link>
            }
            
          </Typography>
          {link.submenu?.length > 0 && (
            <span className="text-neutral-200 side-bar-content-arrow">{isSubMenuOpen ? < HiOutlineChevronRight /> : <HiOutlineChevronDown />}</span>
         )}
        </AccordionSummary>
        {link.submenu?.length > 0 && (
        <AccordionDetails className='parent-all-ul'>
          <ul className='all-ul'>
            {link.submenu.map((subLink) => (
              
              <li><Link to={subLink.path}>{subLink.label}</Link></li>
            ))}
          </ul>
        </AccordionDetails>
         )}
      </Accordion>
      ))}
      
      


    </div>

    
  );
}