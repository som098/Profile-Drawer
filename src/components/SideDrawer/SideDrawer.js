import React from 'react';
import {Button} from 'react-bootstrap';
import profilepic from './swap.jpg';

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
        <img src={profilepic} alt="Profile Picture"></img>

        </li>
        <li>
          <p>Name: Swapnil Narayan </p>
        </li>
        <li>
          <p>Grade: II </p>
        </li>
        <li>
          <p>Quarter: B-39 </p>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
