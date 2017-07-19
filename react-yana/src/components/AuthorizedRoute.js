import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const AuthorizedRoute = ({
  token,
  path,
  render
}) => {
  if (!!token) {
    return <Route path={ path } render={ render }/>
  }
  else {
    return <Redirect to='/sign_in' />
  }
}
export default AuthorizedRoute;
