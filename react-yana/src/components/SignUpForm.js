import React from 'react'
import AnchorLink from '../components/AnchorLink';


function submitSignUp(event, onSignUp) {
  // Stop usual browser form submission
  event.preventDefault()

  // Get <form>
  const form = event.target
  // Get values from the field
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  // Call the onSignIn function with our values
  onSignUp({ email, password })
}

export default function SignUpForm({
  onSignUp
}) {
  return (
        <div className='container'>
          <form onSubmit={ (event) => submitSignUp(event, onSignUp) }>
          <div className="form-group">
            <label className="label-text-user">Email:</label>
            <input className="form-control" type='email' name='email' />
            <label className="label-text-user">Password:</label>
            <input className="form-control" type='password' name='password' />
          </div>

            <div className="learn-now-button-container text-center">
              <button className="btn thin-btn">Join</button>
            </div>
          </form>

          <div className="text-center user-link-margin">
            <h3 className="">Already an existing User? </h3>
            <AnchorLink className="sign-in-link-container" title="Sign In" linkPath="/sign_in" />
          </div>
      </div>
    )
  }
