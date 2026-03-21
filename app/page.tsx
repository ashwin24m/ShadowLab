"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-semibold leading-tight"
            >
              We Build Systems <br />
              That Solve Real Problems
            </motion.h1>

            <p className="mt-6 text-gray-400 max-w-lg">
              ShadowLab builds SaaS platforms and AI systems focused on real-world usability —
              not just demos.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="bg-white text-black px-6 py-3 rounded-lg">
                Start Project
              </a>
              <a href="#work" className="border border-white/20 px-6 py-3 rounded-lg">
                View Work
              </a>
            </div>
          </div>

          <InteractivePanel />

        </div>
      </section>

      {/* WORK (UPDATED WITH REAL POSITIONING) */}
      <section id="work" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Products & Systems</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* PHOTOBOX */}
            <div className="p-6 border border-white/10 rounded-xl hover:border-white/30 transition">
              <h3 className="text-xl font-semibold">PhotoBox</h3>

              <p className="text-gray-400 mt-3 text-sm">
                Event-based photo sharing system that solves the problem of distributing
                photos across different devices, platforms, and formats.
              </p>

              <ul className="text-gray-400 text-sm mt-4 space-y-1">
                <li>• Centralized photo access for events</li>
                <li>• Works across devices & platforms</li>
                <li>• Eliminates manual sharing via WhatsApp/Drive</li>
              </ul>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://photobox.shadowlab.online"
                  target="_blank"
                  className="text-sm underline"
                >
                  Visit Product
                </a>

                <a
                  href="/work/photobox"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  View Case Study
                </a>
              </div>
            </div>

            {/* ARIVU AI */}
            <div className="p-6 border border-white/10 rounded-xl hover:border-white/30 transition">
              <h3 className="text-xl font-semibold">Arivu AI</h3>

              <p className="text-gray-400 mt-3 text-sm">
                AI learning assistant designed for students who struggle with prompts.
                Provides structured answers based on academic level.
              </p>

              <ul className="text-gray-400 text-sm mt-4 space-y-1">
                <li>• Curriculum-based AI responses</li>
                <li>• Designed for school → college levels</li>
                <li>• Eliminates confusion in AI usage</li>
              </ul>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://arivu.shadowlab.online"
                  target="_blank"
                  className="text-sm underline"
                >
                  Visit Product
                </a>

              <a href="/work/arivu" className="text-sm text-gray-400 hover:text-white">
  View Case Study
</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "SaaS Development",
              "AI Automation",
              "Custom Internal Tools"
            ].map((s) => (
              <div key={s} className="p-6 border border-white/10 rounded-xl">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 border border-white/10 rounded-xl">
              <h3>Starter</h3>
              <p className="text-2xl mt-2">₹25K+</p>
              <p className="text-gray-400 text-sm mt-2">
                MVPs and small tools
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              <h3>Growth</h3>
              <p className="text-2xl mt-2">₹50K–₹1L</p>
              <p className="text-gray-400 text-sm mt-2">
                Full SaaS / automation systems
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              <h3>Advanced</h3>
              <p className="text-2xl mt-2">₹1L+</p>
              <p className="text-gray-400 text-sm mt-2">
                Complex AI platforms
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Let’s Build Something Useful
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

/* INTERACTIVE PANEL */
function InteractivePanel() {
  const steps = [
    "Understanding problem...",
    "Designing solution...",
    "Building system...",
    "Delivering output..."
  ];

  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="border border-white/10 rounded-xl p-6 bg-white/5 max-w-md">
      <p className="text-sm text-gray-400 mb-4">System Simulation</p>
      <div className="h-32 flex items-center justify-center text-gray-300">
        {steps[i]}
      </div>
    </div>
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