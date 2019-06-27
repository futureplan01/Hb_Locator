import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS 
import Main from "./components/main";
import MapContainer from "./components/MapComponents/MapContainer";
import NewMap from "./components/MapComponents/RecomposeMap";

//CSS SHEET
import "./assets/css/style.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/map" component={NewMap} />
        <Route exact path="/NewMap" component={MapContainer} />
      </Switch>
    );
  }
}

export default App;
