"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold tracking-wide">ShadowLab</h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            We build systems that <br /> solve real problems
          </motion.h1>

          <p className="mt-6 text-gray-400">
            SaaS products, AI tools, and automation systems designed for real-world usage — not demos.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact" className="bg-white text-black px-6 py-3 rounded-lg">
              Start Project
            </a>
            <a href="#work" className="border border-white/20 px-6 py-3 rounded-lg">
              View Work
            </a>
          </div>

        </div>
      </section>

      {/* POSITIONING */}
      <section className="pb-20 px-6 text-center">
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Focused on building scalable systems for automation, efficiency, and real impact.
        </p>
      </section>

      {/* WORK */}
      <section id="work" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold mb-12">Selected Work</h2>

          <div className="space-y-6">

            {/* PHOTOBOX */}
            <div className="p-6 border border-white/10 rounded-xl hover:border-white/30 transition">
              <h3 className="text-lg font-semibold">PhotoBox</h3>

              <p className="text-gray-400 mt-2 text-sm">
                Event photo sharing system that enables seamless access across devices and eliminates platform dependency.
              </p>

              <div className="mt-4 flex gap-4 text-sm">
                <a href="/work/photobox" className="underline">Case Study</a>
                <a href="https://photobox.shadowlab.online" target="_blank" className="text-gray-400">
                  Live Product
                </a>
              </div>
            </div>

            {/* ARIVU */}
            <div className="p-6 border border-white/10 rounded-xl hover:border-white/30 transition">
              <h3 className="text-lg font-semibold">Arivu AI</h3>

              <p className="text-gray-400 mt-2 text-sm">
                AI learning assistant that provides structured answers for students based on their academic level.
              </p>

              <div className="mt-4 flex gap-4 text-sm">
                <a href="/work/arivu" className="underline">Case Study</a>
                <a href="https://arivu.shadowlab.online" target="_blank" className="text-gray-400">
                  Live Product
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold mb-12">Services</h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>SaaS Development</div>
            <div>AI Automation</div>
            <div>Internal Tools</div>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold mb-12">Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 border border-white/10 rounded-xl">
              <p className="font-medium">Starter</p>
              <p className="text-xl mt-2">₹25K+</p>
              <p className="text-gray-400 text-sm mt-2">MVPs & simple tools</p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              <p className="font-medium">Growth</p>
              <p className="text-xl mt-2">₹50K–₹1L</p>
              <p className="text-gray-400 text-sm mt-2">Full SaaS & automation</p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              <p className="font-medium">Advanced</p>
              <p className="text-xl mt-2">₹1L+</p>
              <p className="text-gray-400 text-sm mt-2">Complex AI systems</p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-white/10 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Let’s build something useful
        </h2>

        <ContactForm />
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917483698042"
        className="fixed bottom-6 right-6 bg-white text-black px-5 py-3 rounded-full shadow-lg"
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