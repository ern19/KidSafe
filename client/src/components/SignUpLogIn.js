import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
class SignUpLogIn extends Component {

    state = {
        login: {
            email: '',
            password: '',
        },
        newAccount: {
            email: '',
            password: '',
            password_confirmation: ''
        }
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.newAccount.email,
            this.state.newAccount.password,
            this.state.newAccount.password_confirmation
        )
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.login.email,
            this.state.login.password
        )
    }

    handleLoginChange = (event) => {
        const newState = {...this.state.login}
        newState[event.target.name] = event.target.value
        this.setState(newState)
        
    }

    handleNewAccountChange = (event) => {
        const newState = {...this.state.newAccount}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        return (
            <div style={{display: 'flex',
                         justifyContent: 'space-between'}}>
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <TextField onChange={this.handleChange} type="text" name="email" value={this.state.login.email}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <TextField onChange={this.handleChange} type="password" name="password" value={this.state.login.password}/>
                    </div>
                    <button onClick={this.signIn}>Log In</button>
                    
                </form>
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <TextField onChange={this.handleChange} type="text" name="email" value={this.state.newAccount.email}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <TextField onChange={this.handleChange} type="password" name="password" value={this.state.newAccount.password}/>
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">Confirm Password: </label>
                        <TextField onChange={this.handleChange} type="password" name="password_confirmation"
                               value={this.state.newAccount.password_confirmation}/>
                    </div>
                    <button onClick={this.signUp}>Sign Up</button>
                </form>
                {this.props.amISignedIn ? <Redirect to="/kids"/> : <Redirect to="/signUp"/>}
                {this.props.error ? <div style={{color:'red'}}>We don't recognize that username or password</div> : null}
            </div>
        )
    }
}

export default SignUpLogIn;