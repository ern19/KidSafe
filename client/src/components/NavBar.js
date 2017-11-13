import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends Component {

    static muiName = 'FlatButton'
    
    render() {
        
        return (
            <FlatButton {...this.props} label="Login"/>
        )
    }
}

const Logged = (props) => (
    
    <IconMenu
        
        {...props}
        
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Parent Profile" />
        <MenuItem primaryText="Log Out" onClick={props.signOut} />
    </IconMenu>
)

Logged.muiName = 'IconMenu'

class NavBar extends Component {
    
    render() {
        return(
            <div>
                <AppBar
                    style={{backgroundColor: '#bb0000'}}
                    title="KidSafe"
                    iconElementRight={this.props.amISignedIn ? <Logged signOut={this.props.signOut}/> : <Login />}
                />
            </div>
        )
    }
}

export default NavBar;