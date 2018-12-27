import React from 'react';
import './Footer.css';
import { PyzaLogo } from '../../images';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
          <div>
            <img style={{ width: 100 }} alt="logo" src={PyzaLogo}/>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <div className="footer-list-header">HIRE DEVELOPERS</div>
            <ul className="footer-list">
              <li>Node Developers</li>
              <li>React Developers</li>
              <li>React Native Developers</li>
              <li>iOS Developers</li>
              <li>Android Developers</li>
              <li>Full Stack Developers</li>
            </ul>
          </div>
          <div style={{ marginLeft: 80 }}>
            <div className="footer-list-header">HIRE TRANSLATORS</div>
            <div className="footer-list-header">& TRANSCRIBERS</div>
            <ul className="footer-list">
              <li>Node Developers</li>
              <li>React Developers</li>
              <li>React Native Developers</li>
              <li>iOS Developers</li>
              <li>Android Developers</li>
              <li>Full Stack Developers</li>
            </ul>
          </div>
          <div style={{ marginLeft: 80 }}>
            <div className="footer-list-header">CONNECT</div>
            <div style={{ marginTop: 16 }} className="footer-list-header">Social</div>
            <ul className="footer-list">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Medium</li>
            </ul>
            <div className="footer-list-subheader">Our Office</div>
            <div>Indira Nagar, Bengaluru, India</div>
            <div className="footer-list-subheader">Hire Us!</div>
            <a style={{ color: '#FFF' }} href="mailto:info@pyzalabs.com">info@pyzalabs.com</a>
          </div>
        </div>
        <div className="copyright-info">2018 © All rights reserved. Pyza Labs India Private Limited.</div>
      </div>
    </div>
  );
};