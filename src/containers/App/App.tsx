import React, { Component } from 'react';
import { Footer, Navbar, Link, BottomSheet } from '../../components';
import { HomeImage } from '../../assets';
import { Colors } from '../../theme';

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
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <BottomSheet show={this.state.selectedLink ? true : false} onClose={() => this.setState({ selectedLink: undefined })}>
          <div style={{ fontSize: 24, fontWeight: 300 }}>Please enter your email. <br/> We'll get back to you for your requirement of <b>{this.state.selectedLink}</b></div>
          <input placeholder='someone@email.com'/>
          <a className="navbar-button">
            SUBMIT
          </a>
        </BottomSheet>
        <Navbar/>
        <div id="home" 
          style={{ 
            display: 'flex', 
            flex: 1, 
            height: 'calc(100vh - 80px)', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: 80,
            alignSelf: 'center',
            width: 960
            }}>
          <img alt="" src={HomeImage}/>
          <div style={{ flex: 1, flexDirection: 'column', marginLeft: 20 }}>
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
