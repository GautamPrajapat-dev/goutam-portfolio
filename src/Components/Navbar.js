import React from "react";
import "./Style/Navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarHome = () => {
  return (
    <div>
      <Container>
        <Navbar expand="xxl" variant="dark">
          <Container fluid>
            <Navbar.Brand className="font" href="#home">Full Sack Hero</Navbar.Brand>
            <Navbar.Toggle aria-controls="" className="border-0" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-lg-end navbar-position"
            >
              <Nav className="mr-auto link " variant="underline">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Skills</Nav.Link>
                <Nav.Link href="#Project">Project</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};
export default NavbarHome;
