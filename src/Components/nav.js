import React, { useState } from "react";
import "./Style/Navbar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
function NavbarHome() {
  const [show, setshow] = useState(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Full Stack Hero</Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setshow(!show)}
          className="border-0  outline-0 shadow-0  "
          aria-controls="basic-navbar-nav"
        >
          <span>{show ? <Icon.List /> : <Icon.XLg />}</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
