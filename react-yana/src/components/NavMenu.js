import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

class NavMenu extends React.Component {
    render() {
        return(
            <Navbar fixedTop className="navcontainer">
              <Navbar.Header>
                <Navbar.Brand>
                  <a className="navbrand" activeClassName="active" href="/">Yana</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                {/*<Nav>
                  <NavItem eventKey={1} href="#">About</NavItem>
                  <NavItem eventKey={2} href="#">Faq</NavItem>
                  <NavItem eventKey={3} href="#">Contact</NavItem>

                </Nav>*/}
                <Nav pullRight>
                  <NavItem className="navitem" href="/">About</NavItem>
                  <NavItem className="navitem" href="/faq">Faq</NavItem>
                  <NavItem className="navitem" href="/contact">Contact</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavMenu;
