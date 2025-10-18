"use client";

import Link from "next/link";

export default function HomeHeroEN() {
  return (
    <section
      className="relative h-[100vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat text-white bg-fixed"
      style={{ backgroundImage: "url('/main-bg.png')" }} // <-- background image
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text on image */}
      <div className="relative z-10 text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Reliability and professionalism
        </h2>
        <h1 className="text-4xl sm:text-6xl font-bold text-yellow-400 mb-4">
          Quality services <br /> for your car
        </h1>
        <p className="text-gray-200 mb-8">
          Many years of experience in auto repair
        </p>

        <Link
          href="/en/contact"
          className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 hover:text-black transition"
        >
          CONTACT US!
        </Link>
      </div>
    </section>
  );
}
