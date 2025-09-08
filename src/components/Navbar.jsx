import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function AppNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
          <img
            src="/logo.png" 
            alt="Logo"
            className="logo"
          />{" "}
          MiApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/signin" className="nav-link-custom">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
