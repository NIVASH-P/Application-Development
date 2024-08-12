import React from 'react'
import './Footer.css';
import { assets } from '../../Assests/assets';
export const Footer = () => {
  return (
    <div className='footer'>
          <div className="foot-content">
             <div className="foot-content-left">
                <img src={assets.logo} alt="" />
                <p>From our kitchen to your table, enjoy a meal made with love and convenience.Good food is always cooking! Order now and experience the taste of happiness.</p>
                <div className='footer.-social-icons'>
                     <img src={assets.facebook_icon}alt="" />
                     <img src={assets.linkedin_icon} alt="" />
                     <img src={assets.twitter_icon} alt="" />
                </div>
             </div>
             <div className="foot-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                  </ul>
             </div>
             <div className="foot-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>2514-5141-6545</li>
                <li>SwigZ896@food.in</li>
               </ul>
             </div>
            </div>

            <hr />
            <p className='footer-copyright'>Copyright 2024 @ SwigZ.com -All Right Reserve</p> 

    </div>
  )
}
