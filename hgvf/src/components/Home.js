import React, { Component } from 'react';
import MapContainer from './GoogleMap'
import Locations from './Locations'

// this is the first content users will see. "Home" and "GoogleMaps" are loaded into the 
// content container on startup
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      GPS: {
        lat: 22.205079,
        lng: -159.500566 
      },
      addr: "Hanalei Beach"
    }
    this.updateState = this.updateState.bind(this)
  }
    updateState(child) {
      this.setState({
        GPS: {
          lat: child.lat, 
          lng: child.lng
        }, 
        addr: child.addr
      })
    }
    render(){
    return(
      <div className="home">
        <Locations update={this.updateState} />
        <MapContainer
          GPS={this.state.GPS}
          addr={this.state.addr} />
      </div>
    )
  }
}

export default Home