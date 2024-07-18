
// Header.js
import React, { useState } from 'react';
/* import './Header.css'; */
import '../index.css';
import Home from './MainContent';
import Menu from './Menu';
import About from './About';
import Contact from './ContactInfo';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

  return (
/*     <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	      <a class="navbar-brand" href="#">Coffee<small>Blend</small></a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li class="nav-item active"><a href="#slider" class="nav-link">Home</a></li>
	          <li class="nav-item"><a href="#ourStory" class="nav-link">Nuestra historia</a></li>
	          <li class="nav-item"><a href="#menu" class="nav-link">Menu</a></li>
	          <li class="nav-item"><a href="#blog" class="nav-link">Blog</a></li>
	          <li class="nav-item"><a href="#gallery" class="nav-link">Galeria</a></li>
	          <li class="nav-item"><a href="#maps" class="nav-link">Ubicación</a></li>
			</ul>
	      </div>
		  </div>
	  </nav> */
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <Container className='container'>
        <Navbar.Brand className="navbar-brand" href="#home">Coffee<small>Blend</small></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-item" href="#aboutus">Sobre Nosotros</Nav.Link>
            <Nav.Link className="nav-item" href="#menu">Menu</Nav.Link>
           {/*  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;
