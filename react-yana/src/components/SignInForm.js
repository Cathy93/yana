import React from 'react'
import ButtonDefault from '../components/ButtonDefault';
import Validation from 'react-validation';
import AnchorLink from '../components/AnchorLink';
import Footer from '../components/Footer'

function submitSignIn(event, onSignIn) {
  // Stop usual browser form submission
  event.preventDefault()

  // Get <form>
  const form = event.target
  // Get values from the field
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  // Call the onSignIn function with our values
  onSignIn({ email, password })
}

    export default function SignInForm({
      onSignIn
    }) {
      return (
        <div>
        <form className="form-container" onSubmit={ (event) => submitSignIn(event, onSignIn) }>

          <div className="label-container col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label className="label-text-user">Email:  &nbsp;</label>
          </div>
          <div className="input-container col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <input className="form-control-user" type='email' name='email' />
          </div>

          <div className="label-container col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label className="label-text-user">Password:  &nbsp;</label>
          </div>
          <div className="input-container col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <input className="form-control-user" type='password' name='password' />
          </div>

          <div className="col-lg-12">
            <div className="learn-now-button-container text-center">
              <button className="btn thin-btn">Sign In</button>
            </div>
          </div>
        </form>

        <div className="text-center user-link-margin">
          <h3 className="">Not yet a User? </h3>
          <div className="sign-in-link-container text-center">
          <AnchorLink title="Join" linkPath="/sign_up" />
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
      )
}
