"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // detect current language from URL prefix
  const lang = pathname.startsWith("/hu")
    ? "hu"
    : pathname.startsWith("/en")
    ? "en"
    : "ro"; // default

  // build URLs with the same language prefix
  const localizedPath = (path: string) => `/${lang}${path}`;

  // multilingual labels for each menu item
  const labels = {
    hu: {
      home: "Főoldal",
      about: "Rólunk",
      services: "Szolgáltatások",
      gallery: "Galéria",
      prices: "Árak",
      contact: "Kapcsolat",
    },
    ro: {
      home: "Acasă",
      about: "Despre noi",
      services: "Servicii",
      gallery: "Galerie",
      prices: "Prețuri",
      contact: "Contact",
    },
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      prices: "Prices",
      contact: "Contact",
    },
  };

  const t = labels[lang];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2 md:px-6 md:py-3">
        {/* LOGO */}
        <Link href={localizedPath("")} className="flex items-center gap-2">
          <Image
            src="/coremotors-logo.png"
            alt="CoreMotors logo"
            width={70}
            height={30}
            className="object-contain"
            priority
          />
          <span className="font-bold text-base md:text-lg text-blue-700">
            CoreMotors
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href={localizedPath("")}>{t.home}</Link>
          <Link href={localizedPath("/about")}>{t.about}</Link>
          <Link href={localizedPath("/services")}>{t.services}</Link>
          <Link href={localizedPath("/gallery")}>{t.gallery}</Link>
          <Link href={localizedPath("/prices")}>{t.prices}</Link>
          <Link href={localizedPath("/contact")}>{t.contact}</Link>
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col space-y-3 px-6 py-4 text-gray-700 font-medium">
            <Link href={localizedPath("")} onClick={() => setMenuOpen(false)}>
              {t.home}
            </Link>
            <Link href={localizedPath("/about")} onClick={() => setMenuOpen(false)}>
              {t.about}
            </Link>
            <Link href={localizedPath("/services")} onClick={() => setMenuOpen(false)}>
              {t.services}
            </Link>
            <Link href={localizedPath("/gallery")} onClick={() => setMenuOpen(false)}>
              {t.gallery}
            </Link>
            <Link href={localizedPath("/prices")} onClick={() => setMenuOpen(false)}>
              {t.prices}
            </Link>
            <Link href={localizedPath("/contact")} onClick={() => setMenuOpen(false)}>
              {t.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
