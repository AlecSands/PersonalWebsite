import React from 'react';
// import './App.scss';
import {
  Link
} from "react-router-dom";

function NavLink(props) {
  return (
    <li>
      <a href={props.name.url}>{props.name.displayName}</a>
    </li>
  );
}

export default NavLink;
