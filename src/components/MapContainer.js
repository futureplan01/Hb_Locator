import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import SearchBar from './SearchBar'; 
import React, { Component } from "react";
import Handball from "../Handball.json";

const MapWithHBCourts = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: 40.7362, lng: -73.8161 }}>
    {Handball.map((hb,i)=>{
      let x = Number(hb.lat);
      let y = Number(hb.lon);
      if(hb.lat != null && hb.lon != null){
       return(<Marker key = {i} position= {{lat: x, lng: y}}/>)
      }
    })}
    </GoogleMap>
  ))
);

class MapContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <MapWithHBCourts
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5c-P1VVmT9SgvX65j4n9pv58PgV4KV7A&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `1000px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapContainer;
