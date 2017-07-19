import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Navbar } from 'react-bootstrap';
import logo from '../img/aus_logo.png';

export default ({
  isSignedIn = false
}) => (
      <Navbar fixedTop className="nav-container container-fluid">
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to='/' activeClassName="selected">
            <Image src={logo} alt="aus_logo" responsive/>
          </NavLink>
        </Navbar.Brand>
            <Navbar.Toggle />
       </Navbar.Header>
       <Navbar.Collapse>
          <a href='/#about'>About</a>
          <NavLink to='/faq' activeClassName="selected">FAQ</NavLink>
          <NavLink to='/contact' activeClassName="selected">Contact</NavLink>
          {
           isSignedIn ? [
               <NavLink key='profile' to='/profile'  activeClassName='active'>Profile</NavLink>
           ] : [
               <NavLink key='signin' to='/sign_in'  activeClassName='active'>Sign In</NavLink>,
               <NavLink key='signup' to='/sign_up'  activeClassName='active'>Sign Up</NavLink>
           ]
          }
          }
      </Navbar.Collapse>
    </Navbar>
)
