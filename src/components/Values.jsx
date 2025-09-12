// src/components/Values.jsx
import React from "react";
import { FaCouch, FaUtensils, FaStar } from "react-icons/fa";

const items = [
  { icon: <FaCouch />, title: "Confort", text: "Habitaciones diseñadas para tu máximo descanso, con amenities de primera calidad y atención personalizada las 24 horas." },
  { icon: <FaUtensils />, title: "Gastronomía", text: "Experiencias culinarias excepcionales con chefs reconocidos internacionalmente y productos locales selectos." },
  { icon: <FaStar />, title: "Experiencias Únicas", text: "Creamos momentos memorables con actividades exclusivas y servicios personalizados para cada huésped." },
];

function Values() {
  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Nuestra Filosofía</h2>
          <p className="text-muted">Tres pilares que definen la experiencia LuxeHotels</p>
        </div>

        <div className="row">
          {items.map((it, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="value-card">
                <div className="value-icon">{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
