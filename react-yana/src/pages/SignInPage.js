import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'
import LanguagesPage from './LanguagesPage'

const SignInPage = ({
    token,
    onSignIn
}) => (
    <div>
    {
        !!token ? (
            <LanguagesPage token={ token} />
        ) : (
            <SignInForm onSignIn={ onSignIn } />
        )
    }
    </div>
)

export default SignInPage
