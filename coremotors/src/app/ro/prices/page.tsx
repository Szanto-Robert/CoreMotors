export default function PricesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Prețuri</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Oferim servicii profesionale la prețuri corecte și transparente.
        Prețurile pot varia în funcție de modelul mașinii și complexitatea lucrării.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl shadow-md">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Serviciu</th>
              <th className="py-3 px-4 text-left">Descriere</th>
              <th className="py-3 px-4 text-right">Preț orientativ</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Schimb ulei și filtre</td>
              <td className="py-3 px-4">Înlocuirea uleiului de motor și a filtrelor corespunzătoare.</td>
              <td className="py-3 px-4 text-right">de la 250 RON</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Diagnoză computerizată</td>
              <td className="py-3 px-4">Verificare completă a sistemelor electronice ale mașinii.</td>
              <td className="py-3 px-4 text-right">100 RON</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Reparații frâne</td>
              <td className="py-3 px-4">Verificare și înlocuire plăcuțe / discuri de frână.</td>
              <td className="py-3 px-4 text-right">de la 150 RON</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-4 font-medium">Suspensie & direcție</td>
              <td className="py-3 px-4">Reparații amortizoare, brațe, pivoți, capete de bară.</td>
              <td className="py-3 px-4 text-right">de la 200 RON</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
