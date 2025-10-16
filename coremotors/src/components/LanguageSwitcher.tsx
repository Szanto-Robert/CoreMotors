"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.startsWith("/hu")
    ? "hu"
    : pathname.startsWith("/en")
    ? "en"
    : "ro"; // default: Romanian

  const changeLanguage = (lang: string) => {
    if (pathname.startsWith("/hu") || pathname.startsWith("/ro") || pathname.startsWith("/en")) {
      const newPath = "/" + lang + pathname.slice(3);
      router.push(newPath, { scroll: false });
    } else {
      router.push("/" + lang, { scroll: false });
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 py-3 border-t border-gray-800 text-sm text-gray-400">
      <button
        onClick={() => changeLanguage("hu")}
        className={`transition ${
          currentLang === "hu"
            ? "text-white font-semibold underline underline-offset-4"
            : "hover:text-white"
        }`}
      >
        🇭🇺 HU
      </button>

      <button
        onClick={() => changeLanguage("ro")}
        className={`transition ${
          currentLang === "ro"
            ? "text-white font-semibold underline underline-offset-4"
            : "hover:text-white"
        }`}
      >
        🇷🇴 RO
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={`transition ${
          currentLang === "en"
            ? "text-white font-semibold underline underline-offset-4"
            : "hover:text-white"
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
