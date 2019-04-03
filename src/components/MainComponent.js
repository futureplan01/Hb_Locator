import React, { Component } from 'react';

import Header from './components/headerComponent/header';
import Homepage from 
'./components/pages/homePage';
export default  class MainComponent extends Component {
    render() {
      return (
          <div id = "appContainer">
            <Header/>    
            <Homepage/>
          </div>
      );
    }
}
  