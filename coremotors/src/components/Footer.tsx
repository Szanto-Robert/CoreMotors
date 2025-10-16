import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="mb-4 text-sm leading-relaxed">
            Ez a projekt az Európai Unió támogatásával valósul meg.
          </p>
          <div className="flex items-center gap-4">
            <Image src="/eu-logo.png" alt="EU logó" width={100} height={70} />
            <Image
              src="/szechenyi-logo.png"
              alt="Széchenyi 2020 logó"
              width={120}
              height={70}
            />
          </div>
        </div>
        <div className="text-sm text-right space-y-1">
          <p>&copy; {new Date().getFullYear()} CoreMotors Kft.</p>
          <Link href="/privacy" className="underline text-blue-200">
            Adatvédelmi tájékoztató
          </Link>
        </div>
      </div>
    </footer>
  );
}
