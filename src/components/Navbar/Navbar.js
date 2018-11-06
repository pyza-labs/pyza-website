import React from 'react';
import './Navbar.css';
import { PyzaLogoBlack } from '../../images';

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-logo"><a href="#home"><img alt="logo" src={PyzaLogoBlack}/></a></li>
      <li className="navbar-link">
        <a href="mailto:info@pyzalabs.com" className="navbar-button">
          EMAIL US
        </a>
      </li>
      {/* <li className="navbar-link"><a href="#home" className="title">BLOG</a></li>
      <li className="navbar-link"><a href="#tech" className="title">TECHNOLOGY</a></li>
      <li className="navbar-link"><a href="#about" className="title">ABOUT</a></li>
      <li className="navbar-link"><a href="#home" className="title">HOME</a></li> */}
    </ul>
  );
};