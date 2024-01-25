import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{padding:"1.2rem 0"}}>
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
