import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS
<<<<<<< HEAD
import Main from "./components/mainComponent/main";
=======
import Main from "./components/MainComponent";
import MapContainer from "./components/MapContainer";
>>>>>>> caea5e00083fc2ed627d40d4de98efdb5a0ff655

//CSS SHEET
import "./assets/css/style.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/map" component={MapContainer} />
        <Route exact path="/anything_else" component={Main} />
      </Switch>
    );
  }
}

export default App;
