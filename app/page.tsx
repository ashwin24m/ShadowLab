"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scaleHero = useTransform(scrollYProgress, [0, 0.3], [1, 0.92]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0.4]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* SMOOTH SCROLL */
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.08 });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      ref={container}
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="bg-[#0a0a0a] text-white"
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

      {/* HERO (STORY START) */}
      <motion.section
        style={{ scale: scaleHero, opacity: opacityHero }}
        className="pt-44 pb-32 px-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-semibold">
          Systems that feel alive
        </h1>

        <p className="mt-6 text-gray-400">
          Not just built — designed to respond.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <MagneticButton text="Start Project" />
        </div>
      </motion.section>

      {/* TRANSITION SPACER */}
      <div className="h-32" />

      {/* WORK (SCENE 2) */}
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <TiltCard
            title="PhotoBox"
            desc="Event photo sharing system across devices."
            link="/work/photobox"
            live="https://photobox.shadowlab.online"
          />

          <TiltCard
            title="Arivu AI"
            desc="AI assistant for structured student learning."
            link="/work/arivu"
            live="https://arivu.shadowlab.online"
          />

        </div>
      </motion.section>

      {/* TRANSITION */}
      <div className="h-32" />

      {/* CONTACT (FINAL SCENE) */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 border-t border-white/10 text-center"
      >
        <h2 className="text-2xl font-semibold mb-6">
          Let’s build something useful
        </h2>

        <ContactForm />
      </motion.section>

      {/* FLOAT */}
      <a
        href="https://wa.me/917483698042"
        className="fixed bottom-6 right-6 bg-white text-black px-5 py-3 rounded-full shadow-lg active:scale-90 transition"
      >
        Chat
      </a>

    </main>
  );
}

/* MAGNETIC BUTTON */
function MagneticButton({ text }: any) {
  const ref = useRef<any>();

  function move(e: any) {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  }

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => (ref.current.style.transform = "translate(0,0)")}
      className="bg-white text-black px-6 py-3 rounded-lg transition active:scale-95"
    >
      {text}
    </button>
  );
}

/* 3D CARD */
function TiltCard({ title, desc, link, live }: any) {
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
      className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/30 transition active:scale-95"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{desc}</p>

      <div className="mt-4 flex gap-4 text-sm">
        <a href={link} className="underline">Case Study</a>
        <a href={live} target="_blank">Live →</a>
      </div>
    </div>
  );
}

/* FORM */
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
      <button className="bg-white text-black py-3 rounded active:scale-95">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}