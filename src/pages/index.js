import React from 'react'

import { Navbar, Layout } from '../components'

import './index.css';
import { HomeImage } from '../images';
import { Colors } from '../theme';

const IndexPage = () => (
  <Layout>
    <div>
      <Navbar/>
      <div id="home" style={{ display: 'flex', flex: 1, height: '90vh', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
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
    </div>
  </Layout>
)

export default IndexPage
