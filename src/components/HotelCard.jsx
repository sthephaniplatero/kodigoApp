// src/components/HotelCard.jsx
import React from "react";

export default function HotelCard({ hotel }) {
  return (
    <div className="card room-card">
      {/* Imagen */}
      <img
        src={hotel.image}
        alt={hotel.name}
        className="card-img-top room-image"
      />

      <div className="card-body">
        {/* Nombre */}
        <h5 className="card-title">{hotel.name}</h5>

        {/* Dirección */}
        <p className="text-muted">{hotel.address}</p>

        {/* Botón de reservar */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-gold btn-sm">Reservar</button>
        </div>
      </div>
    </div>
  );
}
