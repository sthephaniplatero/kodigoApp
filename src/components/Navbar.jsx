import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function AppNavbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
          <img src="/logo.webp" alt="Logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>

            {!token ? (
              <Nav.Link as={Link} to="/signin" className="nav-link-custom">
                Iniciar Sesión
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/dashboard" className="nav-link-custom">
                  Dashboard
                </Nav.Link>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

