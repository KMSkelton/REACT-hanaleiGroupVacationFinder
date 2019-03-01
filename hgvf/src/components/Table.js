import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ data }) => 
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className='column'>
      <h2 className='subtitle'>
        Showing <strong>{data.length} items</strong>
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
          {data.map(el => (
            <tr key={el.id}>
              <td>{el.street_number}</td>
              <td>{String( el.accessibility ) }</td>
              <td>{el.price_per_week}</td>
              <td>{el.max_guests}</td>
              <td>{el.num_bathrooms}</td>
              <td>{String( el.air_conditioning )}</td>
              <td>{String( el.wifi )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  Table.propTypes = {
    data: PropTypes.array.isRequired
  };

  export default Table