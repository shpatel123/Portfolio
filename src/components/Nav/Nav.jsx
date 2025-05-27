import React, { useRef } from "react";
import navCSS from "./Nav.module.css";
import logo from './../../assets/logo.png';

function Nav() {
    const menu = useRef();
    const MenuHandler = () => {
        menu.current.classList.toggle(navCSS.activeMenu);
    };

    return (
        <div className={navCSS.Nav_wrapper}>
            <img className="logo" src={logo} alt="Logo" />
            <ul ref={menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#certification">Certification</a></li>
                <li><a href="#internship">Internship</a></li>
                <li><a href="#contact" className={navCSS.conbtn}>Contact Me</a></li>
            </ul>
            <i className="ri-menu-2-line" id={navCSS.bars} onClick={MenuHandler}></i>
        </div>
    );
}

export default Nav;
