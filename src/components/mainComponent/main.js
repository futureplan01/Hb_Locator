import React, { Component } from 'react';

import Header from '../headerComponent/header';
import Homepage from '../pages/homePage';

class Main extends Component {
    render() {
      return (
          <div id = "appContainer">
            <Header/>    
            <Homepage/>
          </div>
      );
    }
}
export default Main;  