import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { PyzaLogo } from '../images';

const IndexPage = () => (
  <Layout>
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img style={{ height: 80 }} src={PyzaLogo}/>
      <h1 style={{ fontWeight: 'normal', color: '#FFF', fontSize: 20 }}>Coming Soon</h1>
    </div>
  </Layout>
)

export default IndexPage
