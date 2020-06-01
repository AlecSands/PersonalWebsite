import React from 'react';
// import './App.scss';
import {
  Link
} from "react-router-dom";
import NavLink from "./NavLink"
import ContactLinks from "./ContactLinks"
import NavigationLinks from "./NavLinks"
import "./Header.scss"

function Header() {
  const navLinks = NavigationLinks;
  const listItems = navLinks.map((navLinks) =>
    <NavLink name={navLinks} />
  );
  const contactLinks = ContactLinks;
  const contactItems = contactLinks.map((contactLinks) =>
    <NavLink name={contactLinks} />
  );

  const menuButton = <li className="NavLink NavMenu">
    <a><i class="material-icons-round">menu</i></a>
  </li>;

  return (
    <nav className="Nav section">
      <div className="container">
        <div className="content">
          <ul className="NavLeft">
            {contactItems}
          </ul>
          <ul className="NavRight">
            {listItems}
            {menuButton}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
