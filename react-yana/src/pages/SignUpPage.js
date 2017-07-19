// Dependencies
import React from 'react';

// Components
import Footer from '../components/Footer';
import Promise from 'bluebird'
import update from 'immutability-helper'
import validator from 'validator'
import { validated } from 'react-custom-validation'

//
class SignUpForm extends React.Component {
  state = {
    fields: {
      email: '',
      password: '',
      rePassword: ''
    },
  }

  fieldChange = (field, value) => {
    this.setState(update(this.state, {fields: {[field]: {$set: value}}}))
  }

  render() {
    return (<Form
      fields={this.state.fields}
      onChange={this.fieldChange}
      onValid={() => alert('Submitting Your Signup...')} // eslint-disable-line no-alert
      onInvalid={() => alert('Signup Form Submit Error!')} // eslint-disable-line no-alert
    />)
  }
}

const isEmail = (email) =>
  validator.isEmail(email) ? null : 'This is not a valid email.'

const isUnique = (email) => Promise.delay(1000)
  .then(() => email.includes('used') ? 'This email is already used.' : null)

const minLength = (password, length) =>
  password.length >= length ? null : 'Password is too short.'

const areSame = (password, rePassword) =>
  password === rePassword ? null : 'Passwords do not match.'

function validationConfig(props) {
  const {email, password, rePassword} = props.fields

  return {
    fields: ['email', 'password', 'rePassword'],

    validations: {
      email: [
        [isEmail, email],
        [isUnique, email]
      ],
      password: [[minLength, password, 6]],
      rePassword: {
        rules: [[areSame, password, rePassword]],
        fields: ['password', 'rePassword']
      }
    },
  }
}

class Form extends React.Component {
  render() {
    const {fields, onChange, onValid, onInvalid, $field, $validation} = this.props
    return (
      <div>
        <form className="form-border">
          <h1 className="home-heading-text text-center">Join Us</h1>

          <div className="form-group">
            <div>
              <label className="label-text">Email Address</label>
            </div>
            <div>
              <input className="form-control" type="text" value={fields.email}
              {...$field('email', (e) => onChange('email', e.target.value))}/>
            </div>
            {$validation.email.show && <span className="error-msg">{$validation.email.error.reason}</span>}
          </div>

          <div className="form-group">
            <div>
              <label className="label-text">Password</label>
            </div>
            <div>
              <input className="form-control" type="password" value={fields.password}
              {...$field('password', (e) => onChange('password', e.target.value))}/>
            </div>
            {$validation.password.show && <span className="error-msg">{$validation.password.error.reason}</span>}
          </div>

          <div className="form-group">
            <div>
              <label className="label-text">Confirm password</label>
            </div>
            <div>
              <input className="form-control" type="password" value={fields.rePassword}
              {...$field('rePassword', (e) => onChange('rePassword', e.target.value))}/>
            </div>
            {$validation.rePassword.show && <span className="error-msg">{$validation.rePassword.error.reason}</span>}
          </div>

          <div className="form-group buttom-form">
            <button className="btn action-btn" onClick={(e) => {
              e.preventDefault()
              this.props.$submit(onValid, onInvalid)
            }}>Join</button>
          </div>

        </form>

        <Footer />
      </div>
    )
  }
}

Form = validated(validationConfig)(Form)

export default () => <SignUpForm />
