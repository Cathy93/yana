import React from 'react'
import { Link  } from 'react-router-dom'
import AnchorLink from '../components/AnchorLink';
import Footer from '../components/Footer'

function untilExpiryInSeconds(exp) {
  const now = new Date()
  const expiryDate = new Date(exp * 1000)
  return Math.floor((expiryDate - now) / 1000)
}

export default ({
  userInfo,
}) => (
    <div className="text-center">
        <h3>Email:
          <b>{ userInfo.email }</b>
        </h3>
        <h4>Login Session Expires in:
          <b>{ untilExpiryInSeconds(userInfo.exp) }s</b>
        </h4>
    </div>
)
