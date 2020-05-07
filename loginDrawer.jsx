import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import history from './History'; 



const styles = {
  navBar: {'top': AppBar.height}
}

export class LoginDrawer extends React.Component {
/* ALANDALE - UPDATED SIGNUPDRAWER AND LOGINDRAWER BACKGROUND AND ADDED ROUTES TO CONTACT AND ABOUT PAGES */
  constructor() {
    super();
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar style = {{background: "Dodgerblue"}}
            zDepth={10}
            title="User Log-in"
            onClick={this.handleToggle} className="material-icons"
            />
          <Drawer
            open={this.state.open}
            width={200}
            containerStyle={styles.navBar}>
            <MenuItem onClick={() => history.push('/')}>Home Page</MenuItem>
            <MenuItem onClick={() => history.push('/signup')}>Sign-up</MenuItem>
            <MenuItem onClick={() => history.push('/contact')}>Contact</MenuItem>
			      <MenuItem onClick={() => history.push('/about')}>About</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }

} 

export default LoginDrawer;