import React from 'react';
import "./NavLink.scss"

function NavLink(props) {
  return (
    <li className="NavLink">
      <a href={props.name.url} target={props.name.target}>{props.name.displayName}</a>
    </li>
  );
}

export default NavLink;
