import React, { Component } from 'react';
import { Footer, Navbar, Link, BottomSheet } from '../../components';
import { HomeImage } from '../../assets';
import { Colors } from '../../theme';
import './app.css';

interface AppProps {}

interface AppState {
  selectedLink?: Link;
}

export class App extends Component<AppProps, AppState> {

  state = {
    selectedLink: undefined
  }

  handleLinks = (link: Link) => {
    this.setState({ selectedLink: link });
  }

  render() {
    return (
      <div className="page-container">
        <BottomSheet show={this.state.selectedLink ? true : false} onClose={() => this.setState({ selectedLink: undefined })}>
          <div style={{ fontSize: 24, fontWeight: 300 }}>Please enter your email. <br/> We'll get back to you for your requirement of <b>{this.state.selectedLink}</b></div>
          <input placeholder='someone@email.com'/>
          <a className="navbar-button">
            SUBMIT
          </a>
        </BottomSheet>
        <Navbar/>
        <div className="center-container" id="home">
          <img className="center-img" alt="" src={HomeImage}/>
          <div className="center-text" style={{ flex: 1, flexDirection: 'column', marginLeft: 20 }}>
            <div style={{ flex: 1, fontSize: 40, fontWeight: 700, lineHeight: 1.2 }}>
              Next level products,
              <br/>
              Delivered.
            </div>
            <div style={{ fontSize: 14, color: Colors.GrayDarker, marginTop: 16 }}>
              We help brands and companies create outstanding products.
            </div>
          </div>
        </div>
        <Footer onClickHire={this.handleLinks}/>
      </div>
    );
  }
}
