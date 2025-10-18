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

const PricesEN: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-[#ff4d4d] mb-10 border-b-4 border-[#ff4d4d] inline-block pb-2">
        Service Price List
      </h1>

      {/* General Services */}
      <PriceTable
        title="General Services"
        columns={["Service", "Price (RON)"]}
        items={[
          ["Inspection / Diagnostic", "100 RON"],
          ["SUV, JEEP (front axle)", "150 RON"],
          ["SUV, JEEP (rear axle)", "120 RON"],
          ["Duster", "110 RON"],
          ["Passenger car (front axle)", "150 RON"],
          ["Passenger car (rear axle)", "100 RON"],
          ["Van (500–1000 kg)", "175 RON"],
          ["Van (front + rear axle)", "300 RON"],
          ["Van (passenger / cargo)", "175 RON"],
          ["Large van", "250 RON"],
          ["Steering mechanism freeing", "50 RON"],
        ]}
      />

      {/* Brake System */}
      <PriceTable
        title="Brake System"
        columns={["Service", "Multibrand", "SUV / Utility Vehicle"]}
        items={[
          ["Brake pad replacement / axle", "80 RON", "110 RON"],
          ["Disc + pad replacement / axle", "170 RON", "190 RON"],
          ["Brake pad replacement - electronic parking", "120 RON", "140 RON"],
          ["Disc + pad replacement - electronic parking", "190 RON", "210 RON"],
          ["Brake shoe replacement", "150 RON", "200 RON"],
          ["Brake drum replacement", "100 RON", "150 RON"],
          ["Brake caliper replacement", "120 RON", "150 RON"],
          ["Brake slave cylinder replacement", "100 RON", "120 RON"],
          ["Handbrake cable replacement", "90 RON", "110 RON"],
          ["Master cylinder replacement", "250 RON", "300 RON"],
          ["Brake servo pump replacement", "300 RON", "350 RON"],
          ["Brake hose replacement / piece", "70 RON", "80 RON"],
          ["Front brake caliper seal replacement", "150 RON", "150 RON"],
        ]}
      />

      {/* Suspension / Steering */}
      <PriceTable
        title="Suspension / Steering"
        columns={["Service", "Multibrand", "SUV / Utility Vehicle"]}
        items={[
          ["Front shock absorber replacement / set", "200 RON", "250 RON"],
          ["Rear shock absorber replacement / set", "from 120 RON", "from 150 RON"],
          ["Shock absorber top mount replacement / set", "200 RON", "250 RON"],
          ["Front coil spring replacement / set", "200 RON", "250 RON"],
          ["Rear coil spring replacement / piece", "100 RON", "250 RON"],
          ["Tie rod end replacement / piece", "75 RON", "100 RON"],
          ["Stabilizer link replacement / piece", "50 RON", "50 RON"],
          ["Steering rod end replacement / piece", "50 RON", "55 RON"],
          ["Ball joint replacement / piece", "from 50 RON", "from 75 RON"],
          ["Riveted ball joint replacement / piece", "120 RON", "150 RON"],
          ["Control arm replacement", "100 RON", "120 RON"],
          ["Control arm bushing replacement / axle", "150 RON", "200 RON"],
          ["Rear axle bushing replacement", "400 RON", "500 RON"],
          ["Rear axle replacement", "500 RON", "600 RON"],
          ["Stabilizer bar bushing replacement / piece", "75 RON", "90 RON"],
          ["Stabilizer bar replacement", "150 RON", "200 RON"],
          ["Steering rack replacement", "400 RON", "500 RON"],
          ["Front wheel bearing replacement", "150 RON", "250 RON"],
          ["Engine mount bushing replacement", "standard - 200 RON", "metal - 300 RON"],
        ]}
      />

      {/* Transmission / Drivetrain */}
      <PriceTable
        title="Transmission / Drivetrain"
        columns={["Service", "Multibrand", "SUV / Utility Vehicle"]}
        items={[
          ["Clutch kit replacement", "600 RON", "750 RON"],
          ["Clutch kit + flywheel replacement", "700 RON", "750 RON"],
          ["CV joint replacement", "150 RON", "200 RON"],
          ["CV boot replacement", "150 RON", "200 RON"],
          ["Driveshaft replacement", "from 150 RON", "from 200 RON"],
          ["Intermediate bearing replacement", "200 RON", "250 RON"],
          ["Cardan flange replacement", "from 150 RON", "from 170 RON"],
          ["Differential replacement", "450 RON", "550 RON"],
          ["Gearbox mount replacement", "100 RON", "150 RON"],
          ["Driveshaft seal replacement", "150 RON", "200 RON"],
        ]}
      />

      {/* Engine */}
      <PriceTable
        title="Engine"
        columns={["Service", "Multibrand", "SUV / Utility Vehicle"]}
        items={[
          ["Timing kit replacement - without front disassembly", "500 RON", "550 RON"],
          ["Timing kit replacement - with front disassembly", "600 RON", "650 RON"],
          ["Accessory belt replacement", "80 RON", "100 RON"],
          ["Accessory belt replacement - with front disassembly", "300 RON", "400 RON"],
          ["Accessory kit replacement - without front disassembly", "150 RON", "200 RON"],
          ["Accessory kit replacement - with front disassembly", "350 RON", "450 RON"],
          ["Timing seal replacement (+ timing labor)", "50 RON", "50 RON"],
          ["Head gasket replacement", "from 2200 RON", "from 2500 RON"],
          ["Valve cover gasket replacement (without injector removal)", "200 RON", "250 RON"],
          ["Valve cover gasket replacement (with injector removal)", "400 RON", "500 RON"],
          ["Oil pan replacement / sealing", "150 RON", "200 RON"],
          ["Engine mount replacement", "100 RON", "120 RON"],
          ["Turbocharger replacement (including lubrication & cooling cleaning)", "650 RON", "700 RON"],
          ["EGR valve replacement", "from 150 RON", "from 250 RON"],
          ["EGR valve cleaning", "from 180 RON", "from 280 RON"],
          ["Complete engine overhaul", "from 4000 RON", "from 4500 RON"],
        ]}
      />

      {/* Electrical */}
      <PriceTable
        title="Electrical System"
        columns={["Service", "Multibrand", "SUV / Utility Vehicle"]}
        items={[
          ["Spark plug replacement (petrol)", "from 100 RON", "from 150 RON"],
          ["Glow plug replacement (diesel)", "from 150 RON", "from 200 RON"],
          ["Ignition wire replacement", "80 RON", "100 RON"],
          ["Ignition coil replacement", "from 100 RON", "from 120 RON"],
          ["Battery replacement", "100 RON", "120 RON"],
          ["Battery test (with tester)", "50 RON", "50 RON"],
          ["Alternator replacement", "from 200 RON", "from 250 RON"],
          ["Starter motor replacement", "from 200 RON", "from 250 RON"],
        ]}
      />

      <p className="text-center text-gray-500 text-sm mt-8">
        *Prices may vary depending on the vehicle model and condition.
      </p>
    </div>
  );
};

export default PricesEN;
