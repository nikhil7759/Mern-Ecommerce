import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import"./Footer.css"

const Footer = () => {
  return (
    <>
    <footer className='footer__main'>
        <div class="footer-content">
            <h3>Foolish Developer</h3>
            <p>Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p>
            <ul class="socials">
                <li><NavLink><FaFacebook/></NavLink></li>
                <li><NavLink><FaSquareXTwitter/></NavLink></li>
                <li><NavLink><IoLogoWhatsapp/></NavLink></li>
                <li><NavLink><FaLinkedin/></NavLink></li>
               
            </ul>
        </div>
        <div class="footer-bottom">
            <p>Made By &copy; <a href="#">Nikhil</a>  </p>
                    
        </div>

    </footer>


    </>
  )
}

export default Footer