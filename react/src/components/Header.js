
// Header.js
import React, { useState } from 'react';
import Home from './Slider';
import Menu from './Menu';
import About from './About';
import Contact from './ContactInfo';

const Header = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="#">Coffee<small>Blend</small></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${currentPage === 'home' && 'active'}`}
                    onClick={() => handlePageChange('home')}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${currentPage === 'menu' && 'active'}`}
                    onClick={() => handlePageChange('menu')}
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${currentPage === 'about' && 'active'}`}
                    onClick={() => handlePageChange('about')}
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${currentPage === 'contact' && 'active'}`}
                    onClick={() => handlePageChange('contact')}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <div>
        {currentPage === 'home' && <Home />}
        {currentPage === 'menu' && <Menu />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </div>
    </>
  );
};

export default Header;
