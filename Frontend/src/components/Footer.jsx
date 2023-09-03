import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import google from '../images/google.svg';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#34a853' : '#308fe8',
    },
  }));

function Footer({formSubmit, clearForm}) {
  return (
    <div className="footer">
        <div className="actions">
            <Button variant="contained" className='submit' onClick={formSubmit}>Submit</Button>
            <div className='page'>  
                <BorderLinearProgress variant="determinate" value={100} />
                <span>Page 1 of 1</span>
            </div>
            <Button className='clear' onClick={clearForm}>Clear form</Button>
        </div>
        <p className='terms'>Never submit passwords through Google Forms.</p>

        <ul className='terms'>
        This content is neither created nor endorsed by Google. &nbsp;
        <Link >Report Abuse </Link> - <Link  > Terms of Service</Link> - <Link > Privacy Policy</Link>
        </ul>

        <div className="google">
        <img src={google} alt='footer'/> 
        <span>Forms </span>
        </div>
     </div>
  )
}

export default Footer