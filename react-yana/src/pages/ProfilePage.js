
import React from 'react'
import { Redirect, Link  } from 'react-router-dom'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import ButtonThin from '../components/ButtonThin'
import AnchorLink from '../components/AnchorLink';



export default function ProfilePage({
    userInfo,
    onSignOut
}) {
    return (
        <div className="text-center">
          <h1 className="home-heading-text text-center">Profile</h1>
          {
            !userInfo ? (
              <Redirect to='/' />
            ) : (
              <Profile userInfo={ userInfo } />
            )
          }
          <div className="button-container">
            <button className="btn thin-btn" onClick={ onSignOut }>Sign Out</button>
            &nbsp; &nbsp;  &nbsp; &nbsp;
            <Link to='/languages'>
              <button className="btn thin-btn">Courses</button>
            </Link>

          </div>

          <div className="fixed-bottom">
            <Footer />
          </div>
        </div>
    )
}
