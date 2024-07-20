
// Header.js
import React, { useState } from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './ContactInfo';
import ImageGallery from './ImageGallery';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <Container className='container'>
        <Navbar.Brand className="navbar-brand" href="#home">Coffee<small>Blend</small></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-item" href="#aboutus">Sobre Nosotros</Nav.Link>
            <Nav.Link className="nav-item" href="#menu">Menu</Nav.Link>
            <Nav.Link className="nav-item" href="#gallery">Galeria</Nav.Link>
            <Nav.Link className="nav-item" href="#contact">Reservas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;
