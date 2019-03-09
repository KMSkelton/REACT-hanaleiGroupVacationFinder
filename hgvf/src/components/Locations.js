import React, { Component } from 'react';
import DataProvider from './DataProvider'
import Table from './Table'

class Locations extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.props.update.bind(this)
  }
  updateState(child) {
    this.setState({
      GPS: {
        lat: child.latitude, 
        lng: child.longitude
      }, 
      addr: child.street_number
    })
  }
  render() {
    return ( 
      <DataProvider 
        endpoint="api/location/"
        render={data => <Table data={data} update={this.updateState}/>}
      />
    )
  }
}


export default Locations