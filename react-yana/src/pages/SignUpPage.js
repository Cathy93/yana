import React from 'react'
import { Redirect } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'
import LanguagesPage from './LanguagesPage'

const SignUpPage = ({
    token,
    onSignUp
}) => (
    <div>
    {
        !!token ? (
            <LanguagesPage token={ token } />
        ) : (
            <SignUpForm onSignUp={ onSignUp } />
        )
    }
    </div>
)

export default SignUpPage
