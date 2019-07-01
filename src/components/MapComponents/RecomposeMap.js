import React from "react";
import GoogleMap from './GoogleMap';
const dotenv = require('dotenv');

const { compose,withStateHandlers, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
} = require("react-google-maps");

/* global google */

export default compose(
  withStateHandlers(
    ({}) => ({
        position: { lat: 40.7358, lng: -73.8144 },
        startAddress: {lat: 40.7362, lng: -73.8161},
        directions : null, 
      }),{
        updatePosition: ({position}) => (newLat,newLng)=> ({
            position: {lat: newLat, lng: newLng},
        }),
        updateAddress: ({startAddress}) => (newLat,newLng)=> ({
          startAddress: {lat: newLat, lng: newLng},
        }),
        updateDirections: ({directions}) => (newDirections)=> ({
          directions: newDirections,
        }),
      }
  ),
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyD5c-P1VVmT9SgvX65j4n9pv58PgV4KV7A&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%`,  margin: '5%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(GoogleMap)