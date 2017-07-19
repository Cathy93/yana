import React from 'react'
import ButtonDefault from '../components/ButtonDefault';
import Validation from 'react-validation';


const formStyle = {
  display: 'flex',
  flexDirection: 'column',
}

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
        <form
          onSubmit={ (event) => submitSignIn(event, onSignIn) }
          style={ formStyle }>
          <label>
            <span>Email </span>
            <input name='email' />
          </label>
          <label>
            <span>Password </span>
            <input type='password' name='password' />
          </label>
          <div className="learn-now-button-container text-center">
            <button className="btn thin-btn">Sign In</button>


          </div>
        </form>
      )
}
