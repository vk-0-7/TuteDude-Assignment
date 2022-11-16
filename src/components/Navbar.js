import React from 'react'
import logo from '../images/Tutedude.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
     <div className="logo">
       <img src={logo} alt="No logo found" />
     </div>
     <div className="nav">
        <ul>
            <li> My Assignment </li>
            <li>Chat with Mentor</li>
            
             <AccountCircleIcon style={{ color: 'rgb(93,12,109)' }}/>
            <li>ProfileName</li>

          <div className="arrow"> <KeyboardArrowDownIcon  style={{ color: 'rgb(93,12,109)' }}/></div> 
        </ul>
     </div>
    </div>
    
    
    </>
  )
}

export default Navbar 

