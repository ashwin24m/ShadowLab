"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-wide">ShadowLab</h1>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#lab" className="hover:text-white">Lab</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-24 px-4 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          We Build AI Products <br /> That Actually Scale
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          ShadowLab is an innovation studio building SaaS, automation systems, and AI tools for real-world impact.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#work" className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
            View Work
          </a>
          <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Start Project
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["SaaS Development", "AI Automation", "Internal Tools", "IoT Prototyping"].map((service) => (
              <div key={service} className="p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-white/5 to-transparent hover:scale-105 hover:border-gray-600 transition">
                <h3 className="font-semibold">{service}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  High-performance, scalable solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Selected Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition bg-gradient-to-b from-white/5 to-transparent">
              <h3 className="text-xl font-semibold">PhotoBox</h3>
              <p className="text-gray-400 mt-2">
                Automated image processing SaaS for fast content workflows.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition bg-gradient-to-b from-white/5 to-transparent">
              <h3 className="text-xl font-semibold">Arivu AI</h3>
              <p className="text-gray-400 mt-2">
                AI assistant system to automate repetitive tasks and workflows.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LAB */}
      <section id="lab" className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Lab Experiments</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Telegram AI Bot", "Trading Bot", "Worksheet Generator"].map((item) => (
              <div key={item} className="p-6 rounded-xl border border-gray-800 bg-white/5 hover:bg-white/10 transition">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 border-t border-gray-800 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Let’s Build Something Valuable
        </h2>
        <a href="#contact" className="mt-6 inline-block bg-white text-black px-8 py-4 rounded-lg hover:scale-105 transition">
          Start a Project
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Start a Project
          </h2>

          <ContactForm />
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917483698042"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-xl"
      >
        WhatsApp
      </a>

    </main>
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

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      }),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent!");
      form.reset();
    } else {
      alert("Error sending message");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" placeholder="Your Name" className="p-3 border border-gray-700 bg-black rounded" required />
      <input name="email" type="email" placeholder="Your Email" className="p-3 border border-gray-700 bg-black rounded" required />
      <textarea name="message" placeholder="Tell me about your project..." className="p-3 border border-gray-700 bg-black rounded" required />
      <button className="bg-white text-black py-3 rounded">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
