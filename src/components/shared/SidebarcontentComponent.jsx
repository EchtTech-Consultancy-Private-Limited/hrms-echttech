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
import { FiUserCheck } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";
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

export default function SidebarcontentComponent() {
  const [expanded, setExpanded] = useState('panel1');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleChange =
    (panel) => (event: SyntheticEvent, newExpanded: Boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {DASHBOARD_SIDEBAR_LINKS.map((link) => (
      <Accordion expanded={link.submenu?.length > 0 && expanded === link.key} onChange={handleChange(link.key)} className='ul-list'>
        <AccordionSummary aria-controls={`${link.key}-content`} id={`${link.key}-header`} className='color-white ul-parent'>
          <span className="mr-3 text-xl">{link.icon}</span>
          <Typography>{link.label}</Typography>
          {link.submenu?.length > 0 && (
            <span className="text-neutral-200">{isSubMenuOpen ? '▲' : '▼'}</span>
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