"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scaleHero = useTransform(scrollYProgress, [0, 0.3], [1, 0.92]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0.5]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <main
      ref={container}
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="bg-[#0b0b0c] text-[#e6e6e6] min-h-screen font-[var(--font-inter)]"
    >
      {/* CURSOR LIGHT */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.05), transparent 80%)`,
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-[#0b0b0c]/70 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-[var(--font-space)] tracking-wide text-white/90">
            ShadowLab
          </h1>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
        style={{ scale: scaleHero, opacity: opacityHero }}
        className="pt-44 pb-32 px-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-[var(--font-space)] leading-tight text-white/90">
          Systems that feel alive
        </h1>

        <p className="mt-6 text-white/40">
          Designed to respond. Built to scale.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <MagneticButton text="Start Project" />
        </div>
      </motion.section>

      {/* WORK */}
      <Section>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <TiltCard
            title="PhotoBox"
            desc="Event photo sharing system across devices"
            link="/work/photobox"
            live="https://photobox.shadowlab.online"
          />

          <TiltCard
            title="Arivu AI"
            desc="AI assistant for structured student learning"
            link="/work/arivu"
            live="https://arivu.shadowlab.online"
          />

        </div>
      </Section>

      {/* CONTACT */}
      <Section>
        <h2 className="text-2xl font-[var(--font-space)] mb-6 text-center">
          Let’s build something useful
        </h2>
        <ContactForm />
      </Section>

      {/* FLOAT */}
      <a
        href="https://wa.me/917483698042"
        className="fixed bottom-6 right-6 bg-white/90 text-black px-5 py-3 rounded-full shadow-lg active:scale-90 transition"
      >
        Chat
      </a>
    </main>
  );
}

/* SECTION TRANSITION */
function Section({ children }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-28 px-6 border-t border-white/5"
    >
      {children}
    </motion.section>
  );
}

/* MOBILE + DESKTOP TILT */
function TiltCard({ title, desc, link, live }: any) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    setTilt({
      x: (y / rect.height - 0.5) * 10,
      y: (x / rect.width - 0.5) * -10,
    });
  }

  return (
    <div
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onTouchEnd={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="p-6 rounded-xl border border-white/5 bg-white/[0.02] transition active:scale-95"
    >
      <h3 className="font-[var(--font-space)] text-white/90">{title}</h3>

      <p className="text-white/40 mt-2 text-sm">{desc}</p>

      <div className="mt-4 flex gap-4 text-sm text-white/60">
        <a href={link} className="underline">Case Study</a>
        <a href={live} target="_blank">Live →</a>
      </div>
    </div>
  );
}

/* BUTTON */
function MagneticButton({ text }: any) {
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/90 text-black px-6 py-3 rounded-lg"
    >
      {text}
    </motion.button>
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
      <input name="name" placeholder="Name" className="p-3 bg-black border border-white/5 rounded" required />
      <input name="email" type="email" placeholder="Email" className="p-3 bg-black border border-white/5 rounded" required />
      <textarea name="message" placeholder="Project details..." className="p-3 bg-black border border-white/5 rounded" required />
      <button className="bg-white/90 text-black py-3 rounded active:scale-95">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}