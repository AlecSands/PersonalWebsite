import React from 'react';
import './Footer.scss'

import NavLink from "./NavLink"
import ContactLinks from "./ContactLinks"
import NavigationLinks from "./NavLinks"

function Footer() {
  const navLinks = NavigationLinks;
  const listItems = navLinks.map((navLinks) =>
    <NavLink name={navLinks} />
  );
  const contactLinks = ContactLinks;
  const contactItems = contactLinks.map((contactLinks) =>
    <NavLink name={contactLinks} />
  );

  return (
    <div className="Footer section">
      <div className="container">
        <div className="content">
          <ul className="">
            {contactItems}
          </ul>
          <ul className="">
            {listItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
