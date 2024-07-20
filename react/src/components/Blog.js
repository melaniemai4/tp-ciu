import React from 'react';

const Blog = () => {
  return (
        <section className="ftco-section" id="blog">	
            <div className="col-md-12 pr-md-5">
                <div className="heading-section text-center">
                    <h2 className="mb-4">Blog</h2>
                    <p className="mb-4">Mantenete informado sobre las últimas novedades.</p>
                </div>
            </div>
            <div className="container">
            <div className="row d-flex">
                <div className="col-md-4 d-flex">
                    <div className="blog-entry align-self-stretch">
                    <a href="https://www.youtube.com/watch?v=xERf5Snv1iA" target="_blank" className="block-20"  style={{backgroundImage: "url('images/gallery-4.jpg')"}}>
                    </a>
                    <div className="text py-4 d-block">
                        <div className="meta">
                        <div>11 de Julio, 2024</div>
                        <div><span className="icon-chat"></span> 3</div>
                    </div>
                        <a href="https://www.youtube.com/watch?v=xERf5Snv1iA" target="_blank">
                            <h3 className="heading mt-2">Nueva Sucursal en el Corazón del Centro Urbano</h3>
                        </a>
                    <p>Descubre la nueva sucursal de Coffee Blend, estratégicamente ubicada para ofrecer aún más conveniencia y deliciosos cafés en un ambiente acogedor y moderno.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4 d-flex">
                    <div className="blog-entry align-self-stretch">
                    <a href="https://www.youtube.com/watch?v=LV9gGAetHy8" target="_blank" className="block-20"  style={{backgroundImage: "url('images/menu-3.jpg')"}}>
                    </a>
                    <div className="text py-4 d-block">
                        <div className="meta">
                        <div>5 de Julio, 2024</div>
                        <div><span className="icon-chat"></span> 3</div>
                    </div>
                    <a href="https://www.youtube.com/watch?v=LV9gGAetHy8" target="_blank">
                    <h3 className="heading mt-2">Sabores Exóticos en su Menú</h3>
                        </a>
                    <p>Experimenta la nueva gama de sabores exóticos en Coffee Blend, desde notas tropicales hasta especias aromáticas, que amplían las opciones para los amantes del café más aventureros.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4 d-flex">
                    <div className="blog-entry align-self-stretch">
                    <a href="https://www.youtube.com/watch?v=lgb5fWpCIAE" target="_blank" className="block-20" style={{backgroundImage: "url('images/bg_1.jpg')"}}>
                    </a>
                    <div className="text py-4 d-block">
                        <div className="meta">
                        <div>1 de Julio, 2024</div>
                        <div><span className="icon-chat"></span> 3</div>
                    </div>
                    <a href="https://www.youtube.com/watch?v=lgb5fWpCIAE" target="_blank">
                        <h3 className="heading mt-2">Certificación de Café Orgánico en Todas sus Tiendas</h3>
                    </a>
                    <p>Coffee Blend se enorgullece en anunciar que todas sus tiendas han obtenido la certificación de café orgánico, comprometiéndose con la calidad y sostenibilidad ambiental en cada taza que sirven.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
  );
};

export default Blog;