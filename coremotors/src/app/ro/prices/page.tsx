"use client";
import React from "react";

type PriceTableProps = {
  title: string;
  columns: string[];
  items: string[][];
};

const PriceTable: React.FC<PriceTableProps> = ({ title, columns, items }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 mb-10 transition hover:shadow-xl text-white">
    <h2 className="text-2xl font-bold text-center mb-6 text-yellow-400 border-b border-yellow-400 pb-2">
      {title}
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm md:text-base text-gray-100">
        <thead>
          <tr className="bg-white/10 text-yellow-300">
            {columns.map((col: string, i: number) => (
              <th key={i} className="px-4 py-2 text-left font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((row: string[], i: number) => (
            <tr
              key={i}
              className={`border-t border-white/10 ${
                i % 2 === 0 ? "bg-white/5" : "bg-white/0"
              } hover:bg-white/10 transition`}
            >
              {row.map((cell: string, j: number) => (
                <td key={j} className="px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PricesRO: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: "url('/prices-bg.png')" }} // <-- ide a háttérkép
    >
      {/* sötét overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10 border-b-4 border-yellow-400 inline-block pb-2">
          Prețuri Servicii
        </h1>

      {/* Constatare & Servicii Generale */}
      <PriceTable
        title="Constatare & Servicii Generale"
        columns={["Serviciu", "Preț"]}
        items={[
          ["CONSTATARE", "100 Lei"],
          ["SUV, JEEP (punte față)", "150 Lei"],
          ["SUV, JEEP (punte spate)", "120 Lei"],
          ["DUSTER", "110 Lei"],
          ["AUTOTURISME (punte față)", "150 Lei"],
          ["AUTOTURISME (punte spate)", "100 Lei"],
          ["AUTOUTILITARE (sarcină 500-1000 KG)", "175 Lei"],
          ["AUTOUTILITARE (punte față + spate)", "300 Lei"],
          ["AUTOUTILITARE (persoane, marfă)", "175 Lei"],
          ["AUTOUTILITARE (mari)", "250 Lei"],
          ["DEGRIPARE MECANISM DIRECȚIE", "50 Lei"],
        ]}
      />

      {/* Sistem de Frânare */}
      <PriceTable
        title="Prețuri Sistem de Frânare"
        columns={["Serviciu", "Multimarcă", "SUV / Autoutilitare"]}
        items={[
          ["Înlocuire plăcuțe frână / punte", "80 Lei", "110 Lei"],
          ["Înlocuire discuri + plăcuțe / punte", "170 Lei", "190 Lei"],
          ["Înlocuire plăcuțe frână / punte - parcare electronică", "120 Lei", "140 Lei"],
          ["Înlocuire discuri + plăcuțe / punte - parcare electronică", "190 Lei", "210 Lei"],
          ["Înlocuire saboți frână", "150 Lei", "200 Lei"],
          ["Înlocuire tamburi", "100 Lei", "150 Lei"],
          ["Înlocuire etrier frână", "120 Lei", "150 Lei"],
          ["Înlocuire cilindru receptor frână", "100 Lei", "120 Lei"],
          ["Înlocuire cablu frână de mână", "90 Lei", "110 Lei"],
          ["Înlocuire pompă centrală de frână", "250 Lei", "300 Lei"],
          ["Înlocuire pompă servo-frână", "300 Lei", "350 Lei"],
          ["Înlocuire racord frână / buc", "70 Lei", "80 Lei"],
          ["Înlocuire garnituri etrier frână - față", "150 Lei", "150 Lei"],
        ]}
      />

      {/* Suspensie / Direcție */}
      <PriceTable
        title="Prețuri Suspensie / Direcție"
        columns={["Serviciu", "Multimarcă", "SUV / Autoutilitare"]}
        items={[
          ["Înlocuire amortizoare față / set", "200 Lei", "250 Lei"],
          ["Înlocuire amortizoare spate / set", "de la 120 Lei", "de la 150 Lei"],
          ["Înlocuire flanșă amortizor / set", "200 Lei", "250 Lei"],
          ["Înlocuire arcuri elicoidale față / set", "200 Lei", "250 Lei"],
          ["Înlocuire arcuri elicoidale spate / buc", "100 Lei", "250 Lei"],
          ["Înlocuire bieletă direcție / buc", "75 Lei", "100 Lei"],
          ["Înlocuire bieletă antiruliu / buc", "50 Lei", "50 Lei"],
          ["Înlocuire cap bară / buc", "50 Lei", "55 Lei"],
          ["Înlocuire pivot / buc", "de la 50 Lei", "de la 75 Lei"],
          ["Înlocuire pivot cu nituri / buc", "120 Lei", "150 Lei"],
          ["Înlocuire braț (basculă)", "100 Lei", "120 Lei"],
          ["Înlocuire bucșă basculă / punte", "150 Lei", "200 Lei"],
          ["Înlocuire bucță punte spate", "400 Lei", "500 Lei"],
          ["Înlocuire punte spate", "500 Lei", "600 Lei"],
          ["Înlocuire bucșe bară stabilizatoare / buc", "75 Lei", "90 Lei"],
          ["Înlocuire bară stabilizatoare", "150 Lei", "200 Lei"],
          ["Înlocuire casetă direcție", "400 Lei", "500 Lei"],
          ["Înlocuire rulment roată față", "150 Lei", "250 Lei"],
          ["Înlocuire bucșă cadru motor", "normal - 200 Lei", "metalic - 300 Lei"],
        ]}
      />

      {/* Transmisie / Angrenaje */}
      <PriceTable
        title="Prețuri Transmisie / Angrenaje"
        columns={["Serviciu", "Multimarcă", "SUV / Autoutilitare"]}
        items={[
          ["Înlocuire kit ambreiaj", "600 Lei", "750 Lei"],
          ["Înlocuire kit ambreiaj + volantă", "700 Lei", "750 Lei"],
          ["Înlocuire cap planetară", "150 Lei", "200 Lei"],
          ["Înlocuire burduf planetară", "150 Lei", "200 Lei"],
          ["Înlocuire planetară", "de la 150 Lei", "de la 200 Lei"],
          ["Înlocuire rulment intermediar", "200 Lei", "250 Lei"],
          ["Înlocuire flanșă cardan", "de la 150 Lei", "de la 170 Lei"],
          ["Înlocuire diferențial", "450 Lei", "550 Lei"],
          ["Înlocuire tampon cutie viteze", "100 Lei", "150 Lei"],
          ["Înlocuire simering planetară", "150 Lei", "200 Lei"],
        ]}
      />

      {/* Motor */}
      <PriceTable
        title="Prețuri Motor"
        columns={["Serviciu", "Multimarcă", "SUV / Autoutilitare"]}
        items={[
          ["Înlocuire kit distribuție - fără demontarea ansamblului față", "500 Lei", "550 Lei"],
          ["Înlocuire kit distribuție - cu demontarea ansamblului față", "600 Lei", "650 Lei"],
          ["Înlocuire curea accesorii", "80 Lei", "100 Lei"],
          ["Înlocuire curea accesorii - cu demontarea ansamblului față", "300 Lei", "400 Lei"],
          ["Înlocuire kit accesorii - fără demontarea ansamblului față", "150 Lei", "200 Lei"],
          ["Înlocuire kit accesorii - cu demontarea ansamblului față", "350 Lei", "450 Lei"],
          ["Înlocuire semering distribuție (+ manoperă distribuție)", "50 Lei", "50 Lei"],
          ["Înlocuire garnitură chiuloasă", "de la 2200 Lei", "de la 2500 Lei"],
          ["Înlocuire garnitură capac supape fără demontare injectoare", "200 Lei", "250 Lei"],
          ["Înlocuire garnitură capac supape cu demontare injectoare", "400 Lei", "500 Lei"],
          ["Înlocuire baie ulei / etanșare baie ulei", "150 Lei", "200 Lei"],
          ["Înlocuire tampon motor", "100 Lei", "120 Lei"],
          ["Înlocuire turbină cu curățarea instașației de ungere și răcire", "650 Lei", "700 Lei"],
          ["Înlocuire EGR", "de la 150 Lei", "de la 250 Lei"],
          ["Curățare supapă EGR", "de la 180 Lei", "de la 280 Lei"],
          ["Reparație completă motor", "de la 4000 Lei", "de la 4500 Lei"],
        ]}
      />

      {/* Electrică */}
      <PriceTable
        title="Prețuri Electrică"
        columns={["Serviciu", "Multimarcă", "SUV / Autoutilitare"]}
        items={[
          ["Înlocuire bujii motor benzină", "de la 100 Lei", "de la 150 Lei"],
          ["Înlocuire bujii incandescente", "de la 150 Lei", "de la 200 Lei"],
          ["Înlocuire fișe bujii", "80 Lei", "100 Lei"],
          ["Înlocuire bobină inducție", "de la 100 Lei", "de la 120 Lei"],
          ["Înlocuire baterie", "100 Lei", "120 Lei"],
          ["Test verificare baterie cu tester dedicat", "50 Lei", "50 Lei"],
          ["Înlocuire alternator", "de la 200 Lei", "de la 250 Lei"],
          ["Înlocuire electromotor", "de la 200 Lei", "de la 250 Lei"],
        ]}
      />

      <p className="text-center text-yellow-400 text-sm mt-8">
          *Prețurile pot varia în funcție de modelul și starea vehiculului.
        </p>
      </div>
    </section>
  );
};

export default PricesRO;