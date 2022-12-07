import React from 'react';
import './Footer.css'
import logo from '../../assets/images/Authwiki.png'

function Footer() {
  return (
    <div className='footer'>
    <div className="footer-items d">
        
        <h1><img src={logo} alt='logo'/></h1>
        <p>Auth-wiki provides a comprehensive collection of authentication codes for developers
        </p>
        <p className='footer-copy'>Copyright @ 2022 Team Gorilla</p>
    </div>
    <div className="footer-items a">
        <h1>Authwiki</h1>
        <a>About Us</a>
        <a>Careers</a>
        <a>Contact Us</a>
        <a>Our Team</a>
    </div>
    <div className="footer-items b">
        <h1>Policies</h1>
        <a>Terms of service</a>
        <a>Privacy Policy</a>
        <a>Cookies Policy</a>
        <a>Faq</a> 
    </div>
    <div className="footer-items c">
        <h1>Socials</h1>
        <a className='footer-icons'>icons</a>
        <a className='footer-icons'>icons</a>
        <a className='footer-icons'>icons</a>
        <a className='footer-icons'>icons</a>
    </div>

    </div>
  )
}

export default Footer