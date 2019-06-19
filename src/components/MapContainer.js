import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import React, { Component } from "react";
import Handball from "../Handball.json";
import Autocomplete from "react-google-autocomplete";

/**
 * MAKE SURE I UNDERSTAND NPM --SAVE VS __DEV VS WHATEVER
 */



class MapContainer extends Component {

  constructor (props){
    super(props);
    this.state={lat:'',lng:''};
  }

  render() {

    const MapWithHBCourts = withScriptjs(
      withGoogleMap(props => (
        
        <GoogleMap defaultZoom={16} defaultCenter={{ lat: 40.7362, lng: -73.8161 }} center= {{lat: this.state.lat || 40.7362, lng: this.state.lng || -73.8161  }}>
          <Autocomplete
            style ={{
              width: '60%',
              height: '40px',
              margin: '20%',
              textalign: 'center',
            }}
           
            onPlaceSelected = {(place)=>{
              console.log(place);
              this.setState({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()});
            }}
            
            types={[]}
    
            componentRestrictions={{country: "us"}}
          />
        {Handball.map((hb,i)=>{
          let x = Number(hb.lat);
          let y = Number(hb.lon);
          if(hb.lat != null && hb.lon != null){
           return(<Marker onClick = {()=>console.log(`lat: ${hb.lat}, lng: ${hb.lon}`)} key = {i} position= {{lat: x, lng: y}}/>)
          }
        })}
        
        </GoogleMap>
      ))
    );
    return (
      <div>
        <MapWithHBCourts
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5c-P1VVmT9SgvX65j4n9pv58PgV4KV7A&libraries=geometry,drawing,places"
          loadingElement={<div style={{
             height: `100%`,
         }} />}
          containerElement={<div style={{ height: `1000px` }} />}
          mapElement={<div style={{ height: `100%`, margin: '10%' }} />}
        />
      </div>
    );
  }
}

export default MapContainer;
