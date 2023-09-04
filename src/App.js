import React from 'react';

import { Footer, Blog, Features, Possibillity, Header, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return ( 
    <>
      <div className='App'>
        <div className='gradiant_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibillity />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default App
