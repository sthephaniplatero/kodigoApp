import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "La atención personalizada y los detalles hacen de SunflowerHotels mi elección preferida para viajes de negocios. Las instalaciones son impecables y el servicio es excelente.",
    author: "Carlos Méndez",
    role: "Ejecutivo",
    avatar: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/hotels/testimonials1.png",
    rating: 5,
  },
  {
    id: 2,
    text: "Nuestra luna de miel en SunflowerHotels fue simplemente mágica. Desde la suite con vista al mar hasta la cena privada en la playa, cada momento fue perfecto y memorable.",
    author: "Laura Flores",
    role: "Luna de Miel",
    avatar: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/hotels/testimonials2.png",
    rating: 4.5,
  },
  {
    id: 3,
    text: "Como food blogger, he visitado muchos hoteles, pero la experiencia gastronómica en SunflowerHotels es incomparable. Los chefs crean auténticas obras de arte culinarias.",
    author: "Ana Rodríguez",
    role: "Blogger",
    avatar: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/hotels/testimonials3.png",
    rating: 5,
  },
];

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }
  return stars;
}

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Lo que dicen nuestros clientes</h2>
          <p className="text-muted">
            Experiencias reales de quienes han disfrutado de nuestros servicios
          </p>
        </div>

        <div className="row">
          {testimonials.map((t) => (
            <div className="col-md-4 mb-4" key={t.id}>
              <div className="testimonial-card">
                <div className="testimonial-text">{t.text}</div>
                <div className="testimonial-author">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="testimonial-avatar"
                  />
                  <div className="author-info">
                    <h5>{t.author}</h5>
                    <span>{t.role}</span>
                    <div className="rating">{renderStars(t.rating)}</div>
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
