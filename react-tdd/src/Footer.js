import React from 'react';
import './Footer.scss'

import NavLink from "./NavLink"
import ContactLinks from "./ContactLinks"
import NavigationLinks from "./NavLinks"

function Footer() {
  const navLinks = NavigationLinks;
  const listItems = navLinks.map((navLinks) =>
    <NavLink name={navLinks} key={navLinks.displayName} />
  );
  const contactLinks = ContactLinks;
  const contactItems = contactLinks.map((contactLinks) =>
    <NavLink name={contactLinks} key={contactLinks.displayName} />
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
