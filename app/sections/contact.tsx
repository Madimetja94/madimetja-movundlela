"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Contact Me
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-300
          bg-white text-black
          dark:bg-zinc-900 dark:text-white
          dark:border-zinc-700"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-300
          bg-white text-black
          dark:bg-zinc-900 dark:text-white
          dark:border-zinc-700"
          required
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-300
          bg-white text-black
          dark:bg-zinc-900 dark:text-white
          dark:border-zinc-700"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2
          ${loading ? "opacity-70 cursor-not-allowed" : ""}
          bg-black text-white dark:bg-white dark:text-black`}
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin dark:border-black"></div>
          )}

          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <motion.p
            className="text-green-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
