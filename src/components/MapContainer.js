import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import React, { Component } from "react";

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: 40.7362, lng: -73.8161 }}>
      <Marker position={{ lat: 40.7362, lng: -73.8161 }} />
    </GoogleMap>
  ))
);

class MapContainer extends Component {
  render() {
    return (
      <div>
        <MapWithAMarker
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
