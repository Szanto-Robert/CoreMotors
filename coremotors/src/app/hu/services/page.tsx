"use client";

import React from "react";

export default function ServicesHU() {
  const services = [
    {
      title: "Számítógépes diagnosztika",
      desc: "Modern diagnosztikai eszközökkel gyorsan azonosítjuk járműved hibáit.",
      icon: "💻",
    },
    {
      title: "Olaj- és szűrőcsere",
      desc: "A motor hosszú élettartamáért: olaj, levegő-, üzemanyag- és pollenszűrő cseréje.",
      icon: "🛢️",
    },
    {
      title: "Mechanikai javítások",
      desc: "Teljes körű javítás: fék, kuplung, futómű, kormánymű, sebességváltó és motor.",
      icon: "🔧",
    },
    {
      title: "Fékrendszer karbantartás",
      desc: "Fékbetétek, tárcsák, fékfolyadék és féknyergek ellenőrzése és cseréje a maximális biztonság érdekében.",
      icon: "🚗",
    },
    {
      title: "Futómű- és kerékgeometria",
      desc: "Precíz futómű-beállítás a biztonságosabb vezetés és kisebb üzemanyag-fogyasztás érdekében.",
      icon: "⚙️",
    },
    {
      title: "Autóvillamosság",
      desc: "Diagnosztika és javítás: akkumulátor, generátor, érzékelők, világítás és elektromos rendszerek.",
      icon: "🔋",
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/services-bg.png')" }} // <-- háttérkép a public mappába
    >
      {/* Áttetsző sötét réteg */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Tartalom */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-6">
          Szolgáltatásaink
        </h1>
        <p className="text-center text-gray-200 max-w-3xl mx-auto mb-12">
          A <span className="text-yellow-400 font-semibold">CoreMotors</span> autószerviz teljes körű karbantartási és javítási szolgáltatásokat kínál.  
          Célunk a <span className="font-semibold">minőség, átláthatóság és ügyfél-elégedettség</span> biztosítása minden munkánkban.
        </p>

        {/* Szolgáltatások grid */}
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
          <a
            href="/hu/appointment"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300"
          >
            Foglalj időpontot
          </a>
        </div>
      </div>
    </section>
  );
}
