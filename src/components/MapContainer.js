import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import {InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
    width: '800px',
    height: '800px'
};

class MapContainer extends React.Component{

    state ={
        showingInfoWindow: false, //hides/shows info window
        activeMarker:{}, //shows active marker on click
        selectedPlace: {} //shows info window to the selected place upon a marker
    };

    onMarkerClick = (props, marker,e) => 
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

        onClose = props =>{
            if(this.state.showingInfoWindow){
                this.setState({
                    showingInfoWindow: false,
                    activeMarker: null
                });
            }
        };

    render(){

        return( 
            <Map
                google = {this.props.google}
                zoom={14} //focus on center 
                style={mapStyles} //size of map
                
                initialCenter={{
                    lat: 40.693439550950245,
                    lng: -73.59769568778339
                }}
                >
                <Marker
                    onClick = {this.onMarkerClick}
                    name={'Current Location'}
                    />

                <InfoWindow
                    marker = {this.state.activeMarker}
                    visible = {this.state.showingInfoWindow}
                    onClose = {this.onClose}
                >
                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                </div>
                </InfoWindow>
                </Map>
                
        );
    }
}

//Exporting using Google Api Wrapper
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD5c-P1VVmT9SgvX65j4n9pv58PgV4KV7A'
})(MapContainer);
