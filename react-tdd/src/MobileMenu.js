import React from 'react';
import NavLink from "./NavLink";
import ContactLinks from "./ContactLinks";
import './MobileMenu.scss';

function MobileMenu (props) {
  const contactLinks = ContactLinks;
  const contactItems = contactLinks.map((contactLinks) =>
    <NavLink name={contactLinks} key={contactLinks.displayName} />
  );

  if (props.menuHidden) {
    return (
      <div className="mobileMenu">
        <ul className="links">
          {contactItems}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="mobileMenu hidden">
        <ul className="links">
          {contactItems}
        </ul>
      </div>
    )
  }


}

export default MobileMenu;
