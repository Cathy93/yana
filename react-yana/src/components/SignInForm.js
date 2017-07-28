import React from 'react'
import AnchorLink from '../components/AnchorLink';


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
      <div className="container">
        <form onSubmit={ (event) => submitSignIn(event, onSignIn) }>
          <div className="form-group">
            <label className="label-text-user">Email:</label>
            <input className="form-control" type='email' name='email' />
            <label className="label-text-user">Password:</label>
            <input className="form-control" type='password' name='password' />
          </div>

          <div className="learn-now-button-container text-center">
            <button className="btn thin-btn">Sign In</button>
          </div>
        </form>

        <div className="text-center user-link-margin">
          <h3 className="">Not yet a User? </h3>
          <AnchorLink title="Join" linkPath="/sign_up" />
        </div>

      </div>
      )
}
