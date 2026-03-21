"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold tracking-wide">ShadowLab</h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 text-center relative">
        <div className="max-w-3xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Systems that solve <br /> real-world problems
          </motion.h1>

          <p className="mt-6 text-gray-400">
            We design and build SaaS platforms, AI tools, and automation systems
            that are actually used — not just demo projects.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition">
              Start Project
            </a>
            <a href="#work" className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              View Work
            </a>
          </div>

        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold mb-12">Selected Work</h2>

          <div className="space-y-8">

            {/* PHOTOBOX */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur hover:border-white/30 transition"
            >
              <h3 className="text-lg font-semibold">PhotoBox</h3>

              <p className="text-gray-400 mt-2 text-sm">
                Event photo sharing system that removes platform dependency
                and enables seamless access across devices.
              </p>

              <div className="mt-4 flex gap-6 text-sm">
                <a href="/work/photobox" className="underline">Case Study</a>
                <a href="https://photobox.shadowlab.online" target="_blank" className="text-gray-400">
                  Live Product →
                </a>
              </div>
            </motion.div>

            {/* ARIVU */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur hover:border-white/30 transition"
            >
              <h3 className="text-lg font-semibold">Arivu AI</h3>

              <p className="text-gray-400 mt-2 text-sm">
                AI learning assistant that provides structured answers
                for students based on their academic level.
              </p>

              <div className="mt-4 flex gap-6 text-sm">
                <a href="/work/arivu" className="underline">Case Study</a>
                <a href="https://arivu.shadowlab.online" target="_blank" className="text-gray-400">
                  Live Product →
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold mb-12">What we do</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "SaaS Product Development",
              "AI Automation Systems",
              "Custom Internal Tools"
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition text-sm text-gray-400"
              >
                {item}
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ENGAGEMENT MODEL (replaces pricing) */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-2xl font-semibold mb-6">
            Every project is different
          </h2>

          <p className="text-gray-400">
            We work closely with you to understand your problem and design
            the right solution. Pricing depends on scope, complexity, and scale.
          </p>

          <p className="text-gray-500 text-sm mt-4">
            Let’s discuss your idea.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Start a project
        </h2>

        <ContactForm />
      </section>

      {/* FLOAT BUTTON */}
      <a
        href="https://wa.me/917483698042"
        className="fixed bottom-6 right-6 bg-white text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        Chat
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
    <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" className="p-3 bg-black border border-white/10 rounded" required />
      <input name="email" type="email" placeholder="Email" className="p-3 bg-black border border-white/10 rounded" required />
      <textarea name="message" placeholder="Project details..." className="p-3 bg-black border border-white/10 rounded" required />
      <button className="bg-white text-black py-3 rounded">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}