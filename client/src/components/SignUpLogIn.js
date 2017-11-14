import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
const styles = {
    underlineStyle: {
        borderColor: '#bb0000'
    }
}

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
    }

    handleChange = (event) => {
        const newState = {...this.state}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        return (
            <div style={{margin: '5px',
                         textAlign: 'center'}}>
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <TextField onChange={this.handleChange} 
                                   type="text" 
                                   name="email" 
                                   value={this.state.email}
                                   underlineFocusStyle={styles.underlineStyle}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <TextField onChange={this.handleChange} 
                                   type="password" 
                                   name="password" 
                                   value={this.state.password}
                                   underlineFocusStyle={styles.underlineStyle}/>
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">Confirm Password: </label>
                        <TextField onChange={this.handleChange} 
                                   type="password" 
                                   name="password_confirmation"
                                   value={this.state.password_confirmation}
                                   underlineFocusStyle={styles.underlineStyle}/>
                    </div>

                    <RaisedButton onClick={this.signIn} label='LOGIN' backgroundColor='#bb0000' labelColor='#fff' style={{margin: '3px'}}/>
                    <RaisedButton onClick={this.signUp} label='SIGN-UP' backgroundColor='#bb0000' labelColor='#fff' style={{margin: '3px'}}/>
                </form>
                {this.props.amISignedIn ? <Redirect to="/kids"/> : <Redirect to="/signUp"/>}
                {this.props.error ? <div style={{color:'red'}}>We don't recognize that username or password</div> : null}
            </div>
        )
    }
}

export default SignUpLogIn;