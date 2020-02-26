import React from 'react';
import './App.css';
import './layouts/header';
import Header from './layouts/header';
import WhatWeDo from './mainPart/whatWeDo';
import './index.css';
import WhyChooseUs from './mainPart/whyChooseUs';

class App extends React.Component {


  render(){
    return (
      <div>
      <Header/>
      <WhatWeDo/> 
      <WhyChooseUs/>
      </div>
    )
  }
}

export default App;
