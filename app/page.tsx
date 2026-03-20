"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">ShadowLab</h1>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#lab">Lab</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold"
        >
          Building AI tools, SaaS & automation systems
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          ShadowLab builds scalable products and systems that turn ideas into real businesses.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="#work" className="bg-white text-black px-6 py-3 rounded-lg">
            View Work
          </a>
          <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-lg">
            Start Project
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["SaaS Development", "AI Automation", "Internal Tools", "IoT Prototyping"].map((service) => (
              <div key={service} className="p-6 border border-gray-800 rounded-xl hover:border-gray-600">
                <h3 className="font-medium">{service}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Scalable production-ready solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold">PhotoBox</h3>
              <p className="text-gray-400 mt-2">
                Automated photo processing SaaS platform.
              </p>
            </div>

            <div className="p-6 border border-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold">Arivu AI</h3>
              <p className="text-gray-400 mt-2">
                AI assistant system for automation workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAB */}
      <section id="lab" className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Lab</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Telegram AI Bot", "Trading Bot", "Worksheet Generator"].map((item) => (
              <div key={item} className="p-6 border border-gray-800 rounded-xl text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-gray-800 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Have an idea? Let’s build it.
        </h2>
        <a href="#contact" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg">
          Start a Project
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
            Start a Project
          </h2>

          <ContactForm />
        </div>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
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
