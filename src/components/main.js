import React, { Component } from 'react';

import Header from './PageComponents/header';
import Homepage from './PageComponents/HomePage';

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