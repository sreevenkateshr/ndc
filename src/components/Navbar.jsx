import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 ${scrolled ? "bg-white shadow-sm" : "bg-transparent text-black"}`}
      variant={scrolled ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://ui-avatars.com/api/?name=N&background=3b82f6&color=fff&bold=true&rounded=true&size=40"
            alt="Dentia Logo"
            height="40"
            className="me-2"
          />
          <span className={`${scrolled ? "text-dark" : "text-white"} fw-bold`}>
            NDC
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/dentistsPage">Dentist</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            {scrolled && (
             <Button as={Link} to="/bookingForm" variant="primary" className="ms-3">
  Book Appointment
</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
