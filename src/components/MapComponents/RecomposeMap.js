import React from "react";
import GoogleMap from './GoogleMap';
const { compose,withStateHandlers, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
} = require("react-google-maps");

/* global google */

export default compose(
  withStateHandlers(
    ({}) => ({
        position: { lat: 40.7362, lng: -73.8161 },
      }),{
        updatePosition: ({position}) => (newLat,newLng)=> ({
            position: {lat: newLat, lng: newLng},
        })
      }
  ),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD5c-P1VVmT9SgvX65j4n9pv58PgV4KV7A&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%`,  margin: '5%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(41.8507300, -87.6512600),
        destination: new google.maps.LatLng(41.8525800, -87.6514100),
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
)(GoogleMap)