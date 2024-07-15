
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h1>Nuestra Historia</h1>
      <p>
      Bienvenido a Coffee Blend
      </p>
      <p>
      Creemos en la fusión entre el arte, el café y la comunidad. Somos un espacio vibrante donde cada taza cuenta una historia y cada visita es una experiencia única.
      </p>
      <p>
      Decidimos crear un lugar único para los jóvenes. Con pasión y creatividad, transformaron un antiguo local en <b class="font-weight-bold">Coffee Blend</b>, un espacio lleno de arte urbano, luces de neón y un ambiente acogedor. Desde su apertura, <b class="font-weight-bold">Coffee Blend</b> se ha convertido en el punto de encuentro favorito, donde cada café es una obra de arte y las noches de micrófono abierto son legendarias.
      </p>
      <div className='div-imagenes'>
      <img width="33%" height="600" src={require ('../images/coffeeshop.jpg')}/>
      <img width="33%" height="600" src={require ('../images/gallery-3.jpg')}/>
      <img width="33%" height="600" src={require ('../images/menu-1.jpg')}/>

      </div>
    </section>
  );
};

export default About;
