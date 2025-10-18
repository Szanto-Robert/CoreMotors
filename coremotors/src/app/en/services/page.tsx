"use client";

import React from "react";

export default function ServicesEN() {
  const services = [
    {
      title: "Computer Diagnostics",
      desc: "We quickly identify your car’s issues using modern diagnostic equipment.",
      icon: "💻",
    },
    {
      title: "Oil and Filter Change",
      desc: "Keep your engine healthy with regular oil, air, fuel, and cabin filter replacements.",
      icon: "🛢️",
    },
    {
      title: "Mechanical Repairs",
      desc: "Full mechanical service: brakes, clutch, suspension, steering, transmission, and engine.",
      icon: "🔧",
    },
    {
      title: "Brake System Maintenance",
      desc: "Inspection and replacement of brake pads, discs, fluid, and calipers for maximum safety.",
      icon: "🚗",
    },
    {
      title: "Wheel Alignment & Suspension",
      desc: "Precise wheel alignment for safer driving and better fuel efficiency.",
      icon: "⚙️",
    },
    {
      title: "Auto Electrical Services",
      desc: "Diagnostics and repairs for electrical systems: battery, alternator, sensors, and lighting.",
      icon: "🔋",
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/services-bg.png')" }} // <-- background image in public folder
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-6">
          Our Services
        </h1>
        <p className="text-center text-gray-200 max-w-3xl mx-auto mb-12">
          <span className="text-yellow-400 font-semibold">CoreMotors</span> offers a complete range of automotive maintenance and repair services.  
          We focus on <span className="font-semibold">quality, transparency, and customer satisfaction</span> in everything we do.
        </p>

        {/* Services grid */}
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

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="/en/appointment"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
