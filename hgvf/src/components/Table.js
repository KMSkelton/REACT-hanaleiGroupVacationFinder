import React from 'react';
import PropTypes from 'prop-types';
import key from 'weak-key'


const Table = (props) => 
  !props.data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className='column'>
      <h2 className='subtitle'>
        Showing <strong>{props.data.length} items</strong>
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
        {props.data.map(el => (
          <tr>
            <td><button onClick={() => props.update({lat: el.latitude, lng: el.longitude, addr: el.street_number})}>{el['street_number']}</button></td>
                {[
                'accessibility',
                'price_per_week',
                'max_guests',
                'num_bathrooms',
                'air_conditioning',
                'wifi'].map(arrEl=> <td key={key(el)}>{el[arrEl].toString()}</td>)}
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