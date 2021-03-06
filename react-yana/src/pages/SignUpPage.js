import React from 'react'
import { Redirect } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'
import LanguagesPage from './LanguagesPage'
import Footer from '../components/Footer';


const SignUpPage = ({
    token,
    onSignUp
}) => (
  <div>
    <h1 className="home-heading-text text-center">Join Us</h1>
      <div className="text-center" >
      {
          !!token ? (
            <Redirect to="/languages" token={ token } />
          ) : (
            <SignUpForm onSignUp={ onSignUp } />
          )
      }
      </div>
  </div>
)

export default SignUpPage
