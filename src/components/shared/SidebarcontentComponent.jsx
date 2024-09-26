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
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion onChange={handleChange('panel1')} className='ul-list'>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className='color-white ul-parent'>
            <FiUserCheck className='mr-3 text-xl'/>
          <Typography>Attendence</Typography>
        </AccordionSummary>
        <AccordionDetails className='parent-all-ul'>
          <ul className='all-ul'>
            <li><Link to="">Demo 1</Link></li>
            <li><Link to="">Demo 2</Link></li>
            <li><Link to="">Demo 3</Link></li>
            <li><Link to="">Demo 4</Link></li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='ul-list'>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" className='color-white ul-parent'>
            <MdOutlinePayments className='mr-3 text-xl'/>
          <Typography>Payroll</Typography>
        </AccordionSummary>
        <AccordionDetails className='parent-all-ul'>
          <ul className='all-ul'>
            <li><Link to="">Demo 1</Link></li>
            <li><Link to="">Demo 2</Link></li>
            <li><Link to="">Demo 3</Link></li>
            <li><Link to="">Demo 4</Link></li>
          </ul>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}