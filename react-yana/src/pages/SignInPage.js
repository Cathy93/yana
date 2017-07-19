import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'
import LanguagesPage from './LanguagesPage'
import AnchorLink from '../components/AnchorLink';


import Footer from '../components/Footer'
const SignInPage = ({
    token,
    onSignIn
}) => (
  <div>
      <h1 className="home-heading-text text-center">Welcome Back!</h1>
      <div>
      {
          !!token ? (
            <Redirect to="/languages" token={ token } />
          ) : (
            <div className="text-center">
              <SignInForm onSignIn={ onSignIn } />
              <div className="text-center">
                <h3>Are you a new User? </h3>
                  <AnchorLink title="Sign Up" linkPath="/sign_up" />
              </div>
            </div>

          )
      }
      </div>
      <Footer />
  </div>
)

export default SignInPage
