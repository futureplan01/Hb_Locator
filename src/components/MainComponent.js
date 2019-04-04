import React, { Component } from 'react';

import Header from './headerComponent/header';
import Homepage from './pages/homePage';
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
  