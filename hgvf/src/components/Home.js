import React from 'react';
import MapContainer from './GoogleMap'
import Locations from './Locations'

// this is the first content users will see. "Home" and "GoogleMaps" are loaded into the 
// content container on startup
const Home = (props) => (
    <div className="home">
      <div className="container">
        <Locations />
        <MapContainer />
      </div>
    </div>
  )

export default Home