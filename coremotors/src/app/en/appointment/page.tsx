"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function AppointmentPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_m0k4nzd";     // same as Romanian version
    const templateID = "template_0vk8umi";
    const userID = "lq7QFMJXHXYtBqDT2";     // your Public Key

    emailjs
      .send(serviceID, templateID, form, userID)
      .then(() => {
        setSent(true);
        setForm({ name: "", phone: "", email: "", message: "" });
      })
      .catch(() => setError("Failed to send. Please try again later."));
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Book an Appointment</h1>
      <p className="text-gray-700 mb-8">
        Fill out the form below and we will contact you soon to confirm your booking.
      </p>

      {sent ? (
        <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg text-center">
          Your message has been sent successfully! We’ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md p-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Phone</label>
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
            <label className="block font-medium mb-1">Message / Problem details</label>
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
            Send
          </button>
        </form>
      )}
    </section>
  );
}
