
import React, { useState } from 'react';
import'./style/Footerstyle.css'
import Popup from "./PopupMenu"



const Footer = () => {
  const [ onclicks ,newclick]= useState(false)
  const popup=()=>{
      newclick(true);
  }
  return (
    <div className='footer-container'>
      <div className='footer-inshorts-logo'>
        <img
          className='footer-logo'
          src="https://play-lh.googleusercontent.com/lvAGNNFIBMC3ZgS-JJcSwDzpSjOGMg7FGY14FrffJobLOed9-H2DiuZwknsIwVwKwTjo"
          alt="inshorts-logo"
        />
        <div className='footer-inshorts-headline'>
          <h1 className='footer-headline'>inshorts</h1>
        </div>
      </div>
      <p className='footer-description'>
        STAY UPDATED
      </p>
      <div className='footer-contact'>
        <h1 className='footer-contact-heading' onClick={popup}>Contact Us</h1>
        <Popup targets ={onclicks} setagets={newclick}/>

        <h6 className='footer-terms-conditions'>Terms and conditions</h6>
      </div>
    </div>
  );
};

export default Footer;
