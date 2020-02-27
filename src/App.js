import React from 'react';
import './App.css';
import './layouts/header';
import Header from './layouts/header';
import WhatWeDo from './mainPart/whatWeDo';
import './index.css';
import WhyChooseUs from './mainPart/whyChooseUs';
import OurProcess from './mainPart/ourProcess';
import OurPersonalizedSolutions from './mainPart/ourPersonalizedSolutions';
import CustomerStories from './mainPart/customerStories';
import OurPricing from './mainPart/ourPricing';

class App extends React.Component {

  render(){
    return (
      <div>
      <Header/>
      <WhatWeDo/> 
      <WhyChooseUs/>
      <OurProcess/>
      <OurPersonalizedSolutions/>
      <CustomerStories/>
      <OurPricing/>
      </div>
    )
  }
}

export default App;
