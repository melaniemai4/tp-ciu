
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
      <header className="header">

        <nav className="nav">
          <h4 className="main-title">Coffee Blend</h4>
          <ul className="nav-list">
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
