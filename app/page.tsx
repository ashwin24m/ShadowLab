"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">ShadowLab</h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Build AI Products <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                That Actually Scale
              </span>
            </motion.h1>

            <p className="mt-6 text-gray-400 max-w-lg">
              ShadowLab builds SaaS platforms, automation systems, and AI tools
              designed to generate real business value.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition">
                Start Project
              </a>
              <a href="#work" className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                View Work
              </a>
            </div>
          </div>

          {/* RIGHT INTERACTIVE PANEL */}
          <InteractivePanel />

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["SaaS Development", "AI Automation", "Custom Internal Tools"].map((s) => (
              <div key={s} className="p-6 border border-gray-800 rounded-xl bg-white/5 hover:bg-white/10 transition hover:scale-105">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Selected Work</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <a href="/work/photobox">
              <div className="p-6 border border-gray-800 rounded-xl hover:border-gray-600 transition">
                <h3 className="text-xl font-semibold">PhotoBox</h3>
                <p className="text-gray-400 mt-2">Automated image processing SaaS</p>
              </div>
            </a>

            <div className="p-6 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold">Arivu AI</h3>
              <p className="text-gray-400 mt-2">AI assistant system</p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Let’s Build Something</h2>
        <ContactForm />
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919876543210"
        className="fixed bottom-6 right-6 bg-green-500 px-6 py-3 rounded-full shadow-xl hover:scale-110 transition"
      >
        WhatsApp
      </a>

    </main>
  );
}

/* INTERACTIVE PANEL */
function InteractivePanel() {
  const steps = [
    "Understanding problem...",
    "Designing system...",
    "Running AI model...",
    "Generating output...",
    "Done ✔"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>

      <div className="relative bg-black border border-gray-800 rounded-2xl p-6 shadow-2xl w-full max-w-md">

        <p className="text-sm text-gray-400 mb-4">AI System Simulation</p>

        <div className="bg-gray-900 rounded-lg p-4 h-40 flex items-center justify-center text-gray-300 text-sm">
          {steps[index]}
        </div>

        <div className="mt-4 flex gap-2">
          <div className="h-2 w-2 bg-green-400 rounded-full"></div>
          <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
          <div className="h-2 w-2 bg-red-400 rounded-full"></div>
        </div>

      </div>
    </motion.div>
  );
}

/* CONTACT FORM */
function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      }),
    });

    alert("Message sent!");
    form.reset();
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <input name="name" placeholder="Name" className="p-3 bg-black border border-gray-700 rounded" required />
      <input name="email" type="email" placeholder="Email" className="p-3 bg-black border border-gray-700 rounded" required />
      <textarea name="message" placeholder="Project details..." className="p-3 bg-black border border-gray-700 rounded" required />
      <button className="bg-white text-black py-3 rounded">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
