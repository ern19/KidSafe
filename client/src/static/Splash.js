import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
class Splash extends Component {
    render() {
        return (
        <div style={{textAlign: 'center'}}>
            <div>
                <p>This is a splash page</p>
            </div>
            <div >
                <RaisedButton
                    containerElement={<Link to={'/signUp'}/>}
                    label="LOG IN"
                    backgroundColor= '#bb0000'
                    labelColor='#fff'
                    style={{margin: '5px'}}>
                </RaisedButton>
                <RaisedButton
                    containerElement={<Link to={'/about'}/>}
                    label="ABOUT US"
                    backgroundColor= '#bb0000'  
                    labelColor='#fff'
                    style={{margin: '5px'}}>
                </RaisedButton>
            </div>
            
        </div>
        );
    }
}

export default Splash;