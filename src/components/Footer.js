import React from 'react'
import logo from './logo.png'
import linkdin from './linkedin-512.png';
import mail from './envelope-closed-512.png';
import insta from './instagram.png';
import'./style.css';
export default function Footer() 
{
  return (
    
<footer className="text-lg-start">
  <div className="sticky-sm-bottom">

  <div className="container-fluid">
    <div className="row justify-text-start">
      
      <div className="col-md-3 col-sm-6 ms-md-auto my-2">
        <div className='d-flex d-inline flex-row'>
            <div className="">

              <img src={logo} alt="logo" className='logo text-sm-center'/>
            </div>
            <div className="my-2">
            <h6 className='footer-name text-white text-md-start text-sm-center'><strong>SELLULAR</strong></h6>
            </div>
        </div>

          
        
        <div className="col">
        <p className='footer-text text-start'>Sellular is the most trusted way of buying and selling around your campus. Choose from fully verified and trusted people to buy and sell.</p>
        </div>
      </div>
     <div className='col-sm-4'></div>
      <div className="col-md-3 col-sm-6 ms-md-auto my-2">
        <div className="">
                <li className='text-white'><a href="/" className='fs '>Career</a></li>
                <li className='text-white'><a href="/" className='fs '>About Us</a></li>
                <li className='text-white'><a href="/" className='fs '>Join Us</a></li>
        </div>
        {/* social media icons  */}
        <div className='container-fluid'>

        <div class="row align-items-end">
    <div class="col col-2 mx-2 d-block media-icon-box">
    <a href='/'><img src={linkdin} alt="" href="/" className='contact-logo '/></a>
    </div>
    <div class="col col-2 mx-2 d-block media-icon-box">
    <a href='/'><img src={mail} href="/" alt="" className='contact-logo '/></a>
    </div>
    <div class="col col-2 mx-2 d-block media-icon-box">
    <a href='/'><img src={insta}  href="/" alt="" className='contact-logo text-aling-center'/></a>
    </div>
        </div>
       
      </div>
    </div>
  </div>
  </div>
  <div className="text-center p-4" >
    <a id='footer-ending'>© 2022 Sellular All Rights Reserved.</a>
  </div>
 </div>
</footer>

  )
}
