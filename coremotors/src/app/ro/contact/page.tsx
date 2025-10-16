import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="relative w-screen h-[320px] md:h-[420px] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 overflow-hidden">
        <Image
          src="/contact-bg.png"
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg tracking-wider">
            CONTACT
          </h1>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Contactează-ne
          </h2>

          <div className="space-y-6 text-gray-800">
            <div>
              <p className="font-semibold text-gray-900 flex items-center gap-2">
                📍 Adresă
              </p>
              <p>Str. Tholdalagi Mihaly, nr. 23, Corunca, jud. Mureș</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 flex items-center gap-2">
                📞 Telefon
              </p>
              <p>0742 333 300</p>
              <p>0770 400 104 (Whatsapp)</p>
              <p>0365 882 882</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 flex items-center gap-2">
                🕒 Program
              </p>
              <p>Luni – Vineri: 08:30 – 17:00</p>
              <p>Sâmbătă – Duminică: Închis</p>
            </div>

            <hr className="my-6 border-gray-300" />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=46.2918676,23.8168545&z=18&output=embed"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
