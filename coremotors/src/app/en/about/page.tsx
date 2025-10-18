import React from "react";

const AboutEN = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('/about-bg.png')", // <-- background image from public folder
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-3xl px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
          About Us
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100">
          <span className="font-semibold">CoreMotors</span> is a{" "}
          <span className="font-semibold">family-owned business</span> operating
          for nearly <span className="font-semibold">25 years</span> in the
          automotive repair industry. We are a small but passionate team,
          dedicated to providing{" "}
          <span className="text-red-400 font-medium">
            reliable, fast, and high-quality
          </span>{" "}
          services to every customer who visits our workshop.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100 mt-4">
          We believe in <span className="font-semibold">quality work</span>,
          transparency, and building trust-based relationships with our clients.
          Our workshop is fully equipped and ready to handle any challenge – from
          diagnostics to complex repairs.
        </p>

        <p className="text-lg md:text-xl leading-relaxed font-bold text-red-500 mt-4 italic">
          “At CoreMotors, your car is treated as if it were our own.”
        </p>

        {/* Button to services page */}
        <div className="mt-10">
          <a
            href="/en/services"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Our Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutEN;
