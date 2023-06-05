import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css'
const NavBar = () => {
  return (
    <div className="container">
    <div className="header-bar">
      <h1 className="logo" ><a href="/">E</a></h1>
      <ul className="slider-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tienda">Tienda</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
      </ul>
    </div>
  </div>
  );
};

export default NavBar;
