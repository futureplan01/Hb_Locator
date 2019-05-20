import React from "react";
import Script from "react-load-script";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      query: ""
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }
  handleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ["(cities)"]
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address
      });
    }
  }

  
  render() {
    return (
      <div>
        <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5c-P1VVmT9SgvX65j4n9pv58PgV4KV7A&libraries=places" 
        onLoad = {this.handleScriptLoad}
        />
        <input
          ref={this.autocompleteInput}
          id="autocomplete"
          placeholder="Enter your address"
          type="text"
        />
      </div>
    );
  }
}
export default SearchBar;
