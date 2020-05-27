import React from 'react';
// import './App.scss';
import {
  Link
} from "react-router-dom";
import "./NavLink.scss"

function NavLink(props) {
  return (
    <li className="NavLink">
      <a href={props.name.url}>{props.name.displayName}</a>
    </li>
  );
}

export default NavLink;
