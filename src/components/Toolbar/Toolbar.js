import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">ELECTRIC METER READING SOFTWARE</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            
        </div>
    </nav>
  </header>
);

export default toolbar;
