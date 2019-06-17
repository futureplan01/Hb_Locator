import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";
  import React, { Component } from "react";
  import Handball from "../Handball.json";
  import Autocomplete from "react-google-autocomplete";
  


const MapWithHBCourts = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap defaultZoom={16} defaultCenter={{ lat: 40.7362, lng: -73.8161 }} 
      onCenterChange = {getC}
      >
      {Handball.map((hb,i)=>{
        let x = Number(hb.lat);
        let y = Number(hb.lon);
        if(hb.lat != null && hb.lon != null){
          console.log(x); // Number 
          console.log(y); // Number 
         return(<Marker key = {i} position= {{lat: x, lng: y}}/>)
        }
      })}
      <Autocomplete
        style ={{
          width: '100%',
          height: '40px',
          textalign: 'center',
        }}

        onPlaceSelected = {(place)=>{
          console.log(place);
        }}
        types = {['address']}
        componentRestrictions={{country: "us"}}

      />
      </GoogleMap>
    ))
);

class Map extends Component {
    constructor (props){
        super();
    }
    render() {
      return (
        <MapWithHBCourts
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5c-P1VVmT9SgvX65j4n9pv58PgV4KV7A&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `1000px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      );
    }
  }
  
  export default Map;
  