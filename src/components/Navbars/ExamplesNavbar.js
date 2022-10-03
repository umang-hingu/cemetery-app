import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import { Collapse, NavbarBrand, Navbar, Nav, Container } from "reactstrap";

function ExamplesNavbar() {
  return (
    <Navbar
      className={classnames("fixed-top")}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Cemetery App
          </NavbarBrand>
        </div>
        <Collapse className="justify-content-end" navbar>
          <Nav navbar></Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
