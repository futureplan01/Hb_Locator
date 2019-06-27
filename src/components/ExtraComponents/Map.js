/* global google */
import React from "react";
import Handball from "../../Handball.json";
import Autocomplete from "react-google-autocomplete";
const { compose, withState,withHandlers, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} = require("react-google-maps");

const MapWithADirectionsRenderer =  compose(
  withState('position','setPosition',{ lat: 40.7362, lng: -73.8161 }),
  withHandlers({
    changePosition: ({setPosition}) => (newLat,newLng) => setPosition((position)=>{
      position.lat = newLat;
      position.lng = newLng;
      return position;
    })
  }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD5c-P1VVmT9SgvX65j4n9pv58PgV4KV7A&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(40.7362, -73.8161),
        destination: new google.maps.LatLng(40.7354, -73.7767),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >
 <Autocomplete
     style ={{
     width: '60%',
     height: '40px',
     margin: '20%',
     textalign: 'center',
    }}

    onPlaceSelected = {(place)=>{
      console.log("Error Occurs when trying to go to new Location")
      console.log(place);
      this.setState({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()});
    }}
    types={[]}
    componentRestrictions={{country: "us"}}
   />  
    {props.directions && <DirectionsRenderer directions={props.directions} />}
    {Handball.map((hb,i)=>{
    let x = Number(hb.lat);
    let y = Number(hb.lon);
    if(hb.lat != null && hb.lon != null){
        return(<Marker onClick = {()=>console.log(`lat: ${hb.lat}, lng: ${hb.lon}`)} key = {i} position= {{lat: x, lng: y}}/>)
    }
    })}  
  </GoogleMap>
);



function Map (){
    return <MapWithADirectionsRenderer/>
}

export default Map;


