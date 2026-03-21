"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-wide">ShadowLab</h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            We design and build <br />
            <span className="text-gray-400">
              scalable AI products & SaaS systems
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            ShadowLab is a focused innovation studio helping founders and businesses
            turn ideas into production-ready software — fast, reliable, and built to scale.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium"
            >
              Start a Project
            </a>

            <a
              href="#work"
              className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              View Work
            </a>
          </div>

        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto text-gray-500 text-sm">
          <p>
            Built systems across AI automation, SaaS platforms, and internal tools
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            What we build
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <ServiceCard
              title="SaaS Platforms"
              desc="End-to-end product development from idea to deployment."
            />

            <ServiceCard
              title="AI Automation"
              desc="Automate workflows and reduce manual operations."
            />

            <ServiceCard
              title="Internal Tools"
              desc="Custom systems tailored for your business processes."
            />

          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Selected Work
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <a href="/work/photobox">
              <WorkCard
                title="PhotoBox"
                desc="Reduced manual image processing workload through automation."
              />
            </a>

            <WorkCard
              title="Arivu AI"
              desc="Built AI assistant system for workflow automation."
            />

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            How we work
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-400">

            <ProcessStep
              title="1. Understand"
              desc="We deeply understand your idea, problem, and constraints."
            />

            <ProcessStep
              title="2. Build"
              desc="We design and develop a working, scalable solution."
            />

            <ProcessStep
              title="3. Launch"
              desc="Deploy, test, and refine based on real-world usage."
            />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Have an idea worth building?
        </h2>

        <p className="text-gray-400 mt-4">
          Let’s turn it into a working product.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-black px-8 py-4 rounded-lg"
        >
          Start a Project
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Start a Project
          </h2>

          <ContactForm />

        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917483698042"
        className="fixed bottom-6 right-6 bg-[#1f1f1f] border border-gray-700 px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-black transition"
      >
        WhatsApp
      </a>

    </main>
  );
}

/* COMPONENTS */

function ServiceCard({ title, desc }: any) {
  return (
    <div className="p-6 border border-gray-800 rounded-xl bg-[#111] hover:border-gray-600 transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">{desc}</p>
    </div>
  );
}

function WorkCard({ title, desc }: any) {
  return (
    <div className="p-6 border border-gray-800 rounded-xl hover:border-gray-600 transition bg-[#111]">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{desc}</p>
    </div>
  );
}

function ProcessStep({ title, desc }: any) {
  return (
    <div className="p-6 border border-gray-800 rounded-xl bg-[#111]">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm mt-2">{desc}</p>
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" placeholder="Name" className="p-3 bg-black border border-gray-700 rounded" required />
      <input name="email" type="email" placeholder="Email" className="p-3 bg-black border border-gray-700 rounded" required />
      <textarea name="message" placeholder="Tell me about your project..." className="p-3 bg-black border border-gray-700 rounded" required />
      <button className="bg-white text-black py-3 rounded">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
