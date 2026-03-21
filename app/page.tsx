"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* SMOOTH SCROLL */
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="bg-[#0a0a0a] text-white min-h-screen"
    >

      {/* CURSOR LIGHT */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.06), transparent 80%)`,
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1>ShadowLab</h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-semibold">
            Systems that feel alive
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-gray-400">
            Every interaction should respond, not just exist.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-8 flex justify-center gap-4">
            <MagneticButton text="Start Project" />
            <a
              href="#work"
              className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              View Work
            </a>
          </div>
        </Reveal>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <TiltCard
            title="PhotoBox"
            desc="Event photo sharing system across devices and platforms."
            link="/work/photobox"
            live="https://photobox.shadowlab.online"
          />

          <TiltCard
            title="Arivu AI"
            desc="AI assistant designed for structured learning based on student level."
            link="/work/arivu"
            live="https://arivu.shadowlab.online"
          />

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-6">
            Let’s build something useful
          </h2>
        </Reveal>

        <ContactForm />
      </section>

      {/* FLOAT BUTTON */}
      <a
        href="https://wa.me/917483698042"
        className="fixed bottom-6 right-6 bg-white text-black px-5 py-3 rounded-full shadow-lg active:scale-90 transition hover:scale-110"
      >
        Chat
      </a>

    </main>
  );
}

/* REVEAL */
function Reveal({ children, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

/* MAGNETIC BUTTON */
function MagneticButton({ text }: { text: string }) {
  const ref = useRef<HTMLButtonElement | null>(null);

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  }

  function reset() {
    if (!ref.current) return;
    ref.current.style.transform = `translate(0px, 0px)`;
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="bg-white text-black px-6 py-3 rounded-lg transition active:scale-95 hover:scale-105"
    >
      {text}
    </button>
  );
}

/* 3D CARD */
function TiltCard({
  title,
  desc,
  link,
  live,
}: {
  title: string;
  desc: string;
  link: string;
  live: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setTilt({
          x: (y - 0.5) * 12,
          y: (x - 0.5) * -12,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/30 transition active:scale-95 hover:scale-[1.02]"
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{desc}</p>

      <div className="mt-4 flex gap-4 text-sm">
        <a href={link} className="underline">
          Case Study
        </a>
        <a href={live} target="_blank">
          Live →
        </a>
      </div>
    </div>
  );
}

/* CONTACT FORM */
function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
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
    <form
      className="flex flex-col gap-4 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        placeholder="Name"
        className="p-3 bg-black border border-white/10 rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="p-3 bg-black border border-white/10 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Project details..."
        className="p-3 bg-black border border-white/10 rounded"
        required
      />
      <button className="bg-white text-black py-3 rounded active:scale-95 hover:scale-105">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}