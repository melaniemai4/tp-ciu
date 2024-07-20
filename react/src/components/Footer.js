import React from 'react';

const Footer = () => {
  return (
    
    <footer id="footer" class="ftco-footer ftco-section img">
    	<div class="overlay"></div>
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Trabajo Práctico de React</h2>
              <p>Miembros:</p>
              <ul>
                <li>
                  <span>Gerace Cesar Emiliano</span>
                </li>
                <li>
                  <span>Mai Melanie</span>
                </li>
                <li>
                  <span>Pisoni Denise Ailen</span>
                </li>
              </ul>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li><a href="https://x.com/" target="_blank"><span class="icon-twitter"></span></a></li>
                <li><a href="https://www.facebook.com/" target="_blank"><span class="icon-facebook"></span></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-md-5">
             <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Servicios</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">Café</a></li>
                <li><a href="#" class="py-2 d-block">Pasteleria</a></li>
                <li><a href="#" class="py-2 d-block">Delivery</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-md-5">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Preguntas frecuentes</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><a href="https://maps.app.goo.gl/G5Kfv32226rixXKD7" target="_blank"><span class="icon icon-map-marker"></span><span class="text">Avenida Rivadavia 1234, CABA, Buenos Aires, Argentina</span></a></li>
	                <li><a href="tel:5401123456789" target="_blank"><span class="icon icon-phone"></span><span class="text">(011) 2345-6789</span></a></li>
	                <li><a href="mailto:contacto@coffeeblend.com" target="_blank"><span class="icon icon-envelope"></span><span class="text">contacto@coffeeblend.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
