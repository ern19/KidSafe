import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Splash extends Component {
    render() {
        return (
        <div>
            <div>
                <p>This is a splash page</p>
            </div>

            <Link to={'/signUp'}>Login</Link>
            <Link to={'/about'}>What We Do</Link>
                
        </div>
        );
    }
}

export default Splash;