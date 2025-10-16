export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Services</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        CoreMotors provides full maintenance and auto repair services.
        We focus on quality, reliability, and customer satisfaction.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Computer Diagnostics</h3>
          <p className="text-gray-600 text-sm">
            We quickly identify car issues using modern diagnostic tools.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Oil & Filter Change</h3>
          <p className="text-gray-600 text-sm">
            Regular maintenance for your engine through oil and filter replacement.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Mechanical Repairs</h3>
          <p className="text-gray-600 text-sm">
            We perform repairs for all car brands – brakes, clutch, suspension, transmission.
          </p>
        </div>
      </div>
    </section>
  );
}
