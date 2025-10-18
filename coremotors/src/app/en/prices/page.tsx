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

const PricesEN: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: "url('/prices-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10 border-b-4 border-yellow-400 inline-block pb-2">
          Service Prices
        </h1>

        <PriceTable
          title="General Inspection & Services"
          columns={["Service", "Price"]}
          items={[
            ["General diagnostics", "100 RON"],
            ["SUV / JEEP (front axle)", "150 RON"],
            ["SUV / JEEP (rear axle)", "120 RON"],
            ["Passenger car (front axle)", "150 RON"],
            ["Passenger car (rear axle)", "100 RON"],
            ["Light utility vehicle (500–1000 kg)", "175 RON"],
            ["Utility vehicle (front + rear axle)", "300 RON"],
          ]}
        />

        <PriceTable
          title="Brake System Prices"
          columns={["Service", "Car", "SUV / Utility"]}
          items={[
            ["Brake pads replacement / axle", "80 RON", "110 RON"],
            ["Brake discs + pads replacement / axle", "170 RON", "190 RON"],
            ["Brake pads replacement – electronic parking brake", "120 RON", "140 RON"],
            ["Brake discs + pads – electronic parking brake", "190 RON", "210 RON"],
            ["Brake shoe replacement", "150 RON", "200 RON"],
            ["Drum replacement", "100 RON", "150 RON"],
          ]}
        />

        <PriceTable
          title="Suspension & Steering"
          columns={["Service", "Car", "SUV / Utility"]}
          items={[
            ["Front shock absorber replacement (set)", "200 RON", "250 RON"],
            ["Rear shock absorber replacement (set)", "120 RON", "150 RON"],
            ["Control arm / ball joint replacement", "100 RON", "150 RON"],
            ["Steering linkage replacement", "100 RON", "120 RON"],
          ]}
        />

        <PriceTable
          title="Transmission & Drivetrain"
          columns={["Service", "Car", "SUV / Utility"]}
          items={[
            ["Clutch replacement", "600 RON", "750 RON"],
            ["Clutch + flywheel replacement", "700 RON", "750 RON"],
            ["Driveshaft / CV joint replacement", "150 RON", "200 RON"],
            ["Bearing replacement", "200 RON", "250 RON"],
          ]}
        />

        <PriceTable
          title="Engine Repairs"
          columns={["Service", "Car", "SUV / Utility"]}
          items={[
            ["Timing belt replacement (simple)", "500 RON", "550 RON"],
            ["Timing belt replacement (complex)", "600 RON", "650 RON"],
            ["Accessory belt replacement", "80 RON", "100 RON"],
            ["Valve cover gasket replacement", "200–400 RON", "250–500 RON"],
            ["Engine mount replacement", "100 RON", "120 RON"],
            ["Turbo replacement", "650 RON", "700 RON"],
          ]}
        />

        <PriceTable
          title="Electrical System"
          columns={["Service", "Car", "SUV / Utility"]}
          items={[
            ["Spark plug replacement", "100 RON", "150 RON"],
            ["Glow plug replacement", "150 RON", "200 RON"],
            ["Battery replacement", "100 RON", "120 RON"],
            ["Alternator / starter replacement", "200 RON", "250 RON"],
          ]}
        />

        <p className="text-center text-yellow-400 text-sm mt-8">
          *Prices may vary depending on vehicle model and condition.
        </p>
      </div>
    </section>
  );
};

export default PricesEN;
