"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function AppointmentPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // saját EmailJS adataid (ezeket majd a saját fiókodból másold be)
    const serviceID = "service_m0k4nzd";
    const templateID = "template_0vk8umi";
    const userID = "lq7QFMJXHXYtBqDT2"; // pl. xHk1aDfaSx9...

    emailjs
      .send(serviceID, templateID, form, userID)
      .then(() => {
        setSent(true);
        setForm({ name: "", phone: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setError("A trimiterea a eșuat. Încearcă din nou mai târziu.");
      });
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Programează o vizită</h1>
      <p className="text-gray-700 mb-8">
        Completează formularul de mai jos și te vom contacta în cel mai scurt timp.
      </p>

      {sent ? (
        <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg text-center">
          Formularul a fost trimis cu succes! Vă vom contacta în curând.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Nume</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md p-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Telefon</label>
            <input
              type="tel"
              required
              className="w-full border border-gray-300 rounded-md p-2"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-md p-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Mesaj / Detalii problemă</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>

          {error && <p className="text-red-600">{error}</p>}

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Trimite
          </button>
        </form>
      )}
    </section>
  );
}
