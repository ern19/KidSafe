import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
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
            <div>
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <TextField onChange={this.handleChange} type="text" name="email" value={this.state.email}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <TextField onChange={this.handleChange} type="password" name="password" value={this.state.password}/>
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">Confirm Password: </label>
                        <TextField onChange={this.handleChange} type="password" name="password_confirmation"
                               value={this.state.password_confirmation}/>
                    </div>

                    <button onClick={this.signUp}>Sign Up</button>
                    <button onClick={this.signIn}>Log In</button>
                </form>
                {this.props.amISignedIn ? <Redirect to="/kids"/> : <Redirect to="/signUp"/>}
                {this.props.error ? <div style={{color:'red'}}>We don't recognize that username or password</div> : null}
            </div>
        )
    }
}

export default SignUpLogIn;