import React from 'react'
import './Page2.css'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <>
      <div className="firstelem">
        <p> UI/UX {'>'} Refer & Earn {'>'} Friends referred</p>
      </div>
      <div className="go-back">
       <Link to="/"><ArrowBackRoundedIcon/>  </Link><p>go back</p>
      </div>
      <div className="referal-code-page2">
           <p>Your Referal Code</p>
          <div className="code-page2">
               <h2>E &nbsp;&nbsp;  D  &nbsp;&nbsp; C &nbsp;&nbsp;  H &nbsp;&nbsp;  5  &nbsp;&nbsp; 4</h2>

                </div> 
                <div className="boxes-page2" id='box-page2'> <p>wallet Balance</p> <h1>₹ 500</h1></div>

  <div className="enrolled"><h2>Friends who enrolled(3)</h2></div>
  <div className='enrolled-boxes'>
  <div className="enrolled-box1" id='enroll'>
     <h3>Dhiraj Saxena</h3>
     <div id="date">14 sept,2022</div>
   <div id="courses">
   <h4>Courses enrolled(6)</h4>
   <div id="course">
     <p>UI/UX</p>  
    <p>Photoshop</p> 
    <p>Illustator</p> 
    <p>Python</p> 
    <p>Mern</p> 
    <p>Java</p> 
    </div>
   </div>
   <div id="amt">
       <h3>Referrel amount</h3> <h2>₹ 185</h2> 
    </div>

  </div>
  <div className="enrolled-box2" id='enroll'>
  <h3>Shubhash Mishra</h3>
  <div id="date">15 sept,2022</div>
  <div id="courses">
      <h4>Courses enrolled(23)</h4>
      <div id="course">
     <p>UI/UX</p>  
    <p>Photoshop</p> 
    <p>Illustator</p> 
    <p>Python</p> 
    <p>Mern</p> 
    <p>Java</p> 
    <p>C++</p> 
    </div>
    </div>
    <div id="amt">
       <h3>Referrel amount</h3> <h2>₹ 485</h2> 
    </div>
  </div>
  <div className="enrolled-box3" id='enroll'>

  <h3>Prafull Kumar</h3>
  <div id="date">16 sept,2022</div>
  <div id="courses">
  <h4>Courses enrolled(23)</h4>
  <div id="course">
     <p>UI/UX</p>  
    <p>Photoshop</p> 
    <p>Illustator</p> 
    <p>Python</p> 
    <p>Mern</p> 
    <p>Java</p> 
    </div>
    </div>
    <div id="amt">
       <h3>Referrel amount</h3> <h2>₹ 485</h2> 
    </div>
  </div>




</div>

<div className='tandc'> <h3>Terms and conditions</h3></div>

      </div>
    
    
    
    </>
  )
}

export default Page2