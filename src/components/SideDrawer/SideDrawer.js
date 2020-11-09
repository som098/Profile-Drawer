import React from 'react';
import {Button} from 'react-bootstrap'

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
    <div className="profile"> Profile </div>
      <ul>
        <li>
          <p>Name: (From Backend) </p>
        </li>
        <li>
          <p>Grade: (From Backend) </p>
        </li>
        <li>
          <p>Quarter: (From Backend) </p>
        </li>
        <li>
        <button class="button button1">Sign Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
