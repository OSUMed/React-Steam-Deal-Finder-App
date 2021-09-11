import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/favorites">
            Favorites
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/cart">
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
