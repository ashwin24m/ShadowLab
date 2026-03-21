"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <main
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden"
    >

      {/* AMBIENT GLOW */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.06), transparent 70%)`,
        }}
      />

      {/* GRID */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-semibold">ShadowLab</h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold"
        >
          Systems that feel <br /> intelligently built
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          We build SaaS, AI tools and automation systems with real-world usability.
        </p>
      </section>

      {/* WORK (3D CARDS) */}
      <section id="work" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <TiltCard title="PhotoBox"
            desc="Event photo sharing system across devices and platforms."
            link="/work/photobox"
            live="https://photobox.shadowlab.online"
          />

          <TiltCard title="Arivu AI"
            desc="AI assistant for students with structured learning responses."
            link="/work/arivu"
            live="https://arivu.shadowlab.online"
          />

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Let’s build something useful
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

/* 3D TILT CARD */
function TiltCard({ title, desc, link, live }: any) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setTilt({
          x: (y - 0.5) * 10,
          y: (x - 0.5) * -10,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="p-6 rounded-xl border border-white/10 bg-white/[0.03] transition duration-300"
    >
      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-gray-400 mt-2 text-sm">{desc}</p>

      <div className="mt-4 flex gap-4 text-sm">
        <a href={link} className="underline">Case Study</a>
        <a href={live} target="_blank">Live →</a>
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