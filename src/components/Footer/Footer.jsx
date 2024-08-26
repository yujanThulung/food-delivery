import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="icon" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="icon" />
                        <img src={assets.linkedin_icon} alt="icon" />
                        <img src={assets.twitter_icon} alt="icon" />
                    </div>
                </div>
                <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                </div>
                <div className="fooer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>038-520-456</li>
                        <li>yujan@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 &copy; YujanRai -All Right Reserved.</p>
        </div>
    )
}

export default Footer