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
              That Generate Revenue
            </motion.h1>

            <p className="mt-6 text-gray-400 max-w-lg">
              ShadowLab designs and builds SaaS products, AI automation tools, 
              and internal systems for businesses that want to scale efficiently.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition">
                Start Project
              </a>
              <a href="#work" className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                View Work
              </a>
            </div>
          </div>

          <InteractivePanel />

        </div>
      </section>

      {/* TRUST / POSITIONING */}
      <section className="py-16 px-6 border-t border-white/10 text-center">
        <p className="text-gray-400 max-w-3xl mx-auto">
          We don’t build generic apps. We build systems designed to automate operations,
          reduce cost, and generate measurable business value.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "SaaS Development",
                desc: "End-to-end product development from idea to deployment."
              },
              {
                title: "AI Automation",
                desc: "Automate workflows using AI to reduce manual work."
              },
              {
                title: "Internal Tools",
                desc: "Custom dashboards and systems for business operations."
              }
            ].map((s) => (
              <div key={s.title} className="p-6 border border-white/10 rounded-xl hover:border-white/30 transition">
                <h3 className="font-medium">{s.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Selected Work</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <a href="/work/photobox">
              <div className="p-6 border border-white/10 rounded-xl hover:border-white/30 transition">
                <h3 className="text-xl font-semibold">PhotoBox</h3>
                <p className="text-gray-400 mt-2">
                  Automated image processing SaaS
                </p>
              </div>
            </a>

            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Arivu AI</h3>
              <p className="text-gray-400 mt-2">
                AI automation system
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Why ShadowLab</h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-400 text-sm">
            <div>Built for real-world usage, not demos</div>
            <div>Focus on automation and scalability</div>
            <div>Fast execution with clean architecture</div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Starter",
                price: "₹25K+",
                desc: "Simple tools or MVP builds"
              },
              {
                title: "Growth",
                price: "₹50K–₹1L",
                desc: "Full SaaS or automation systems"
              },
              {
                title: "Advanced",
                price: "₹1L+",
                desc: "Complex platforms and AI systems"
              }
            ].map((p) => (
              <div key={p.title} className="p-6 border border-white/10 rounded-xl hover:border-white/30 transition">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-2xl mt-2">{p.price}</p>
                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Let’s Build Something Valuable
        </h2>

        <ContactForm />
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917483698042"
        className="fixed bottom-6 right-6 bg-white text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        Chat
      </a>

    </main>
  );
}

/* INTERACTIVE PANEL */
function InteractivePanel() {
  const steps = [
    "Analyzing problem...",
    "Designing system...",
    "Executing logic...",
    "Generating output...",
    "Done"
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
