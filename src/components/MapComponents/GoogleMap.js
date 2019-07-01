/*global google*/
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
  } from "react-google-maps";
  import React, {Component} from "react";
  import Handball from "../../Handball.json";
  import Autocomplete from "react-google-autocomplete";

 class GoogleMaps extends Component{
   componentDidMount() {
     const DirectionsService = new google.maps.DirectionsService();
     DirectionsService.route({
     // Origin will be marker Clicked
     origin: this.props.startAddress,
     // Destination will be address typed in search bar
     destination: this.props.position,
     travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        // deals with invalid addresses
        this.props.updateDirections(result);
      }else {
        console.error(`error fetching directions ${result}`);
      }
       });
    }
    render(){
        console.log(`${process.env.REACT_APP_API_KEY}`);

        const {position, updatePosition,updateAddress,directions} = this.props;
        return(
        <div>
          <Autocomplete id ='searchBar'
            style ={{
              width: '90%',
              height: '40px',
              textalign: 'center',
            }}
           
            onPlaceSelected = {(place)=>{
              updateAddress(place.geometry.location.lat(), place.geometry.location.lng());
              this.componentDidMount();
            }}
            types={[]}
            componentRestrictions={{country: "us"}}
          />

        <GoogleMap defaultZoom={15} defaultCenter={{ lat: 40.7362, lng: -73.8161 }} center= {{lat: position.lat || 40.7362, lng: position.lng || -73.8161  }}>
        {Handball.map((hb,i)=>{
          let x = Number(hb.lat);
          let y = Number(hb.lon);
          if(hb.lat != null && hb.lon != null){
           return(<Marker onClick = {()=>{
             updatePosition(x,y);
             this.componentDidMount();
            }} key = {i} position= {{lat: x, lng: y}}/>)
          }
        })}
        {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
        </div>
        )} 
 }
  export default GoogleMaps;
  