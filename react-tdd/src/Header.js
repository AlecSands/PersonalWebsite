import React from 'react';
// import './App.scss';
import {
  Link
} from "react-router-dom";
import NavLink from "./NavLink"
import ContactLinks from "./ContactLinks"

function Header() {
  const navLinks = ContactLinks;
  const listItems = navLinks.map((navLinks) =>
    <NavLink name={navLinks} />
  );
  return (
    <nav>
      <ol>
        {listItems}
      </ol>
    </nav>
  );
}

export default Header;
