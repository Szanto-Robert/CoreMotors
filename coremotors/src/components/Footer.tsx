  "use client";

  import Image from "next/image";
  import Link from "next/link";
  import { usePathname, useRouter } from "next/navigation";
  import LanguageSwitcher from "@/components/LanguageSwitcher";
  import { useEffect, useState } from "react";


  export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();
    const [lang, setLang] = useState<string>("ro");

    useEffect(() => {
    if (pathname) {
      const langSegment = pathname.split("/")[1];
      if (langSegment === "hu" || langSegment === "ro" || langSegment === "en") {
        setLang(langSegment);
      }
    }
  }, [pathname]);

    // Egyszerű nyelvváltás – /hu, /ro, /en útvonalakra
    const changeLanguage = (lang: string) => {
    if (pathname.startsWith("/hu") || pathname.startsWith("/ro") || pathname.startsWith("/en")) {
      const newPath = "/" + lang + pathname.slice(3);
      router.push(newPath, { scroll: false }); // 👈 fontos!
    } else {
      router.push("/" + lang, { scroll: false }); // 👈 fontos!
    }
  };

    return (
      <footer className="bg-black text-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6 py-12">
          {/* 1️⃣ LOGÓ + LEÍRÁS */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/coremotors-logo.png"
                alt="CoreMotors logo"
                width={130}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {pathname.startsWith("/hu")
                  ? "Tapasztalja meg a minőséget és a profizmust a CoreMotors műhelyében. Korszerű technológiával és tapasztalt kezekkel dolgozunk."
                  : pathname.startsWith("/en")
                  ? "Experience quality and professionalism at CoreMotors. We care for your car using modern technology and skilled hands."
                  : "Experimentează calitatea și profesionalismul la CoreMotors. Tehnologie modernă și mâini pricepute pentru mașina ta."}
              </p>

          </div>

          {/* 2️⃣ CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-3 tracking-wide">
            {pathname.startsWith("/hu") && "KAPCSOLAT"}
            {pathname.startsWith("/ro") && "CONTACT"}
            {pathname.startsWith("/en") && "CONTACT"}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              📍{" "}
              {pathname.startsWith("/hu") && "Fő utca 219., Lopadea Nouă, Alba megye"}
              {pathname.startsWith("/ro") && "Str. Principală nr. 219, Lopadea Nouă, jud. Alba"}
              {pathname.startsWith("/en") && "219 Main Street, Lopadea Nouă, Alba County"}
            </li>
            <li>📞 +40 752 160 800</li>
            <li>📱 +40 752 160 800 (WhatsApp)</li>
            <li>✉️ coremotors.service@gmail.com</li>
          </ul>
        </div>


          {/* 3️⃣ PROGRAM */}
          <div>
            <h4 className="text-white font-semibold mb-3 tracking-wide">
              {pathname.startsWith("/hu") && "NYITVATARTÁS"}
              {pathname.startsWith("/ro") && "PROGRAM"}
              {pathname.startsWith("/en") && "SCHEDULE"}
            </h4>
            <p className="text-sm text-gray-300">
              {pathname.startsWith("/hu") && (
                <>
                  Hétfő – Péntek: <br />
                  <span className="text-gray-100">08:30 – 17:00</span>
                  <br />
                  Szombat – Vasárnap: <br />
                  <span className="text-gray-100">Zárva</span>
                </>
              )}
              {pathname.startsWith("/ro") && (
                <>
                  Luni – Vineri: <br />
                  <span className="text-gray-100">08:30 – 17:00</span>
                  <br />
                  Sâmbătă – Duminică: <br />
                  <span className="text-gray-100">Închis</span>
                </>
              )}
              {pathname.startsWith("/en") && (
                <>
                  Monday – Friday: <br />
                  <span className="text-gray-100">08:30 – 17:00</span>
                  <br />
                  Saturday – Sunday: <br />
                  <span className="text-gray-100">Closed</span>
                </>
              )}
            </p>
          </div>

          {/* 4️⃣ UTILE */}
          <div>
            <h4 className="text-white font-semibold mb-3 tracking-wide">
              {pathname.startsWith("/hu") && "HASZNOS"}
              {pathname.startsWith("/ro") && "UTILE"}
              {pathname.startsWith("/en") && "USEFUL"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${lang}/privacy`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {pathname.startsWith("/hu") && "Adatvédelmi nyilatkozat"}
                  {pathname.startsWith("/ro") && "Politica de Confidențialitate"}
                  {pathname.startsWith("/en") && "Privacy Policy"}
                </Link>
              </li>
              <li>
                <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  ANPC
                </a>
              </li>
            </ul>

            {/* ANPC IMAGES */}
            <div className="flex gap-3 mt-4">
              <img
                src="/anpc-sal.png"
                alt="ANPC SAL"
                width={120}
                height={40}
                className="object-contain"
              />
              <img
                src="/anpc-insolventa.png"
                alt="ANPC Insolvență"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* LANGUAGE SWITCHER */}
        <LanguageSwitcher />


        {/* COPYRIGHT */}
        <div className="text-center py-3 text-xs text-gray-500 border-t border-gray-800">
          © {new Date().getFullYear()} CoreMotors SRL — All rights reserved.
        </div>
      </footer>
    );
  }
