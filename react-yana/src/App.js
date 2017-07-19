// import Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import decodeJWT from 'jwt-decode';
// Components
import NavMenu from './components/NavMenu';

// Pages
import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import SingleCoursePage from './pages/SingleCoursePage';
import LanguagesPage from './pages/LanguagesPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import * as authAPI from './api/auth';

const tokenKey = 'userToken'
// Read the last token from the local storage database
const savedToken = localStorage.getItem(tokenKey)
// Set the token on the API headers
// setAPIToken(savedToken)

class App extends Component {
  state = {
error: null,
token: null,
// movies: null // Null means not loaded yet
}
setToken = (token) => {
  // setAPIToken(token)

  // Forget we’ve ever loaded anything
  this.loadPromises = {}

  // If signed in
  if (token) {
    localStorage.setItem(tokenKey, token)
  }
  // If signed out
  else {
    // Clear the token from local storage
    localStorage.removeItem(tokenKey)
  }

  // Set token and clear loaded data
  this.setState({
    token: token,
  })
}
handleSignIn = ({ email, password }) => {
  authAPI.signIn({ email, password })
    .then(json => {
      this.setToken(json.token)
    })
    .catch(error => {
      this.setState({ error })
    })
}

handleSignUp = ({ email, password }) => {
  authAPI.register({ email, password })
    .then(json => {
      this.setToken(json.token)
    })
    .catch(error => {
      this.setState({ error })
    })
}

handleSignOut = () => {
  this.setToken(null)
}

  render() {
    const { error, token } = this.state
    const userInfo = !!token ? decodeJWT(token) : null
    return (
      <Router>
        <main>
          <NavMenu isSignedIn={ !!token } />
          {/* { !!error && <ErrorMessage error={error} />} */}
            <Switch>
              <Route
                exact path='/'
                render={() => (<HomePage />)}/>

              <Route
                path='/faq'
                render={() => (<FaqPage />)} />

              <Route
                path='/contact'
                render={() => (<ContactPage />)}/>

                <Route
                  path='/sign_in'
                  render={() => (<SignInPage
                    token={ token }
                    onSignIn={ this.handleSignIn} />)}/>

                  <Route
                  path='/sign_up'
                  render={() => (<SignUpPage
                    token={ token }
                    onSignUp={this.handleSignUp} />)}/>

                <Route
                  path='/profile'
                  render={() => (<ProfilePage
                    userInfo={ userInfo }
                    onSignOut={ this.handleSignOut } />)} />

                

              <Route
                path='/languages/:languageId/courses/:courseName'
                render={({match}) => <SingleCoursePage
                  courseName={match.params.courseName}
                  languageId={match.params.languageId}/> }/>

              <Route
                path='/languages/:languageId'
                render={({match}) => <CoursesPage
                  languageId={match.params.languageId}/> }/>

              <Route
                path='/languages'
                render={() => (<LanguagesPage />)}/>

              <Route render={
                ({ location }) => (
                  <div className="not-found-page-container">
                    <h1 className="not-found-page-msg text-center">
                      { location.pathname } Url Not Found
                    </h1>
                  </div>
                )
              }
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
