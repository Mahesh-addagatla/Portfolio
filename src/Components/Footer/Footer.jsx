import React from 'react'
import './Footer.css'
import logo from '../../assets/img.png'
//import icon from '../../assets/image.png';

const Footer = () => {
  return (
    <div className='portfolio-footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sint temporibus doloremque doloribus qui tempore, mollitia amet nost</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                <i class="fa-solid fa-user"></i>
                    <input type="email" placeholder='Enter Your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-right'>@ 2024 Mahesh Addagatla, All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
