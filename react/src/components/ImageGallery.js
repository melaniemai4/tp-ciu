import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="ftco-gallery">
      <div className="container-wrap">
        <div className="row no-gutters">
          {images.map((image, index) => (
            <div className="col-md-3" key={index}>
              <a href="#" className="gallery img d-flex align-items-center" style={{ backgroundImage: `url(${image.image})` }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;