
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
/* import '../style.css' */
export default function App() {
  return (
    <Carousel id="home" >
      <Carousel.Item interval={5000}>
        <img src="../images/bg_1.jpg"
          alt="Image One"
        />
        <Carousel.Caption>
          <h1>Bienvenido a Coffee Blend</h1>
          <h4>
            <p><strong>Creemos en la fusión entre el arte, el café y la comunidad. Somos un espacio vibrante donde cada taza cuenta una historia y cada visita es una experiencia única</strong></p>
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src="../images/bg_2.jpg"
          alt="Image Two"
        />
        <Carousel.Caption>
          <h1>Compromiso con la Sostenibilidad y la Calidad</h1>
          <h4>
            <p><strong>Nos comprometemos a utilizar ingredientes frescos y locales siempre que sea posible, contribuyendo así a un futuro más sostenible</strong></p>
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src="../images/bg_3.jpg"
          alt="Image Two"
        />
        <Carousel.Caption>
          <h1>Nuestro Compromiso con los Jóvenes</h1>
          <h4>
            <p><strong>Valoramos el crecimiento personal y profesional de nuestros jóvenes colaboradores, fomentando un ambiente donde puedan aprender, prosperar y contribuir al éxito del equipo</strong></p>
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}