"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

/* ------------------ TYPOGRAPHY CLASSES ------------------ */
const styles = {
  h1: "text-4xl md:text-6xl font-[var(--font-space)] leading-tight tracking-tight text-white/90",
  h2: "text-2xl md:text-3xl font-[var(--font-space)] text-white/90",
  body: "text-white/50 text-sm md:text-base",
  small: "text-white/40 text-xs",
};

/* ------------------ PAGE ------------------ */
export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <main
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="bg-[#0b0b0c] text-white min-h-screen overflow-x-hidden"
    >
      {/* CURSOR GLOW */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(500px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.05), transparent 80%)`,
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 backdrop-blur border-b border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-[var(--font-space)] text-white/90">ShadowLab</h1>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.h1}
        >
          Systems that solve <br /> real-world problems
        </motion.h1>

        <p className={`${styles.body} mt-6 max-w-xl mx-auto`}>
          We design and build SaaS platforms, AI tools and automation systems
          that are actually used — not just demos.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <RippleButton text="Start Project" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-16 text-center border-t border-white/5">
        <p className={styles.small}>
          SaaS • AI Systems • Automation • Internal Tools
        </p>
      </section>

      {/* WORK */}
      <Section>
        <h2 className={`${styles.h2} mb-12 text-center`}>
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <TiltCard
            title="PhotoBox"
            desc="Event photo sharing system across devices and platforms."
            link="/work/photobox"
            live="https://photobox.shadowlab.online"
          />

          <TiltCard
            title="Arivu AI"
            desc="AI assistant for students with structured learning output."
            link="/work/arivu"
            live="https://arivu.shadowlab.online"
          />

        </div>
      </Section>

      {/* APPROACH */}
      <Section>
        <h2 className={`${styles.h2} mb-10 text-center`}>
          How we work
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          {["Understand", "Design", "Build"].map((step) => (
            <motion.div
              key={step}
              whileHover={{ y: -5 }}
              className="p-6 border border-white/5 rounded-xl text-white/50"
            >
              {step}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <h2 className={`${styles.h2} mb-6 text-center`}>
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

/* ------------------ SECTION ------------------ */
function Section({ children }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-28 px-6 border-t border-white/5"
    >
      {children}
    </motion.section>
  );
}

/* ------------------ TILT CARD ------------------ */
function TiltCard({ title, desc, link, live }: any) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function move(e: any) {
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
      onMouseMove={move}
      onTouchMove={move}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onTouchEnd={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="p-6 rounded-xl border border-white/5 bg-white/[0.02] transition active:scale-95"
    >
      <h3 className="font-[var(--font-space)] text-white/90">{title}</h3>
      <p className="text-white/40 mt-2 text-sm">{desc}</p>

      <div className="mt-4 flex gap-4 text-sm">
        <AnimatedLink href={link}>Case Study</AnimatedLink>
        <AnimatedLink href={live}>Live →</AnimatedLink>
      </div>
    </div>
  );
}

/* ------------------ RIPPLE BUTTON ------------------ */
function RippleButton({ text }: any) {
  const [ripple, setRipple] = useState<any>(null);

  function click(e: any) {
    const rect = e.target.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <button
      onClick={click}
      className="relative overflow-hidden bg-white/90 text-black px-6 py-3 rounded-lg"
    >
      {text}

      {ripple && (
        <span
          className="absolute bg-black/20 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 100,
            height: 100,
          }}
        />
      )}
    </button>
  );
}

/* ------------------ LINK ANIMATION ------------------ */
function AnimatedLink({ href, children }: any) {
  return (
    <a href={href} className="relative group text-white/60">
      {children}
      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white/60 transition-all group-hover:w-full" />
    </a>
  );
}

/* ------------------ FORM -------------------- */
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