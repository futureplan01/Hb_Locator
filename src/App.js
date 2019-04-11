import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//COMPONENTS
import Main from "./components/mainComponent/main";

//CSS SHEET
import "./assets/css/style.css";

class App extends Component {
  render() {
    return (
        <div id = "appContainer">
        
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/map" component={Main} />
            <Route exact path="/anything_else" component={Main} />
          </Switch>
        
        </div>
    );
  }
}

export default App;
