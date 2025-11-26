"use client";

import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Diagnoză computerizată",
      desc: "Identificăm rapid problemele mașinii tale cu echipamente moderne de diagnoză.",
      icon: "💻",
    },
    {
      title: "Schimb ulei și filtre",
      desc: "Întreținerea regulată a motorului prin schimbarea uleiului și filtrelor de aer, combustibil și habitaclu.",
      icon: "🛢️",
    },
    {
      title: "Reparații mecanice",
      desc: "Efectuăm reparații complete: frâne, ambreiaj, suspensie, direcție, transmisie și motor.",
      icon: "🔧",
    },
    {
      title: "Sistem de frânare",
      desc: "Verificare și înlocuire plăcuțe, discuri, lichid și etriere de frână pentru siguranță maximă.",
      icon: "🚗",
    },
    {
      title: "Geometrie roți și suspensie",
      desc: "Ajustare preciză a geometriei roților pentru o condusă sigură și un consum redus.",
      icon: "⚙️",
    },
    {
      title: "Electrică auto",
      desc: "Diagnoză și reparații pentru sistemele electrice: baterie, alternator, senzori și faruri.",
      icon: "🔋",
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/services-bg.png')" }} // <-- ide jön a háttérképed a public mappába
    >
      {/* Áttetsző sötét réteg */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Tartalom */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-6">
          Serviciile Noastre
        </h1>
        <p className="text-center text-gray-200 max-w-3xl mx-auto mb-12">
          Atelierul auto <span className="text-yellow-400 font-semibold">CoreMotors</span> oferă o gamă completă de servicii 
          de întreținere și reparații auto. Punem accent pe calitate, transparență și satisfacția clientului.
        </p>

        {/* Grid de servicii */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-6 text-center 
              hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Gomb alul */}
        <div className="text-center mt-12">
          <Link
            href="/ro/appointment"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300"
          >
            Programează o vizită
          </Link>
        </div>
      </div>
    </section>
  );
}
