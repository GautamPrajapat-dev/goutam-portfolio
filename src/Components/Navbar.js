import React, { useState } from "react";
import "./Style/Navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
const NavbarHome = () => {
  const [show, setShow] = useState(false);

  let toggleShow = () => setShow((show) => !show);

  return (
    <div>
      <Container className=" position-relative w-100">
        <Navbar expand="lg" className=" pos z-3" variant="dark">
          <Container fluid>
            <Navbar.Brand className="font" href="#home">
              Full Sack Hero
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={toggleShow}
              className="border-0  fs-1 text-light"
            >
              <List />
            </Navbar.Toggle>

            <Navbar.Collapse
              className={
                show
                  ? "justify-content-lg-end navbar-position show"
                  : "justify-content-lg-end navbar-position"
              }
            >
              <Nav className=" link" variant="underline">
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
