export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Servicii</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Atelierul auto CoreMotors oferă servicii complete de întreținere și reparații auto.
        Punem accent pe calitate, seriozitate și satisfacția clientului.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Diagnoză computerizată</h3>
          <p className="text-gray-600 text-sm">
            Identificăm rapid problemele mașinii tale cu echipamente moderne de diagnoză.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Schimb ulei și filtre</h3>
          <p className="text-gray-600 text-sm">
            Asigurăm întreținerea regulată a motorului prin schimbarea uleiului și filtrelor.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Reparații mecanice</h3>
          <p className="text-gray-600 text-sm">
            Efectuăm reparații pentru toate mărcile auto – frâne, ambreiaj, suspensie, transmisie.
          </p>
        </div>
      </div>
    </section>
  );
}
