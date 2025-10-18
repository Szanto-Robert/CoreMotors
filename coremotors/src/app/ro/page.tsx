"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section
      className="relative h-[100vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat text-white bg-fixed"
      style={{ backgroundImage: "url('/main-bg.png')" }} // <-- ide jön a képed
    >
      {/* Sötét overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Szöveg a képen */}
      <div className="relative z-10 text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Oferim</h2>
        <h1 className="text-4xl sm:text-6xl font-bold text-yellow-400 mb-4">
          Servicii de calitate <br /> pentru mașina ta
        </h1>
        <p className="text-gray-200 mb-8">
          Experiență vastă în domeniu
        </p>

        <Link
          href="/ro/contact"
          className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 hover:text-black transition"
        >
          CONTACTEAZĂ-NE!
        </Link>
      </div>

      {/* Navigáció nyilak (opcionális, ha slideshow-t tervezel később) */}
      {/* <button className="absolute left-4 text-white text-3xl">&#8249;</button>
      <button className="absolute right-4 text-white text-3xl">&#8250;</button> */}
    </section>
  );
}
