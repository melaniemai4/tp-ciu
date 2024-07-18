import React from 'react';
const Footer = () => {
  return (
    <footer className="ftco-footer ftco-section img">
    <div className="overlay"></div>
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Trabajo Práctico de React</h2>
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
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li><a href="https://x.com/" target="_blank"><span className="icon-twitter"></span></a></li>
              <li><a href="https://www.facebook.com/" target="_blank"><span className="icon-facebook"></span></a></li>
              <li><a href="https://www.instagram.com/" target="_blank"><span className="icon-instagram"></span></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
           <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Servicios</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-2 d-block">Café</a></li>
              <li><a href="#" className="py-2 d-block">Pasteleria</a></li>
              <li><a href="#" className="py-2 d-block">Delivery</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Preguntas frecuentes</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><a href="#"><span className="icon icon-map-marker"></span><span className="text">Avenida Rivadavia 1234, CABA, Buenos Aires, Argentina</span></a></li>
                <li><a href="#"><span className="icon icon-phone"></span><span className="text">(011) 2345-6789</span></a></li>
                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">contacto@coffeeblend.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">

          <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
