export default function PricesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Prices</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        We offer professional services at fair and transparent prices.
        Prices may vary depending on the vehicle type and job complexity.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl shadow-md">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Service</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-right">Estimated Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Oil & Filter Change</td>
              <td className="py-3 px-4">Motor oil and filter replacement.</td>
              <td className="py-3 px-4 text-right">from 250 RON</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Computer Diagnostics</td>
              <td className="py-3 px-4">Complete electronic system check.</td>
              <td className="py-3 px-4 text-right">100 RON</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Brake Repair</td>
              <td className="py-3 px-4">Inspection and replacement of brake pads/discs.</td>
              <td className="py-3 px-4 text-right">from 150 RON</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Suspension & Steering</td>
              <td className="py-3 px-4">Shock absorber, arm, joint, and tie-rod repairs.</td>
              <td className="py-3 px-4 text-right">from 200 RON</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
