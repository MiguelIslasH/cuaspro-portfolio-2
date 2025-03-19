import React from "react";
import "./App.css";
import { FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";

export default function CuasProPortfolio() {
  return (
    <div className="portfolio-container">
      <div className="header">
        <h1 className="title">CuAsPro</h1>
        <p className="subtitle">
          Preparamos a los mejores ingenieros de software. Ofrecemos asesorías
          personalizadas, cursos y preparación para entrevistas técnicas.
        </p>
      </div>

      <div className="reason-container">
        <p>
          ¿Por qué prepararte con nosotros? Te ayudamos a dominar las
          habilidades técnicas y blandas necesarias para tener éxito en el mundo
          de la ingeniería de software. Nuestros programas están diseñados para
          hacerte destacar en cualquier entrevista técnica.
        </p>
      </div>

      <div className="social-links">
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube className="icon youtube" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
          <FaTiktok className="icon tiktok" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="icon twitter" />
        </a>
      </div>

      <button className="cta-button">Agenda tu asesoría</button>

      <div className="footer">
        <p>&copy; 2025 CuAsPro - Todos los derechos reservados</p>
      </div>
    </div>
  );
}
