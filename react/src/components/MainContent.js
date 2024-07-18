// components/MainContent.js
import React from 'react';
import MenuItem from './MenuItem';
/* import './MainContent.css'; */

const MainContent = () => {
  return (
    <main>
      <div className='maincontent'>
        <h1>¡Bienvenido a nuestra cafetería!</h1>
        <p>Creemos en la fusión entre el arte, el café y la comunidad. Somos un espacio vibrante donde cada taza cuenta una historia y cada visita es una experiencia única.</p>

        <div className='conteiner'>
          <div className='textoPrimero'>
            <h3 class="mb-4">Nuestro Compromiso con los Jóvenes</h3>
            <p class="mb-4 mb-md-5">Valoramos el crecimiento personal y profesional de nuestros jóvenes colaboradores, fomentando un ambiente donde puedan aprender, prosperar y contribuir al éxito del equipo.</p>
            <h3 class="mb-4">Compromiso con la Sostenibilidad y la Calidad</h3>
            <p class="mb-4 mb-md-5">Nos comprometemos a utilizar ingredientes frescos y locales siempre que sea posible, contribuyendo así a un futuro más sostenible.</p>
            <h3 class="heading">Fácil de Pedir</h3>
            <p>Con nuestro proceso de pedidos simplificado y un equipo siempre dispuesto a ayudarte, aseguramos que cada visita sea rápida, eficiente y llena de sonrisas.</p>
            <h3 class="heading">El Envío Más Rápido</h3>
            <p>Disfruta de la velocidad sin comprometer la calidad en cada entrega.</p>
          </div>
          <div className="imagen-iframe">
            <iframe width="528" height="356" src="https://www.youtube.com/embed/MYPVQccHhAQ?si=gd2oIYnm4t-XTRZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

const menuItems = [
  { id: 1, name: 'Café con Leche', description: 'Café con leche fresco', price: 2.50 },
  { id: 2, name: 'Torta de Chocolate', description: 'Torta de chocolate suave', price: 3.00 },
  // ... otros elementos del menú
];

export default MainContent;
