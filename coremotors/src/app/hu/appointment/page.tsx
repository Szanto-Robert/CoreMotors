"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function AppointmentHU() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_m0k4nzd";
    const templateID = "template_0vk8umi";
    const userID = "lq7QFMJXHXYtBqDT2";

    emailjs
      .send(serviceID, templateID, form, userID)
      .then(() => {
        setSent(true);
        setForm({ name: "", phone: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setError("Az üzenet küldése nem sikerült. Kérjük, próbáld újra később.");
      });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/appointment-bg.png')" }}
    >
      {/* Sötét overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 mx-4 text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 text-center">
          Időpontfoglalás
        </h1>
        <p className="text-gray-300 mb-8 text-center">
          Töltsd ki az alábbi űrlapot, és hamarosan felvesszük veled a kapcsolatot.
        </p>

        {sent ? (
          <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg text-center">
            Az űrlapot sikeresen elküldted! Hamarosan keresni fogunk.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-medium mb-1 text-[#ff4d4d]">Név</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 text-black"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-[#ff4d4d]">Telefon</label>
              <input
                type="tel"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 text-black"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-[#ff4d4d]">E-mail</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 text-black"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-[#ff4d4d]">
                Üzenet / Probléma leírása
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 text-black"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Küldés
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
