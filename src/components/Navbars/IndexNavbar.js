import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import { useHistory } from "react-router-dom";

function IndexNavbar() {
const history = useHistory();

  const logoutHandler = (e) => {
    e.preventDefault();
    
    history.replace('/login-page')
    localStorage.clear();
  };

  const cemeteryNavbarHandler = (e) => {
    e.preventDefault();
    history.push('/cemetery-page')
  };

  const aboutUsPageHandler = (e) => {
    e.preventDefault();
    history.push('/about-page')
  };

  const homepageHandler = (e) => {
    e.preventDefault();
    history.push('/home-page')
  };
  

  return (
    <Navbar color="danger" className={classnames("fixed-top")} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title="Coded by Creative Tim"
          >
            Cemetery App
          </NavbarBrand>
        </div>
        <Collapse className="justify-content-end" navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='' onClick={homepageHandler}>
                <i className="nc-icon nc-button-power" /> Home Page
              </NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="" onClick={cemeteryNavbarHandler}>
                <i className="nc-icon nc-badge" /> Cemetery Information
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='' onClick={aboutUsPageHandler}>
                <i className="nc-icon nc-alert-circle-i" /> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" onClick={logoutHandler}>
                <i className="nc-icon nc-button-power" /> Log Out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
