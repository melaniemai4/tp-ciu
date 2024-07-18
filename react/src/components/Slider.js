// components/MainContent.js
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MenuItem from './MenuItem';

const backgroundStyle = (imageNumber) => ({
  backgroundImage: `url(images/bg_${imageNumber}.jpg)`
});

const MainContent = () => {
  return (
    <section id="slider">
      <OwlCarousel className="home-slider owl-carousel" id="slider" items={1} loop autoplay>
        <a href="https://www.youtube.com/watch?v=SpM34Y886ys" target="_blank">
          <div className="slider-item" style={backgroundStyle(1)}>
            <div className="overlay"></div>
            <div className="container">
            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
        
              <div className="col-md-8 col-sm-12 text-center">
              <h1 className="mb-4">Bienvenido a Coffee Blend</h1>
              <p className="mb-4 mb-md-5">Creemos en la fusión entre el arte, el café y la comunidad. Somos un espacio vibrante donde cada taza cuenta una historia y cada visita es una experiencia única.</p>
              
              </div>
        
            </div>
            </div>
          </div>
        </a>

        <a href="https://www.youtube.com/watch?v=CUqNyZ30SCQ" target="_blank">
          <div className="slider-item" style={backgroundStyle(2)}>
            <div className="overlay"></div>
            <div className="container">
            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

              <div className="col-md-8 col-sm-12 text-center">
                
                <h1 className="mb-4">Compromiso con la Sostenibilidad y la Calidad</h1>
                <p className="mb-4 mb-md-5">Nos comprometemos a utilizar ingredientes frescos y locales siempre que sea posible, contribuyendo así a un futuro más sostenible.</p>
              </div>
            </div>
            </div>
          </div>
        </a>

        <a href="https://www.youtube.com/watch?v=1bn8cQ-9-KM" target="_blank">
          <div className="slider-item" style={backgroundStyle(3)}>
            <div className="overlay"></div>
            <div className="container">
            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

              
              <div className="col-md-8 col-sm-12 text-center">
                
                <h1 className="mb-4">Nuestro Compromiso con los Jóvenes</h1>
                <p className="mb-4 mb-md-5">Valoramos el crecimiento personal y profesional de nuestros jóvenes colaboradores, fomentando un ambiente donde puedan aprender, prosperar y contribuir al éxito del equipo.</p>
                </div>
            </div>
            </div>
          </div>
        </a>
      </OwlCarousel>
    </section>
  );
};

const menuItems = [
  { id: 1, name: 'Café con Leche', description: 'Café con leche fresco', price: 2.50 },
  { id: 2, name: 'Torta de Chocolate', description: 'Torta de chocolate suave', price: 3.00 },
  // ... otros elementos del menú
];

export default MainContent;
