// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
            <div className="col-md-4 mb-4">
                <h3 className="footer-title">Sunflower<span className="text-white">Hotels</span></h3>
                <p>Redefiniendo la experiencia hotelera de lujo desde 1985. Donde cada detalle cuenta y cada momento perdura.</p>
                <div className="social-icons mt-3">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
            </div>

            <div className="col-md-2 mb-4">
                <h4 className="footer-title">Enlaces</h4>
                <div className="footer-links">
                    <a href="#">Inicio</a>
                    <a href="#">Habitaciones</a>
                    <a href="#">Servicios</a>
                    <a href="#">Destinos</a>
                    <a href="#">Contacto</a>
                </div>
            </div>

            <div className="col-md-3 mb-4">
                <h4 className="footer-title">Contacto</h4>
                <div className="footer-links">
                    <a href="#"><FaMapMarkerAlt className="me-2" /> Av. Principal 123, Ciudad</a>
                    <a href="#"><FaPhone className="me-2" /> +503 2222-2222</a>
                    <a href="#"><FaEnvelope className="me-2" /> info@luxehotels.com</a>
                </div>
            </div>
        </div>

        <hr style={{borderColor: "rgba(255,255,255,0.1)"}} />
        <div className="text-center">
            <p className="mb-0">© 2025 SunflowerHotels. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
