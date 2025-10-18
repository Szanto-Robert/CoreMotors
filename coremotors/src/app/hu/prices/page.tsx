"use client";
import React from "react";

type PriceTableProps = {
  title: string;
  columns: string[];
  items: string[][];
};

const PriceTable: React.FC<PriceTableProps> = ({ title, columns, items }) => (
  <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 p-6 mb-10 transition hover:shadow-xl">
    <h2 className="text-2xl font-bold text-center mb-6 text-red-600 border-b pb-2">
      {title}
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm md:text-base text-gray-800">
        <thead>
          <tr className="bg-gray-100">
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
              className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}
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

const PricesHU: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-[#ff4d4d] mb-10 border-b-4 border-[#ff4d4d] inline-block pb-2">
        Szerviz árlista
      </h1>

      {/* Általános szolgáltatások */}
      <PriceTable
        title="Általános szolgáltatások"
        columns={["Szolgáltatás", "Ár (RON)"]}
        items={[
          ["Átvizsgálás / diagnosztika", "100 RON"],
          ["SUV, JEEP (első tengely)", "150 RON"],
          ["SUV, JEEP (hátsó tengely)", "120 RON"],
          ["Duster", "110 RON"],
          ["Személyautó (első tengely)", "150 RON"],
          ["Személyautó (hátsó tengely)", "100 RON"],
          ["Kisteherautó (500–1000 kg)", "175 RON"],
          ["Kisteherautó (első + hátsó tengely)", "300 RON"],
          ["Kisteherautó (személy / áruszállító)", "175 RON"],
          ["Nagy haszongépjármű", "250 RON"],
          ["Kormánymechanizmus lazítás", "50 RON"],
        ]}
      />

      {/* Fékrendszer */}
      <PriceTable
        title="Fékrendszer"
        columns={["Szolgáltatás", "Többmárkás", "SUV / Haszongépjármű"]}
        items={[
          ["Fékbetét csere / tengelyenként", "80 RON", "110 RON"],
          ["Féktárcsa + betét csere / tengelyenként", "170 RON", "190 RON"],
          ["Fékbetét csere - elektronikus rögzítőfék", "120 RON", "140 RON"],
          ["Féktárcsa + betét csere - elektronikus rögzítőfék", "190 RON", "210 RON"],
          ["Fékpofa csere", "150 RON", "200 RON"],
          ["Fékdob csere", "100 RON", "150 RON"],
          ["Féknyereg csere", "120 RON", "150 RON"],
          ["Fék munkahenger csere", "100 RON", "120 RON"],
          ["Kézifék bowden csere", "90 RON", "110 RON"],
          ["Főfékhenger csere", "250 RON", "300 RON"],
          ["Szervófék pumpa csere", "300 RON", "350 RON"],
          ["Fékcső csere / db", "70 RON", "80 RON"],
          ["Féknyereg tömítéskészlet csere", "150 RON", "150 RON"],
        ]}
      />

      {/* Futómű / Kormányzás */}
      <PriceTable
        title="Futómű és kormányzás"
        columns={["Szolgáltatás", "Többmárkás", "SUV / Haszongépjármű"]}
        items={[
          ["Első lengéscsillapító csere / pár", "200 RON", "250 RON"],
          ["Hátsó lengéscsillapító csere / pár", "120 RON-tól", "150 RON-tól"],
          ["Lengéscsillapító felső tányér csere / pár", "200 RON", "250 RON"],
          ["Első spirálrugó csere / pár", "200 RON", "250 RON"],
          ["Hátsó spirálrugó csere / db", "100 RON", "250 RON"],
          ["Kormányösszekötő rúd csere / db", "75 RON", "100 RON"],
          ["Stabilizátor rúd csere / db", "50 RON", "50 RON"],
          ["Gömbfej csere / db", "50 RON", "55 RON"],
          ["Alsó gömbcsukló csere / db", "50 RON-tól", "75 RON-tól"],
          ["Szegecselt gömbcsukló csere / db", "120 RON", "150 RON"],
          ["Lengőkar csere", "100 RON", "120 RON"],
          ["Lengőkar szilent csere / tengely", "150 RON", "200 RON"],
          ["Hátsó híd szilent csere", "400 RON", "500 RON"],
          ["Hátsó híd csere", "500 RON", "600 RON"],
          ["Stabilizátor szilent csere / db", "75 RON", "90 RON"],
          ["Stabilizátor rúd csere", "150 RON", "200 RON"],
          ["Kormánymű csere", "400 RON", "500 RON"],
          ["Első kerékcsapágy csere", "150 RON", "250 RON"],
          ["Segédkeret szilent csere", "normál - 200 RON", "fém - 300 RON"],
        ]}
      />

      {/* Erőátvitel / Transzmisszió */}
      <PriceTable
        title="Erőátvitel / Transzmisszió"
        columns={["Szolgáltatás", "Többmárkás", "SUV / Haszongépjármű"]}
        items={[
          ["Kuplungkészlet csere", "600 RON", "750 RON"],
          ["Kuplungkészlet + lendkerék csere", "700 RON", "750 RON"],
          ["Féltengely fej csere", "150 RON", "200 RON"],
          ["Féltengely gumiharang csere", "150 RON", "200 RON"],
          ["Féltengely csere", "150 RON-tól", "200 RON-tól"],
          ["Köztes csapágy csere", "200 RON", "250 RON"],
          ["Kardán csukló csere", "150 RON-tól", "170 RON-tól"],
          ["Differenciálmű csere", "450 RON", "550 RON"],
          ["Váltó bak csere", "100 RON", "150 RON"],
          ["Féltengely szimering csere", "150 RON", "200 RON"],
        ]}
      />

      {/* Motor */}
      <PriceTable
        title="Motor"
        columns={["Szolgáltatás", "Többmárkás", "SUV / Haszongépjármű"]}
        items={[
          ["Vezérműszíj csere (elejének bontása nélkül)", "500 RON", "550 RON"],
          ["Vezérműszíj csere (elejének bontásával)", "600 RON", "650 RON"],
          ["Kiegészítő szíj csere", "80 RON", "100 RON"],
          ["Kiegészítő szíj csere (elejének bontásával)", "300 RON", "400 RON"],
          ["Kiegészítő készlet csere (bontás nélkül)", "150 RON", "200 RON"],
          ["Kiegészítő készlet csere (bontással)", "350 RON", "450 RON"],
          ["Tömítés szimering csere", "50 RON", "50 RON"],
          ["Hengerfej tömítés csere", "2200 RON-tól", "2500 RON-tól"],
          ["Szelepfedél tömítés csere (injektor bontás nélkül)", "200 RON", "250 RON"],
          ["Szelepfedél tömítés csere (injektor bontással)", "400 RON", "500 RON"],
          ["Olajteknő csere / tömítés", "150 RON", "200 RON"],
          ["Motortartó bak csere", "100 RON", "120 RON"],
          ["Turbó csere (olaj- és hűtőrendszer tisztítással)", "650 RON", "700 RON"],
          ["EGR szelep csere", "150 RON-tól", "250 RON-tól"],
          ["EGR szelep tisztítás", "180 RON-tól", "280 RON-tól"],
          ["Teljes motorfelújítás", "4000 RON-tól", "4500 RON-tól"],
        ]}
      />

      {/* Elektromos rendszer */}
      <PriceTable
        title="Elektromos rendszer"
        columns={["Szolgáltatás", "Többmárkás", "SUV / Haszongépjármű"]}
        items={[
          ["Gyújtógyertya csere (benzin)", "100 RON-tól", "150 RON-tól"],
          ["Izzítógyertya csere (dízel)", "150 RON-tól", "200 RON-tól"],
          ["Gyújtáskábel csere", "80 RON", "100 RON"],
          ["Gyújtótrafó csere", "100 RON-tól", "120 RON-tól"],
          ["Akkumulátor csere", "100 RON", "120 RON"],
          ["Akkumulátor tesztelés (teszterrel)", "50 RON", "50 RON"],
          ["Generátor csere", "200 RON-tól", "250 RON-tól"],
          ["Indítómotor csere", "200 RON-tól", "250 RON-tól"],
        ]}
      />

      <p className="text-center text-gray-500 text-sm mt-8">
        *Az árak a jármű típusától és állapotától függően változhatnak.
      </p>
    </div>
  );
};

export default PricesHU;
