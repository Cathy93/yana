
import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

export default function ProfilePage({
    userInfo,
    onSignOut
}) {
    return (
        <div>
          <h1 className="home-heading-text text-center">Profile</h1>
          {
            !userInfo ? (
              <Redirect to='/' />
            ) : (
              <div>
                <Profile userInfo={ userInfo } />
                <div className="profile-link-margin">
                  <div className="sign-in-link-container text-center">
                    <div className="button-container">
                      <button className="btn thin-btn" onClick={ onSignOut }>Sign Out</button>
                      &nbsp; &nbsp;  &nbsp; &nbsp;
                      <Link to='/languages'>
                        <button className="btn thin-btn">Courses</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <Footer />
                </div>
              </div>
            )
          }

        </div>
    )
}
