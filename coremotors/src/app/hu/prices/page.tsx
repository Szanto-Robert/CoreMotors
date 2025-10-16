export default function PricesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Árak</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Szolgáltatásainkat korrekt és átlátható árakon kínáljuk.
        Az árak a jármű típusától és a munka összetettségétől függően változhatnak.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl shadow-md">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Szolgáltatás</th>
              <th className="py-3 px-4 text-left">Leírás</th>
              <th className="py-3 px-4 text-right">Irányár</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Olaj- és szűrőcsere</td>
              <td className="py-3 px-4">Motorolaj és szűrők cseréje.</td>
              <td className="py-3 px-4 text-right">250 RON-tól</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Számítógépes diagnosztika</td>
              <td className="py-3 px-4">Teljes elektronikai rendszer ellenőrzése.</td>
              <td className="py-3 px-4 text-right">100 RON</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Fékjavítás</td>
              <td className="py-3 px-4">Fékbetétek / tárcsák ellenőrzése és cseréje.</td>
              <td className="py-3 px-4 text-right">150 RON-tól</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Futómű és kormányzás</td>
              <td className="py-3 px-4">Lengéscsillapítók, karok, gömbfejek javítása.</td>
              <td className="py-3 px-4 text-right">200 RON-tól</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
