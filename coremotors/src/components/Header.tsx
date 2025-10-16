import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="font-bold text-xl text-blue-700">
          CoreMotors
        </Link>
        <div className="space-x-6 text-gray-700">
          <Link href="/">Főoldal</Link>
          <Link href="/about">Rólunk</Link>
          <Link href="/contact">Kapcsolat</Link>
          <Link href="/privacy">Adatvédelem</Link>
        </div>
      </nav>
    </header>
  );
}
