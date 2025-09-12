// src/components/Rooms.jsx
import React from "react";

const rooms = [
  {
    title: "Suite Presidencial",
    desc: "Amplio espacio con vista panorámica, diseño elegante y amenities exclusivos para una estadía inolvidable.",
    price: "$450/noche",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/hotels/suite.png"
  },
  {
    title: "Habitación Deluxe",
    desc: "Con terraza privada y baño de mármol con jacuzzi, perfecta para momentos de relax y desconexión.",
    price: "$320/noche",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/hotels/deluxe.png"
  },
  {
    title: "Suite Familiar",
    desc: "Ideal para familias, con áreas separadas y amenities especiales para disfrutar en compañía de tus seres queridos.",
    price: "$380/noche",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/hotels/familiar.png"
  }
];

function Rooms() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Habitaciones Destacadas</h2>
          <p className="text-muted">Descubre nuestro exclusivo portfolio de alojamiento</p>
        </div>

        <div className="row">
          {rooms.map((r, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card room-card">
                <img src={r.img} className="card-img-top room-image" alt={r.title} />
                <div className="card-body">
                  <h5 className="card-title">{r.title}</h5>
                  <p className="card-text">{r.desc}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="room-price">{r.price}</span>
                    <button className="btn btn-gold btn-sm">Reservar</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Rooms;
