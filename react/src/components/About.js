
import React from 'react';

const About = () => {
  return (
    <div id="aboutus" className='ftco-about d-md-flex'>
      <div className="one-half img">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/MYPVQccHhAQ?si=gd2oIYnm4t-XTRZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="one-half">
        <div className="overlap">
          <div className="heading-section ">
            <span className="subheading">Descubri</span>
            <h2 className="mb-4">Nuestra Historia</h2>
          </div>
          <div>
            <p>
              En una ciudad bulliciosa, tres amigos universitarios, Laura, Pedro y Martina, decidieron crear un lugar único para los jóvenes. Con pasión y creatividad, transformaron un antiguo local en <b className="font-weight-bold">Coffee Blend</b>, un espacio lleno de arte urbano, luces de neón y un ambiente acogedor. Desde su apertura, <b className="font-weight-bold">Coffee Blend</b> se ha convertido en el punto de encuentro favorito, donde cada café es una obra de arte y las noches de micrófono abierto son legendarias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
