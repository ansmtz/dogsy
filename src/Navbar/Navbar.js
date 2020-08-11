import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { translit } from "gost-transliteration";

import logo from "./media/logo.svg";
import menu from "./media/menu.svg";
import close from "./media/close.svg";
const Navbar = (props) => {
  const [state, toogleMenu] = useState({
    isOpened: false,
  });
  const menuHandler = () => {
    toogleMenu({
      isOpened: !state.isOpened,
    });
  };
  const navLinks = props.dogs.map((dogObj) => {
    const query = translit(dogObj.name);
    return (
      <li key={dogObj.id}>
        <NavLink
          activeClassName="Navbar-link--active"
          className="Navbar-link"
          exact
          to={`/dogs/${query}`}
        >
          {dogObj.name}
        </NavLink>
      </li>
    );
  });
  return (
    <nav className="Navbar">
      <Link exact to="/dogs">
        <div className="Navbar-logo">
          <img src={logo} alt="Logo-paw" />
        </div>
      </Link>
      <button
        onClick={menuHandler}
        className="Navbar-btn"
        aria-controls="navbar"
      >
        {!state.isOpened ? (
          <img src={menu} alt="Menu-icon" />
        ) : (
          <img src={close} alt="Menu-icon" />
        )}
      </button>
      <ul
        className={
          state.isOpened ? "Navbar-links" : "Navbar-links Navbar-links--closed"
        }
      >
        {navLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
