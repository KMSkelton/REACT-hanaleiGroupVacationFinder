import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  height: '80rem',
  width: '80rem',
};
const containerStyle={
  left: '43%',
  top: '20rem'

}

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      GPS: this.props.GPS,
      addr: this.props.street_number,
    }
  }

  onMarkerClick = (props, marker, e) => 
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

  onclose = props => {
    if (this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return(
      <Map 
        style={mapStyles}
        containerStyle={containerStyle}
        google={this.props.google}
        zoom={13}
        initialCenter={
          this.state.GPS
        }
      >
        <Marker
          position={this.props.GPS}
          onClick={this.onMarkerClick}
          name={this.props.addr}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(MapContainer)