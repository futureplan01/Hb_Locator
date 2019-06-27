/*global google*/
import {
    GoogleMap,
    Marker,
  } from "react-google-maps";
  import React, {Component} from "react";
  import Handball from "../../Handball.json";
  import Autocomplete from "react-google-autocomplete";

 class GoogleMaps extends Component{
    render(){
        console.log(this.props);
        const {position, updatePosition} = this.props;
        return(
        <GoogleMap defaultZoom={16} defaultCenter={{ lat: 40.7362, lng: -73.8161 }} center= {{lat: position.lat || 40.7362, lng: position.lng || -73.8161  }}>
          <Autocomplete
            style ={{
              width: '60%',
              height: '40px',
              margin: '20%',
              textalign: 'center',
            }}
           
            onPlaceSelected = {(place)=>{
              console.log(place);
              updatePosition(place.geometry.location.lat(), place.geometry.location.lng());
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
        )} 
 }
  export default GoogleMaps;
  