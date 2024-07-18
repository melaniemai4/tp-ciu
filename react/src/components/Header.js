
// Header.js
import React, { useState } from 'react';
import './Header.css';
import Home from './MainContent';
import Menu from './Menu';
import About from './About';
import Contact from './ContactInfo';

const Header = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div class="container">
            <a class="navbar-brand" href="#">Coffee<small>Blend</small></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav ml-auto">
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
      </header>
      <body>
        {currentPage === 'home' && <Home />}
        {currentPage === 'menu' && <Menu />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </body>
    </div>

  );
};

export default Header;
