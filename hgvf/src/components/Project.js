import React from 'react';

const Project = () => (
    <div className="submenu__container">
      <h1 className="submenu__header">About this project</h1>
      <p className="submenu__text">
        Hanalei Group Vacation Finder was bootstrapped with Create React App. 
        It uses React Router to dynamically load the content of each menu item.
        State is managed by passing props - adding Redux or MobX felt excessive.
        <br></br><br></br>
        The data for each vacation rental is stored in a PostgreSQL database hosted on
        Heroku. The data store has a Django REST Framework front end with user 
        authentication and authorization.
        <br></br><br></br>
        This project was inspired by a vacation I helped plan. Each of us had different needs
        and wants for the places we chose to stay. Being able to see each location's 
        attributes with a map would have made some conversations go more smoothly.
      </p>
    </div>
  )

export default Project