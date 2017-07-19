import React from 'react'
import ButtonDefault from '../components/ButtonDefault';
import Validation from 'react-validation';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
}

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
    <Validation.components.Form
      onSubmit={ (event) => submitSignUp(event, onSignUp) }
      style={ formStyle }
    >
      <label>
        <span>Email <Validation.components.Input value='email@email.com' name='email' validations={['required', 'email']}/></span>
      </label>
      <label>
        <span>Password <Validation.components.Input type='password' value='' name='password' validations={['required']}/></span>
      </label>
      <ButtonDefault title="Sign Up"
                     buttonPath="" />
    </Validation.components.Form>
  )
}
