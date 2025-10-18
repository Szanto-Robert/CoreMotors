import React from "react";

const PrivacyPolicyHU = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600 mb-8">
          Adatvédelmi nyilatkozat
        </h1>

        <p className="mb-4">
          Ez a dokumentum bemutatja, hogy a <span className="font-semibold">CoreMotors </span> 
          hogyan gyűjti, kezeli és védi a weboldalunkat használó látogatók és ügyfelek személyes adatait.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Gyűjtött adatok</h2>
        <p className="mb-4">
          Az online kapcsolatfelvételi és időpontfoglaló űrlapokon keresztül az alábbi adatokat gyűjthetjük:
          név, e-mail cím, telefonszám és az Ön által megadott üzenet.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Az adatgyűjtés célja</h2>
        <p className="mb-4">
          Az adatok kizárólag az ügyfelek megkereséseinek megválaszolására, időpontok egyeztetésére,
          valamint szolgáltatásaink fejlesztésére szolgálnak.  
          Az adatokat nem használjuk marketingcélokra az Ön előzetes hozzájárulása nélkül.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Az adatok tárolása és biztonsága</h2>
        <p className="mb-4">
          Az adatokat biztonságosan tároljuk, és azokhoz kizárólag a felhatalmazott személyzet férhet hozzá.
          Harmadik fél számára az adatokat nem továbbítjuk az Ön kifejezett engedélye nélkül.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. Az érintettek jogai</h2>
        <p className="mb-4">
          A 2016/679/EU rendelet (GDPR) értelmében Ön jogosult az adataihoz való hozzáférést kérni, 
          azok módosítását vagy törlését igényelni.  
          Ezzel kapcsolatban keressen minket az alábbi e-mail címen:{" "}
          <a href="mailto:coremotors@gmail.com" className="text-red-600 underline">
            coremotors@gmail.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Cookie-k használata</h2>
        <p className="mb-4">
          A weboldal sütiket (cookie-kat) használhat a felhasználói élmény javítása érdekében.
          A sütik használatát a böngésző beállításaiban bármikor letilthatja.
        </p>

        <p className="mt-8 text-sm text-gray-600 italic">
          Utolsó frissítés: 2025. október
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyHU;
