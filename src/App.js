import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './drawer.css'
import {Button} from 'react-bootstrap'
class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <div >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
           
           <div className="middle">
             
           <label>
            <input type="text" name="name" placeholder="Enter Number of Units" className="text-area"/>
           </label>
           </div>
          <div className="Getbill">
          <Button as="input" type="button" value="Get Bill" className="btn1"/>
          </div>
           <div className="ChangeMeter">
          <Button variant="Secondry" className="btn2">Change Meter</Button>
           </div>
         </div>
      </div>
        
      
    );
  }
}

export default App;
