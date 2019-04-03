import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-react-dom";

//COMPONENTS
import Main from './components/MainComponent';

//CSS SHEET
import './assets/css/style.css';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component= {Main}/>
            <Route exact path="/map" component= {Main}/>
            <Route exact path="/anything_else" component= {Main}/>
          </Switch>
        </Router>
    );
  }
}



export default App;
