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
            {columns.map((col, i) => (
              <th key={i} className="px-4 py-2 text-left font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-white/10 ${
                i % 2 === 0 ? "bg-white/5" : "bg-white/0"
              } hover:bg-white/10 transition`}
            >
              {row.map((cell, j) => (
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

const PricesHU: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: "url('/prices-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10 border-b-4 border-yellow-400 inline-block pb-2">
          Szolgáltatások és árak
        </h1>

        {/* Általános szolgáltatások */}
        <PriceTable
          title="Általános vizsgálat és szolgáltatások"
          columns={["Szolgáltatás", "Ár"]}
          items={[
            ["Általános diagnosztika", "100 RON"],
            ["SUV / JEEP (első híd)", "150 RON"],
            ["SUV / JEEP (hátsó híd)", "120 RON"],
            ["DUSTER", "110 RON"],
            ["Személyautó (első híd)", "150 RON"],
            ["Személyautó (hátsó híd)", "100 RON"],
            ["Kishaszongépjármű (500–1000 kg)", "175 RON"],
            ["Kishaszongépjármű (első + hátsó híd)", "300 RON"],
            ["Utasszállító / teherautó", "175 RON"],
            ["Nagyobb haszongépjárművek", "250 RON"],
            ["Kormánymű lazítás / beállítás", "50 RON"],
          ]}
        />

        {/* Fékrendszer */}
        <PriceTable
          title="Fékrendszer árak"
          columns={["Szolgáltatás", "Személyautó", "SUV / Haszongépjármű"]}
          items={[
            ["Fékbetét csere / tengely", "80 RON", "110 RON"],
            ["Féktárcsa + betét csere / tengely", "170 RON", "190 RON"],
            ["Fékbetét csere – elektronikus kézifék", "120 RON", "140 RON"],
            ["Féktárcsa + betét csere – elektronikus kézifék", "190 RON", "210 RON"],
            ["Fékpofa csere", "150 RON", "200 RON"],
            ["Dobfék csere", "100 RON", "150 RON"],
            ["Fékkar / munkahenger csere", "120 RON", "150 RON"],
            ["Fékcső / vezeték csere", "70 RON", "80 RON"],
          ]}
        />

        {/* Futómű / Kormányzás */}
        <PriceTable
          title="Futómű és kormányzás"
          columns={["Szolgáltatás", "Személyautó", "SUV / Haszongépjármű"]}
          items={[
            ["Első lengéscsillapító csere (pár)", "200 RON", "250 RON"],
            ["Hátsó lengéscsillapító csere (pár)", "120 RON", "150 RON"],
            ["Futómű kar / gömbfej csere", "50–120 RON", "75–150 RON"],
            ["Stabilizátor / szilent csere", "75–150 RON", "90–200 RON"],
            ["Kormányösszekötő / kormányrúd csere", "100 RON", "120 RON"],
          ]}
        />

        {/* Sebességváltó / hajtáslánc */}
        <PriceTable
          title="Sebességváltó és hajtáslánc"
          columns={["Szolgáltatás", "Személyautó", "SUV / Haszongépjármű"]}
          items={[
            ["Kuplung csere", "600 RON", "750 RON"],
            ["Kuplung + lendkerék csere", "700 RON", "750 RON"],
            ["Féltengely / gumiharang csere", "150 RON", "200 RON"],
            ["Kardán / csapágy csere", "200 RON", "250 RON"],
          ]}
        />

        {/* Motor */}
        <PriceTable
          title="Motor javítás"
          columns={["Szolgáltatás", "Személyautó", "SUV / Haszongépjármű"]}
          items={[
            ["Vezérműszíj csere (egyszerű)", "500 RON", "550 RON"],
            ["Vezérműszíj csere (komplex)", "600 RON", "650 RON"],
            ["Kiegészítő szíj csere", "80 RON", "100 RON"],
            ["Szelepfedél tömítés csere", "200–400 RON", "250–500 RON"],
            ["Motorbak csere", "100 RON", "120 RON"],
            ["Turbó csere", "650 RON", "700 RON"],
          ]}
        />

        {/* Elektromos rendszer */}
        <PriceTable
          title="Elektromos rendszer"
          columns={["Szolgáltatás", "Személyautó", "SUV / Haszongépjármű"]}
          items={[
            ["Gyújtógyertya csere", "100 RON", "150 RON"],
            ["Izzítógyertya csere", "150 RON", "200 RON"],
            ["Akkumulátor csere", "100 RON", "120 RON"],
            ["Generátor / indítómotor csere", "200 RON", "250 RON"],
          ]}
        />

        <p className="text-center text-yellow-400 text-sm mt-8">
          *Az árak a jármű típusától és állapotától függően változhatnak.
        </p>
      </div>
    </section>
  );
};

export default PricesHU;
