import React from 'react';
import './App.css';
import './layouts/header';
import Header from './layouts/header';
import WhatWeDo from './mainPart/whatWeDo';
import './index.css';
import WhyChooseUs from './mainPart/whyChooseUs';
import OurProcess from './mainPart/ourProcess';
import OurPersonalizedSolutions from './mainPart/ourPersonalizedSolutions';

class App extends React.Component {

  render(){
    return (
      <div>
      <Header/>
      <WhatWeDo/> 
      <WhyChooseUs/>
      <OurProcess/>
      <OurPersonalizedSolutions/>
      </div>
    )
  }
}

export default App;
