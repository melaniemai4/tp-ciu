import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">Coffee Blend BA</div>
      <ul className="contact-info">
        <li>
          <span>Telefono:</span> 1234567890
        </li>
        <li>
          <span>Correo electrónico:</span> <a href='mailto:contacto@coffeeblendBA.com'> contacto@coffeeblendBA.com</a>
        </li>
        <li>
          <span>Dirección:</span> Calle 123, Nº 456, Ciudad
        </li>
      </ul>
      <p className="privacy-terms">Política de privacidad y términos de uso</p>
      <p className="copyright">2024 Coffee Blend BA. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
