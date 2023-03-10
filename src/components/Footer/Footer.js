import React from 'react';
import footerLogo from "./../../image/footer-logo.svg";
import {NavLink} from "react-router-dom";
import {BsTelegram, BsYoutube} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
        <div className="container">
            <div className="footer">
                <div className="footer-logo">
                    <img src={footerLogo} alt=""/>
                </div>
                <nav className="footer-nav">
                    <NavLink className="footer-nav_item" to={"/Home"}>
                        Home
                    </NavLink>
                    <NavLink className="footer-nav_item" to={"/About"}>
                        About Us
                    </NavLink>
                    <NavLink className="footer-nav_item" to={"/Study"}>
                        Study Abroad
                    </NavLink>
                    <NavLink className="footer-nav_item" to={"/Contacts"}>
                        Contacts
                    </NavLink>
                </nav>
                <div className="footer-icons">
                    <BsYoutube className="footer-icons_icon"/>
                    <BsTelegram className="footer-icons_icon"/>
                    <AiFillInstagram className="footer-icons_icon"/>
                </div>
                <div className="footer-line"></div>
                <div className="footer-copyright">
                    <span>&copy; 2023 Motion Study LLC</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;