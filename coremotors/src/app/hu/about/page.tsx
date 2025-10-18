import React from "react";

const AboutHU = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('/about-bg.png')", // <-- háttérkép a public mappában
      }}
    >
      {/* Sötét overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Szövegdoboz */}
      <div className="relative z-10 max-w-3xl px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
          Rólunk
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100">
          A <span className="font-semibold">CoreMotors</span> egy{" "}
          <span className="font-semibold">családi vállalkozás</span>, amely már{" "}
          <span className="font-semibold">közel 10 éve</span> működik az
          autószerelés területén. Kis, de elkötelezett csapatunk
          <span className="text-red-400 font-medium">
            {" "}megbízható, gyors és minőségi{" "}
          </span>
          szolgáltatásokat nyújt minden ügyfelünk számára.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100 mt-4">
          Hiszünk a <span className="font-semibold">precíz munkában</span>, a
          nyíltságban és a bizalomra épülő ügyfélkapcsolatokban. Műhelyünk
          modern felszereléssel rendelkezik, és készen áll bármilyen kihívásra –
          legyen szó diagnosztikáról vagy összetett javításról.
        </p>

        <p className="text-lg md:text-xl leading-relaxed font-bold text-red-500 mt-4 italic">
          „A CoreMotorsnál az autód úgy van kezelve, mintha a sajátunk lenne.”
        </p>

        {/* Gomb a szolgáltatások oldalra */}
        <div className="mt-10">
          <a
            href="/hu/services"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Tekintsd meg szolgáltatásainkat
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutHU;
