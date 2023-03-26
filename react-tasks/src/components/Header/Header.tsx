import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-header__nav">
          <NavLink className="nav__nav-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="nav__nav-link" to="/form" end>
            New card
          </NavLink>
          <NavLink className="nav__nav-link white" to="/about">
            About Us
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
