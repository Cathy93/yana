import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'
import Footer from '../components/Footer'

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
            <div>
              <SignInForm onSignIn={ onSignIn } />
            </div>
          )
      }
    <Footer/>
  </div>
)

export default SignInPage
