import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar as NavbarBs} from 'react-bootstrap';

const Navbar = () => {
  return (
    <div>
        <NavbarBs bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBs.Brand href="#home">SG</NavbarBs.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>
    </div>
  )
}

export default Navbar