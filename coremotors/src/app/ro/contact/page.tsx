"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/contact-bg.png')" }}
    >
      {/* Áttetsző fekete réteg a kép felett */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Tartalom */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Bal oldali szöveg */}
        <div>
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 drop-shadow-lg">
            CONTACTEAZĂ-NE
          </h1>

          <div className="space-y-6 text-gray-100">
            <div>
              <p className="font-semibold text-yellow-400 flex items-center gap-2">
                📍 Adresă
              </p>
              <p>Str. Principală nr. 219, Lopadea Nouă, jud. Alba</p>
            </div>

            <div>
              <p className="font-semibold text-yellow-400 flex items-center gap-2">
                📞 Telefon
              </p>
              <p>+40 745 123 456</p>
              <p>+40 770 400 104 (WhatsApp)</p>
            </div>

            <div>
              <p className="font-semibold text-yellow-400 flex items-center gap-2">
                🕒 Program
              </p>
              <p>Luni – Vineri: 08:30 – 17:00</p>
              <p>Sâmbătă – Duminică: Închis</p>
            </div>
          </div>
        </div>

        {/* Jobb oldali térkép */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20">
          <iframe
            src="https://www.google.com/maps?q=46.2918676,23.8168545&z=18&output=embed"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
