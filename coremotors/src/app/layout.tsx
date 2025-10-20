import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollManager from "@/components/ScrollManager"; // 👈 ezt importáljuk külön

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CoreMotors | Servicii auto profesionale în mediul rural",
  description:
    "CoreMotors oferă servicii profesionale de reparații și întreținere auto în mediul rural din județul Alba.",
  keywords:
    "atelier auto, reparații auto, service auto, FEADR, CoreMotors, întreținere mașini, mecanic auto",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "CoreMotors" }],
  openGraph: {
    title: "CoreMotors | Atelier auto modern",
    description:
      "Atelier auto profesional în Lopadea Noua, Alba.",
    url: "https://coremotors.ro",
    siteName: "CoreMotors",
    images: ["/coremotors-logo.png"],
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${inter.className} bg-transparent text-gray-900`}>
        <ScrollManager /> {/* 👈 Külön komponensként hívjuk meg */}
        <Header />
        <main className="min-h-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
