import React from 'react';
import { PyzaLogo } from '../../assets';
import './Footer.css';

export enum Developers {
  NodeDevelopers = 'Node Developers',
  ReactDevelopers = 'React Developers',
  ReactNativeDevelopers = 'React Native Developers',
  iOSDevelopers = 'iOS Developers',
  AndroidDevelopers = 'Android Developers',
  FullStackDevelopers = 'Full Stack Developers',
}

export enum Transcribers {
  TranslationAndTranscription = 'Translation & Transcription',
  Subtitling = 'Subtitling',
  ContentWriting = 'Content Writing',
  CreativeWriting = 'Creative Writing',
  Ghostwriting = 'Ghostwriting',
  FictionWriting = 'Fiction Writing',
  DataEntry = 'Data Entry',
  LanguageExperts = 'Language Experts - Hindi English',
}

export enum OtherLinks {
  Github = 'Github',
  Instagram = 'Instagram',
  Facebook = 'Facebook',
  Medium = 'Medium',
}

export type Link = Developers | Transcribers | OtherLinks;

interface FooterProps {
  onClickHire: (option: Link) => void;
}

export class Footer extends React.Component<FooterProps> {

  trancribers: Transcribers[] = [
    Transcribers.TranslationAndTranscription,
    Transcribers.Subtitling,
    Transcribers.ContentWriting,
    Transcribers.CreativeWriting,
    Transcribers.Ghostwriting,
    Transcribers.FictionWriting,
    Transcribers.DataEntry,
    Transcribers.LanguageExperts,
  ];

  developers: Developers[] = [
    Developers.NodeDevelopers,
    Developers.ReactDevelopers,
    Developers.ReactNativeDevelopers,
    Developers.iOSDevelopers,
    Developers.AndroidDevelopers,
    Developers.FullStackDevelopers,
  ];

  socialLinks: OtherLinks[] = [
    OtherLinks.Instagram,
    OtherLinks.Facebook,
    OtherLinks.Medium,
  ]

  getLink = (link: OtherLinks) => {
    switch (link) {
      case OtherLinks.Facebook: return 'https://www.facebook.com/pyzalabs'
      case OtherLinks.Github: return 'https://github.com/pyza-labs'
      case OtherLinks.Medium: return 'https://medium.com/@pyzalabs'
      case OtherLinks.Instagram: return 'https://www.instagram.com/pyzalabs'
      default: return '#';
    }
  }

  render() {
    return (
      <div className="footer">
      <div className="footer-container">
        <div className="footer-container-center">
          <div className="footer-img-container">
            <img className="footer-img" alt="logo" src={PyzaLogo}/>
          </div>
          <div className="footer-header1">
            <div className="footer-list-header">OPEN SOURCE</div>
            <ul className="footer-list">
              <li>
                <a target='_blank' href={this.getLink(OtherLinks.Github)}>{OtherLinks.Github}</a>
              </li>
            </ul>
          </div>
          <div className="footer-header2">
            <div className="footer-list-header">HIRE DEVELOPERS</div>
            <ul className="footer-list">
              { this.developers.map(developer => <li key={developer} onClick={() =>this.props.onClickHire(developer)}>{developer}</li>) }
            </ul>
          </div>
          <div className="footer-header3">
            <div className="footer-list-header">HIRE TRANSLATORS</div>
            <div className="footer-list-header">& TRANSCRIBERS</div>
            <ul className="footer-list">
              { this.trancribers.map(transcriber => <li key={transcriber} onClick={() =>this.props.onClickHire(transcriber)}>{transcriber}</li>) }
            </ul>
          </div>
          <div className="footer-header4">
            <div className="footer-list-header">CONNECT</div>
            <div style={{ marginTop: 16 }} className="footer-list-header">Social</div>
            <ul className="footer-list">
              { 
                this.socialLinks.map((social) => {
                  return (
                      <li key={social}>
                        <a target='_blank' href={this.getLink(social)}>{social}</a>
                      </li>
                    );
                })
              }
            </ul>
            <div className="footer-list-subheader">Our Office</div>
            <div>HSR Layout, Bengaluru, India</div>
            <div className="footer-list-subheader">Hire Us!</div>
            <a style={{ color: '#FFF' }} href="mailto:info@pyzalabs.com">info@pyzalabs.com</a>
          </div>
        </div>
        <div className="copyright-info">2018 © All rights reserved. Pyza Labs India Private Limited.</div>
      </div>
    </div>
    );
  }
}
