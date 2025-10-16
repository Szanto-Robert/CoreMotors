export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Kapcsolat</h2>
      <p className="mb-4 text-gray-700">
        Lépjen kapcsolatba velünk az alábbi elérhetőségeken:
      </p>
      <ul className="text-gray-800 space-y-1">
        <li><strong>Email:</strong> info@coremotors.hu</li>
        <li><strong>Telefon:</strong> +36 30 123 4567</li>
        <li><strong>Cím:</strong> 1111 Budapest, Fejlesztés utca 10.</li>
      </ul>
    </section>
  );
}
