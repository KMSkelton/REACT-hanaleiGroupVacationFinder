import React from 'react';
import DataProvider from './DataProvider'
import Table from './Table'

const Locations = () => (
  <DataProvider 
    endpoint="api/location/"
    render={data => <Table data={data} />}
  />
)

export default Locations