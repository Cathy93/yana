import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'
import LanguagesPage from './LanguagesPage'
import Footer from '../components/Footer';

const SignInPage = ({
    token,
    onSignIn
}) => (
    <div>
      <h1 className="home-heading-text text-center">Welcome Back!</h1>
      <div>
      {
          !!token ? (
              <LanguagesPage token={ token} />
          ) : (

              <SignInForm onSignIn={ onSignIn } />
          )
      }
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
)

export default SignInPage
