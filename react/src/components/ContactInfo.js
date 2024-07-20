import React from 'react';

const ContactInfo = () => {
  return (
    <section id="contact" className="ftco-appointment">
      <div className="overlay"></div>
      <div className="container-wrap">
        <div className="row mx-0 no-gutters d-md-flex align-items-center">
          <div className="col-md-6 d-flex align-self-stretch">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8207049730845!2d-58.386559523392066!3d-34.6086950577626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadab062e7d9%3A0x2005bec260e5e867!2sAv.%20Rivadavia%201234%2C%20C1033AAP%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1720730387549!5m2!1sen!2sar"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="appointment p-4">
              <h3 className="mb-3">Agendá una reserva</h3>
              <form action="#" className="appointment-form">
                <div className="d-md-flex">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div className="form-group ml-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                      required
                    />
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="form-group">
                    <div className="input-wrap">
                      <div className="icon">
                        <span className="ion-md-calendar"></span>
                      </div>
                      <input
                        type="date"
                        className="form-control appointment_date"
                        placeholder="Fecha"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group ml-md-4">
                    <div className="input-wrap">
                      <div className="icon">
                        <span className="ion-ios-clock"></span>
                      </div>
                      <input
                        type="time"
                        className="form-control appointment_time"
                        placeholder="Hora"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group ml-md-4">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Teléfono"
                      pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                      title="Formato: 123-4567-8901"
                      required
                    />
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="2"
                      className="form-control"
                      placeholder="Mensaje"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group ml-md-4">
                    <input
                      type="submit"
                      value="Agendá"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="ftco-intro mt-2">
              <div className="container-wrap">
                <div className="wrap d-md-flex align-items-xl-end">
                  <div className="info w-100 px-4">
                    <div className="row mx-0 no-gutters">
                      <div className="col-md-4 d-flex">
                        <div className="icon">
                          <span className="icon-phone"></span>
                        </div>
                        <div className="text">
                          <h3>(011) 2345-6789</h3>
                          <p>Atención de primera calidad.</p>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex">
                        <div className="icon">
                          <span className="icon-my_location"></span>
                        </div>
                        <div className="text">
                          <h3>Avenida Rivadavia 1234</h3>
                          <p>CABA, Buenos Aires, Argentina</p>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex">
                        <div className="icon">
                          <span className="icon-clock-o"></span>
                        </div>
                        <div className="text">
                          <h3>Abierto de martes a domingo</h3>
                          <p>8:00 - 21:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
