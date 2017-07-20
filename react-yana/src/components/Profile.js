import React from 'react'

function untilExpiryInSeconds(exp) {
  const now = new Date()
  const expiryDate = new Date(exp * 1000)
  return Math.floor((expiryDate - now) / 1000)
}

export default ({
  userInfo
}) => (
    <div className="text-center">
          <h3>Email: { userInfo.email }</h3>

          <h4><b>Expires in:</b> { untilExpiryInSeconds(userInfo.exp) }s</h4>
    </div>
)
