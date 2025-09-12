// src/components/AppNavbar.jsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

function AppNavbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <Navbar expand="lg" className="navbar fixed-top shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <span className="text-gold">Sunflower</span>
          <span className="text-dark">Hotels</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3 align-items-lg-center">
            <Nav.Link as={Link} to="/" className="nav-link">Inicio</Nav.Link>

            {!token ? (
              <Link
                to="/signin"
                className="btn-gold ms-lg-3 my-2 my-lg-0"
              >
                Iniciar Sesión
              </Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/dashboard" className="nav-link">Dashboard</Nav.Link>
                <Button
                  variant="danger"
                  className="ms-lg-2 my-2 my-lg-0"
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