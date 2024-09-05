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
        <div className="footer-content">
            <h3>SHOPING</h3>
            <p>Your one-stop destination for all your shopping needs, offering a wide range of products across various categories. Whether you're looking for the latest fashion trends, home appliances, electronics, beauty products, or groceries, we have it all. Our user-friendly interface allows you to easily navigate through categories and find exactly what you need with just a few clicks.</p>
            <ul className="socials">
                <li><NavLink><FaFacebook/></NavLink></li>
                <li><NavLink><FaSquareXTwitter/></NavLink></li>
                <li><NavLink><IoLogoWhatsapp/></NavLink></li>
                <li><NavLink><FaLinkedin/></NavLink></li>
               
            </ul>
        </div>
        <div className="footer-bottom">
            <p>Made By &copy; <a href="#">Nikhil</a>  </p>
                    
        </div>

    </footer>


    </>
  )
}

export default Footer