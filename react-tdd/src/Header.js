import React from 'react';
// import './App.scss';
import {
  Link
} from "react-router-dom";
import NavLink from "./NavLink"
import ContactLinks from "./ContactLinks"
import "./Header.scss"

function Header() {
  const navLinks = ContactLinks;
  const listItems = navLinks.map((navLinks) =>
    <NavLink name={navLinks} />
  );
  return (
    <nav className="Nav">
      <ul>
        {listItems}
      </ul>
    </nav>
  );
}

export default Header;
