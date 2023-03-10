import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "./../../image/logo.svg";
import {CiSearch} from "react-icons/ci";
import BurgerMenu from "./Burger-menu";

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <div className="header_logo">
                            <NavLink to={"/Home"}>
                                <img src={Logo}/>
                            </NavLink>
                        </div>
                        <div className="header_right">
                            <nav className="header_right-nav">
                                <NavLink className="header_right-nav_item" to={"/Home"}>
                                    Home
                                </NavLink>
                                <NavLink className="header_right-nav_item" to={"/About"}>
                                    About Us
                                </NavLink>
                                <NavLink className="header_right-nav_item" to={"/Study"}>
                                    Study Abroad
                                </NavLink>
                                <NavLink className="header_right-nav_item">
                                    Contacts
                                </NavLink>
                            </nav>
                            <form className="header_right-search">
                                <CiSearch className="header_right-search_icon"/>
                                <input type="text" placeholder="Поиск..."/>
                            </form>
                            <div className="header_right-langs">
                                <select>
                                    <option>ENG</option>
                                    <option>RU</option>
                                    <option>KG</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <BurgerMenu/>
        </>
    );
};

export default Header;
