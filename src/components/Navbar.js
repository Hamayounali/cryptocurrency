import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './cLogo.png';

function Navbar() {
  return (
    <div className="row">

      <nav className="navbar navbar-expand-sm menu navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="fireSpot" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="test nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cryptocurrencies">Cryptocurrencies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/exchanges">Exchanges</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news">News</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}
export default Navbar;
