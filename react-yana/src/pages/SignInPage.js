import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'
import LanguagesPage from './LanguagesPage'
const SignInPage = ({
    token,
    onSignIn
}) => (
  <div>
      <h1 className="home-heading-text text-center">Welcome Back!</h1>
      {
          !!token ? (
            <Redirect to="/languages" token={ token } />
          ) : (
            <div className="text-center">
              <SignInForm onSignIn={ onSignIn } />
            </div>
          )
      }
  </div>
)

export default SignInPage
