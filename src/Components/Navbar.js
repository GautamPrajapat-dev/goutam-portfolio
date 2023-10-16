import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarHome = () => {
  return (
    <div>
      <Container>
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Full Sack Hero</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="  position-relative"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-lg-end  "
            >
              <Nav className="mr-auto ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Skills</Nav.Link>
                <Nav.Link href="#home">Project</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};
export default NavbarHome;
