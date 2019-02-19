import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  height: '80rem',
  width: '80rem',
};
const containerStyle={
  left: '50%',
  top: '20rem'
}
export class MapContainer extends Component {
  render() {
    return(
      <Map 
        style={mapStyles}
        containerStyle={containerStyle}
        google={this.props.google}
        zoom={13}
        initialCenter={{
          lat: 22.205079,
          lng: -159.500566
        }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(MapContainer)