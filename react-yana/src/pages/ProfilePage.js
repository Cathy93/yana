
import React from 'react'
import { Redirect } from 'react-router-dom'
import Profile from '../components/Profile'

export default function ProfilePage({
    userInfo,
    onSignOut
}) {
    return (
        <div className="text-center">
          <h1>Profile</h1>
          {
            !userInfo ? (
              <Redirect to='/' />
            ) : (
              <Profile userInfo={ userInfo } />
            )
          }
          <button className="btn thin-btn"onClick={ onSignOut }>Sign Out</button>
        </div>
    )
}
