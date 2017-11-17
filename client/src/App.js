import React, {Component} from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'
import {saveAuthTokens, setAxiosDefaults, parentIsLoggedIn, clearAuthTokens} from "./util/SessionHeaderUtil";
import KidsList from "./components/KidsList";
import Recommended from './static/Recommended'
import KidProfile from './components/KidProfile'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import SignInError from './components/SignInError'
import Splash from './static/Splash'
import About from './static/About'
import NavBar from './components/NavBar'

class App extends Component {
  
      state = {
          signedIn: false,
          kids: [],
          signInError: false,
          signUpError: false
      }
  
      async componentWillMount() {
        try {
            const signedIn = parentIsLoggedIn()
    
            let kids = []
            if (signedIn) {
                setAxiosDefaults()
                kids = await this.getKids()
            }
            this.setState({
                kids,
                signedIn,
            })
            
        } catch(error) {
            console.log(error)
        }
      }
  
      getKids = async () => {
          try {
              const response = await axios.get('/kids')
              this.setState({kids: response.data})
              return response.data
          } catch (error) {
              console.log(error)
              return []
          }
      }
      
      signUp = async (email, password, password_confirmation) => {
        try {
            const payload = {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
            const response = await axios.post('/auth', payload)
            saveAuthTokens(response.headers)
    
            this.setState({
                signedIn: true,
            })
    
        } catch (error) {
            console.log(error)
            this.setState({signUpError: true})
        }
     }
  
     signIn = async (email, password) => {
      try {
          const payload = {
              email,
              password
          }
          const response = await axios.post('/auth/sign_in', payload)
          saveAuthTokens(response.headers)
          
  
          const kids = await this.getKids()
  
          this.setState({
              signedIn: true,
              kids
          })
  
      } catch (error) {
          console.log(error)
          this.setState({signInError: true})
          console.log(this.state.error)
      }
      }
      
      signOut = async(event) => {
        try {
          event.preventDefault()
          await axios.delete('/auth/sign_out')
          clearAuthTokens()
          this.setState({signedIn: false})
        } catch(error) {
          console.log(error)
        }
      }

      render() {
  
          const SignUpLogInComponent = () => (
              <SignUpLogIn
                  signUp={this.signUp}
                  signIn={this.signIn}
                  amISignedIn={this.state.signedIn}
                  signInError={this.state.signInError}
                  signUpError={this.state.signUpError}/>
          )
  
          const KidsComponent = () => (
              <KidsList
                  kids={this.state.kids}
                  signOut={this.signOut}
                  amISignedIn={this.state.signedIn}
                  getKids={this.getKids}/>

          )

          return (
              <MuiThemeProvider>
                <Router>
                    
                    <div>
                        <NavBar amISignedIn={this.state.signedIn} signOut={this.signOut}/>
                        <Switch>
                            <Route exact path='/' component={Splash}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/recommended' component={Recommended}/>
                            <Route exact path="/signUp" render={SignUpLogInComponent}/>
                            <Route exact path='/kids/:id' render={routeProps => 
                                                                    <KidProfile 
                                                                    {...routeProps} 
                                                                    amISignedIn={this.state.signedIn}/>}/>
 
                            <Route exact path="/kids" render={KidsComponent}/>
                            
                        </Switch>
    
                        {/* If user is signed in, redirect to their kids. */}
                        
                    </div>
                </Router>
              </MuiThemeProvider>
          )
      }
  }
  
  export default App