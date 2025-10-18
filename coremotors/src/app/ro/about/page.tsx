import React from "react";

const About = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('/about-bg.png')", // <-- ide tedd a háttérképedet a public mappába
      }}
    >
      {/* Sötét overlay, hogy jobban olvasható legyen a szöveg */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Szövegdoboz */}
      <div className="relative z-10 max-w-3xl px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
          Despre Noi
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100">
          CoreMotors este o <span className="font-semibold">afacere de familie </span> 
          care activează de aproape <span className="font-semibold">10 ani</span> în domeniul 
          reparațiilor auto. Suntem o echipă mică, dar pasionată, dedicată oferirii de servicii 
          <span className="text-red-400 font-medium"> corecte, rapide și de calitate </span> 
          pentru fiecare client care ne trece pragul.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100 mt-4">
          Credem în <span className="font-semibold">muncă bine făcută</span>, 
          în transparență și în construirea unei relații de încredere cu clienții noștri.  
          Atelierul nostru este echipat modern și pregătit să răspundă oricărei provocări, 
          de la diagnoză până la reparații complexe.
        </p>

        <p className="text-lg md:text-xl leading-relaxed font-bold text-red-500 mt-4 italic">
          „La CoreMotors, mașina ta este tratată ca și cum ar fi a noastră.”
        </p>
      {/* Gomb a szolgáltatások oldalra */}
        <div className="mt-10">
          <a
            href="/ro/services"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Vezi Serviciile Noastre
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;