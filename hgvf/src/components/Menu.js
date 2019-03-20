import React, { Component } from 'react';
import { Link } from 'react-router-dom';  // Link tells BrowserRouter to change the URL

const Menu = () => (
  <nav >
    <ul className="nav__menu">
      <li className="nav__menu-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav__menu-item">
        <Link 
          to="/" 
          className="nav__menu-about">About</Link>
        <Submenu />
      </li>
      <Link className="nav__menu-item" to="/contact">Contact</Link>
    </ul>
  </nav>
)

class Submenu extends Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <Link to="/project">This Project</Link>
        </li>
        <li className="nav__submenu-item ">
          <Link to="/hanalei">Why Hanalei</Link>
        </li>
      </ul>
    )
  }
}

export { Menu, Submenu }