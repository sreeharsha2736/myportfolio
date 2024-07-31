import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar as NavbarBs} from 'react-bootstrap';

const Navbar = () => {
  return (
    <NavbarBs bg="dark" variant="dark" fixed='top'>
    <Container>
      <NavbarBs.Brand>SG</NavbarBs.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </NavbarBs>
  )
}

export default Navbar