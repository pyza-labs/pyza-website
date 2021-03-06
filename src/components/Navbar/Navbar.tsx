import React from 'react';
import { PyzaLogoBlack } from '../../assets';
import './Navbar.css';

export class Navbar extends React.Component {
  render() {
    return (
      <ul className="navbar">
        <li className="navbar-logo"><a href="#home"><img alt="logo" src={PyzaLogoBlack}/></a></li>
        {/* <li style={{ marginLeft: 'auto' }} className="navbar-link"><a href="#home" className="title">HOME</a></li>
        <li className="navbar-link"><a href="#about" className="title">ABOUT</a></li>
        <li className="navbar-link"><a href="#home" className="title">BLOG</a></li>
        <li className="navbar-link"><a href="#tech" className="title">TECHNOLOGY</a></li> */}
        <li style={{ marginLeft: 'auto' }} className="navbar-link">
          <a href="mailto:info@pyzalabs.com" className="navbar-button">
            CONTACT US
          </a>
        </li>
        
      </ul>
    );
  }
}