import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'
import {saveAuthTokens, setAxiosDefaults, parentIsLoggedIn, clearAuthTokens} from "./util/SessionHeaderUtil";
import KidsList from "./components/KidsList";
import KidProfile from './components/KidProfile'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Splash from './static/Splash'
import About from './static/About'
class App extends Component {
  
      state = {
          signedIn: false,
          kids: []
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
                  amISignedIn={this.state.signedIn}/>
          )
  
          const KidsComponent = () => (
              <KidsList
                  kids={this.state.kids}
                  signOut={this.signOut}/>
          )

          return (
              <MuiThemeProvider>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Splash}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path="/signUp" render={SignUpLogInComponent}/>
                            <Route exact path='/kids/:id' component={KidProfile}/>
                            <Route exact path="/kids" render={KidsComponent}/>
                            
                        </Switch>
    
                        {/* If user is signed in, redirect to their kids. */}
                        {this.state.signedIn ? <Redirect to="/kids"/> : <Redirect to="/"/>}
                    </div>
                </Router>
              </MuiThemeProvider>
          )
      }
  }
  
  export default App