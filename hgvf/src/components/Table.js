import React from 'react';
import PropTypes from 'prop-types';

const propertyCols = 
[
  'accessibility',
  'price_per_week',
  'max_guests',
  'num_bathrooms',
  'air_conditioning',
  'wifi']

const Table = (props) => 
  !props.data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className='column'>
      <h2 className='subtitle'>
        Showing {props.data.length} items
      </h2>
      <table className='table is-stripped'>
        <thead>
          <tr>
            <th>Address</th>
            <th>Accessible</th>
            <th>Weekly</th>
            <th>Guests</th>
            <th>Bathrooms</th>
            <th>AC</th>
            <th>WiFi</th>
          </tr>
        </thead>
        <tbody>
        {props.data.map((el) => (
          <tr key={el.id}>
            <td><button onClick={() => props.update({lat: el.latitude, lng: el.longitude, addr: el.street_number})}>{el['street_number']}</button></td>
                {propertyCols.map(arrEl=><td key={el[arrEl]}>{el[arrEl].toString()}</td>)}
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  Table.propTypes = {
    data: PropTypes.array.isRequired,
    update: PropTypes.func
  };

  export default Table