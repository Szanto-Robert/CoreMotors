import Image from "next/image";

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Innováció az Elektromobilitásban
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            A CoreMotors Kft. az Európai Unió támogatásával új, fenntartható
            elektromos motorfejlesztési projektet valósít meg, amely hozzájárul
            a zöld gazdasági átálláshoz.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            További információ
          </a>
        </div>
        <div>
          <Image
            src="/hero.jpg"
            alt="Elektromobilitás fejlesztés"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
