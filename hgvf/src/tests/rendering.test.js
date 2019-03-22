import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Project from '../components/Project';
import Contact from '../components/Contact';
import DataProvider from '../components/DataProvider';
import Table from '../components/Table';


const tableProps = {
  data: [
    { 
      id: 1,
      street_number: '1234567',
      accessibility: true,
      price_per_week: 99999,
      max_guests: 1,
      num_bathrooms: 7,
      air_conditioning: false,
      wifi: true,
    }
  ]
}

it('renders Table without crashing', () => {
  const wrapper = shallow(<Table {...tableProps} />)
  console.log('wrapper :', tableProps.data[0].street_number);

  expect(wrapper.contains(
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
      )).toEqual(true);
  expect(wrapper.contains(<td>99999</td>)).toEqual(true);
});


it('renders APP without crashing', () => {
  shallow(<App />)
});

it('renders Project without crashing', () => {
  shallow(<Project />)
});

it('renders Contact without crashing', () => {
  shallow(<Contact />)
});

describe("Data Provider", () => {
  test('renders', () => {
    const wrapper = mount(<DataProvider endpoint="api/location/"
    render={data => <Table data={data} update={this.updateState}/>} />)

    expect(wrapper.exists()).toBe(true);
  })
})
