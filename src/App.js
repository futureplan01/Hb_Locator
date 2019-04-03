import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-react-dom";

//COMPONENTS
import Header from './components/headerComponent/header';
import Homepage from 
'./components/pages/homePage';

//CSS SHEET
import './assets/css/style.css';

class App extends Component {
  render() {
    return (
        <Router>
          <Main/>
          <Route exact path="/" component= {Main}/>
        </Router>
    );

  }
}


export default App;
