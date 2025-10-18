import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600 mb-8">
          Politica de Confidențialitate
        </h1>

        <p className="mb-4">
          Această politică explică modul în care <span className="font-semibold">CoreMotors </span> 
          colectează, folosește și protejează informațiile personale ale vizitatorilor și clienților
          care utilizează site-ul nostru web.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Date colectate</h2>
        <p className="mb-4">
          Prin formularele de contact și rezervare, putem colecta următoarele date personale:
          nume, adresă de e-mail, număr de telefon și mesajul transmis de dumneavoastră.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Scopul colectării</h2>
        <p className="mb-4">
          Datele sunt utilizate exclusiv pentru a răspunde solicitărilor și programărilor
          primite de la clienți, precum și pentru a îmbunătăți serviciile noastre.
          Nu folosim datele în scopuri de marketing fără consimțământul dumneavoastră.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Stocarea și securitatea datelor</h2>
        <p className="mb-4">
          Informațiile sunt stocate în siguranță și accesul la ele este limitat doar personalului
          autorizat. Nu transmitem datele către terți fără acordul explicit al utilizatorului.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. Drepturile utilizatorilor</h2>
        <p className="mb-4">
          Conform Regulamentului (UE) 2016/679 (GDPR), aveți dreptul de a solicita accesul, 
          rectificarea sau ștergerea datelor personale. Pentru orice solicitare, 
          ne puteți contacta la adresa: <a href="mailto:coremotors@gmail.com" className="text-red-600 underline">coremotors@gmail.com</a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Cookie-uri</h2>
        <p className="mb-4">
          Site-ul nostru poate folosi cookie-uri pentru a îmbunătăți experiența utilizatorului.
          Puteți alege să dezactivați cookie-urile din setările browserului.
        </p>

        <p className="mt-8 text-sm text-gray-600 italic">
          Ultima actualizare: Octombrie 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
