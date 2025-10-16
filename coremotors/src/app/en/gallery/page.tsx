export default function GalleryPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Gallery</h1>
      <p className="text-gray-700 text-lg mb-8">
        A look inside our workshop and the vehicles we’ve worked on.  
        Quality, precision, and passion in every repair.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        <img
          src="/gallery1.jpg"
          alt="Car in service"
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
        <img
          src="/gallery2.jpg"
          alt="Mechanic working"
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
        <img
          src="/gallery3.jpg"
          alt="Garage interior"
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
