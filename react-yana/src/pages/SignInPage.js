// Dependencies
import React from 'react';

// Components
import SignInForm from '../components/SignInForm';
import Footer from '../components/Footer';


import * as authAPI from '../api/auth'


//
class SignInPage extends React.Component {
  // Initial state
  state = {
    error: null,
    token: null,
    courses: null // Null means not loaded yet
  }

  handleSignIn = ({ email, password }) => {
    authAPI.signIn({ email, password })
      .then(json => {
        this.setState({ token: json.token })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const {  token } = this.state
    return (
      <main>
        {
          !!token ? (
            <p>Welcome!</p>
          ) : (
            <SignInForm onSignIn={ this.handleSignIn } />
          )
        }
        <Footer/>
      </main>
    )
  }
}
export default SignInPage
