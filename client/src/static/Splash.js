import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
class Splash extends Component {
    render() {
        return (
        <div style={{textAlign: 'center'}}>
            <div>
                <h3>Just because there's a lot of this out there...</h3>
            </div>

            <div>
                <img style={{maxWidth: '62.5%'}}src='https://i.imgur.com/ZAwjVdB.png'/>
            </div>

            <div>
                <div>
                    <h3>...doesn't mean that there aren't valuable learning opportunties on Youtube.</h3>
                </div>
            
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