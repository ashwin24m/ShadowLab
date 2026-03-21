"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ANIMATION CONFIG */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <main
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden"
    >

      {/* CURSOR SPOTLIGHT */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.06), transparent 80%)`,
        }}
      />

      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-semibold">ShadowLab</h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 text-center relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Systems that solve <br /> real-world problems
          </h1>

          <p className="mt-6 text-gray-400">
            SaaS products, AI tools, and automation systems built for actual use.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition">
              Start Project
            </a>
            <a href="#work" className="border border-white/20 px-6 py-3 rounded-lg">
              View Work
            </a>
          </div>
        </motion.div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 px-6 border-t border-white/10 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-8"
        >

          <motion.h2 variants={fadeUp} className="text-2xl font-semibold mb-8">
            Selected Work
          </motion.h2>

          {/* PHOTOBOX */}
          <motion.div variants={fadeUp} whileHover={{ y: -6 }}>
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/30 transition">
              <h3 className="font-semibold">PhotoBox</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Event photo sharing system across devices and platforms.
              </p>
              <div className="mt-4 flex gap-4 text-sm">
                <a href="/work/photobox" className="underline">Case Study</a>
                <a href="https://photobox.shadowlab.online" target="_blank">Live →</a>
              </div>
            </div>
          </motion.div>

          {/* ARIVU */}
          <motion.div variants={fadeUp} whileHover={{ y: -6 }}>
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/30 transition">
              <h3 className="font-semibold">Arivu AI</h3>
              <p className="text-gray-400 mt-2 text-sm">
                AI assistant for students with structured, level-based responses.
              </p>
              <div className="mt-4 flex gap-4 text-sm">
                <a href="/work/arivu" className="underline">Case Study</a>
                <a href="https://arivu.shadowlab.online" target="_blank">Live →</a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 border-t border-white/10 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6"
        >
          {["SaaS Development", "AI Automation", "Internal Tools"].map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="p-6 border border-white/10 rounded-xl text-gray-400"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center relative z-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold mb-6"
        >
          Start a project
        </motion.h2>

        <ContactForm />
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917483698042"
        className="fixed bottom-6 right-6 bg-white text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
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