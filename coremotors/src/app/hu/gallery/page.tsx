export default function GalleryPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Galéria</h1>
      <p className="text-gray-700 text-lg mb-8">
        Pillantás a műhelyünkbe és az autókba, amelyeken dolgoztunk.  
        Minőség, precizitás és szenvedély minden javításban.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        <img
          src="/gallery1.jpg"
          alt="Autó a műhelyben"
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
        <img
          src="/gallery2.jpg"
          alt="Szerelő munka közben"
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
        <img
          src="/gallery3.jpg"
          alt="Garázs belső nézet"
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
