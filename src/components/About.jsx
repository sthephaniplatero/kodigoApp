// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/about.jpg" className="img-fluid rounded shadow" alt="Lobby elegante" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 mt-3">Sobre Nosotros</h2>
            <p>Sunflower Hotels nació con la visión de crear espacios donde el lujo se encuentra con la calidez del hogar. Por más de tres décadas, hemos perfeccionado el arte de la hospitalidad, combinando tradición e innovación.</p>
            <p>Nuestros hoteles están ubicados en destinos exclusivos alrededor del mundo, cada uno con una identidad única pero unificados por nuestro compromiso con la excelencia en el servicio y la creación de experiencias memorables.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
