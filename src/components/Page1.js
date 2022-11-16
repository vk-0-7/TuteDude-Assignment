import React from 'react'

import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';

import './Page1.css'

const Page1 = () => {
  return (
    <>
    
      <div className="firstelem">
        <p> UI/UX {'>'} Refer & Earn</p>
      </div>

      <div className="earning-box">
           <div className="box1" id="box">
            <p>Referral-Earning</p>
            <h1>₹ 2,500</h1>
           </div>
           <div className="box2" id='box'><p>Total Referrels</p> 
           <h1>7</h1></div>
           <div className="box3" id='box'> <p>wallet Balance</p> <h1>₹ 500</h1></div>
           <div className="but">
             <h3>Withdraw Balance</h3>
           </div>
         </div>
      <div className="referal-code">
           <p>Your Referal Code</p>
          <div className="code">
               <h2>E &nbsp;&nbsp;  D  &nbsp;&nbsp; C &nbsp;&nbsp;  H &nbsp;&nbsp;  5  &nbsp;&nbsp; 4</h2>

                </div> 
      </div>
      <div className="work">
           <h1>How Does It Work?</h1>
         <div className="workbox-main">

           <div className="workbox1" id='workbox'>
            <div className="groupicon" id='icon'> <GroupsIcon/> </div>
             <div className="text1" id='text'><h4>Invite a Friend</h4> <h5>share the link Tutedude.com with your friend</h5></div>
           </div>
           <div className="workbox2" id='workbox'>
           <div className="rupeeicon" id='icon'>  <CurrencyRupeeIcon/></div>
           <div className="text2" id='text'><h4>You get ₹ 200 as referral money</h4> <h5>On total purchases the friend make,into the wallet</h5> </div>
           </div>
           <div className="workbox3" id='workbox'>
           <div className="walleticon" id='icon'> <AccountBalanceWalletIcon/></div>
           <div className="text3" id='text'><h4>Transfer money from wallet</h4> <h5>when the wallet balance reaches ₹ 200 or more,<br /> you can withdraw it</h5></div>
           </div>
           <div className="workbox4" id='workbox'>
           <div className="offericon" id='icon'> <LocalOfferIcon/></div>
           <div className="text4" id='text'><h4>Friend purchases any course</h4> <h5>Using your REFERAL CODE in the payments page</h5></div>
           </div>
           <div className="workbox5" id='workbox'>
           <div className="verifiedicon" id='icon'> <VerifiedIcon/></div>
           <div className="text5" id='text'><h4>Your friend get ₹ 200 off</h4>
           <h5>on his overall fee on successful purchasing using <br />your referral code</h5>
           </div>
           </div>
          
           </div>





      </div>
      <div className="last">
       <Link to="/referred"> <p>Friends who Enrolled</p></Link>
        <p>Terms & Conditions</p>
      </div>
    </>
  )
}

export default Page1