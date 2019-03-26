import React from 'react';
import PropTypes from 'prop-types';

const propertyCols = 
[
  'accessibility',
  'price_per_week',
  'max_guests',
  'num_bathrooms',
  'air_conditioning',
  'wifi'
]

const updateProps = (props, el) => {
  return props.update({lat: el.latitude, lng: el.longitude, addr: el.street_number})
}

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
            <td><button onClick={() => updateProps(props, el)}>{el['street_number']}</button></td>
                {propertyCols.map((arrEl, index)=><td key={index}>{el[arrEl].toString()}</td>)}
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
// I really tried to find a way around using the index as a key anti-pattern, but with three boolean values I'm bound to 
// have at least one key conflict. 

  Table.propTypes = {
    data: PropTypes.array.isRequired,
    update: PropTypes.func
  };

  export default Table