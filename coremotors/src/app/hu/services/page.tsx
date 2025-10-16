export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Szolgáltatások</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        A CoreMotors autószerviz teljes körű karbantartási és javítási szolgáltatásokat kínál.
        Fontos számunkra a minőség, a megbízhatóság és az ügyfelek elégedettsége.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Számítógépes diagnosztika</h3>
          <p className="text-gray-600 text-sm">
            Modern diagnosztikai eszközökkel gyorsan feltárjuk a hibákat.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Olaj- és szűrőcsere</h3>
          <p className="text-gray-600 text-sm">
            Gondoskodunk a motor rendszeres karbantartásáról olaj- és szűrőcserével.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Mechanikai javítások</h3>
          <p className="text-gray-600 text-sm">
            Fék, kuplung, futómű és váltó javítás minden autómárkához.
          </p>
        </div>
      </div>
    </section>
  );
}
