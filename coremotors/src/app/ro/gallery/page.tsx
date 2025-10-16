export default function GalleryPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Galerie</h1>
      <p className="text-gray-700 text-lg mb-8">
        O privire în atelierul nostru și asupra mașinilor la care am lucrat.  
        Calitate, precizie și pasiune în fiecare reparație.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        <img
          src="/gallery1.jpg"
          alt="Mașină în service"
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
        <img
          src="/gallery2.jpg"
          alt="Mecanic lucrând"
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
        <img
          src="/gallery3.jpg"
          alt="Interior atelier"
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
