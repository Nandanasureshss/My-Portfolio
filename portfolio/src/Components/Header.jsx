import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; 

function Header() {
  return (
    <header className="custom-header">
      <Container>
        <h1 className="site-title">NANDANA SURESH S S</h1>
        <Navbar expand="lg" className="justify-content-center">
          <Nav>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
