import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import Main from "./components/mainComponent/main";
import SearchBar from "./components/SearchBar";
import MapContainer from "./components/MapContainer";
import Handball from "./components/HandballData";

//CSS SHEET
import "./assets/css/style.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/map" component={MapContainer} />
        <Route exact path="/anything_else" component={Main} />
        <Route exact path="/hb" component={Handball}/>
      </Switch>
    );
  }
}

export default App;
