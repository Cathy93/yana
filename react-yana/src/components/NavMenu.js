import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Navbar } from 'react-bootstrap';
import logo from '../img/aus_logo.png';

export default () => (
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
      </Navbar.Collapse>
    </Navbar>
)
