"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* TYPEWRITER */
function TypeText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 15); // fast typing
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/* BLOCK */
function Block({ children, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="mb-6"
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-[#e6e6e6] px-6 py-20 font-[var(--font-inter)]">

      <div className="max-w-3xl mx-auto space-y-6">

        {/* SYSTEM HEADER */}
        <p className="text-white/30 text-sm">ShadowLab • System Response</p>

        {/* HERO */}
        <Block>
          <h1 className="text-xl md:text-2xl font-[var(--font-space)] text-white/90">
            <TypeText text="ShadowLab builds systems that solve real-world problems." />
          </h1>
        </Block>

        {/* DESCRIPTION */}
        <Block delay={0.5}>
          <p className="text-white/50">
            We design and build SaaS platforms, AI tools, and automation systems
            that are actually used — not just demo projects.
          </p>
        </Block>

        {/* SERVICES */}
        <Block delay={1}>
          <p className="text-white/70">→ Capabilities</p>

          <ul className="mt-2 space-y-1 text-white/50">
            <li>SaaS Product Development</li>
            <li>AI Automation Systems</li>
            <li>Custom Internal Tools</li>
          </ul>
        </Block>

        {/* PRODUCTS */}
        <Block delay={1.5}>
          <p className="text-white/70">→ Products</p>

          <div className="mt-3 space-y-4">

            {/* PHOTOBOX */}
            <div>
              <p className="text-white/90 font-[var(--font-space)]">
                PhotoBox
              </p>
              <p className="text-white/50 text-sm">
                Event photo sharing system across devices and platforms.
              </p>
              <div className="text-sm mt-1 text-white/40">
                <a href="/work/photobox" className="underline mr-4">Case Study</a>
                <a href="https://photobox.shadowlab.online" target="_blank">Live →</a>
              </div>
            </div>

            {/* ARIVU */}
            <div>
              <p className="text-white/90 font-[var(--font-space)]">
                Arivu AI
              </p>
              <p className="text-white/50 text-sm">
                AI assistant for students that delivers structured, curriculum-based responses.
              </p>
              <div className="text-sm mt-1 text-white/40">
                <a href="/work/arivu" className="underline mr-4">Case Study</a>
                <a href="https://arivu.shadowlab.online" target="_blank">Live →</a>
              </div>
            </div>

          </div>
        </Block>

        {/* APPROACH */}
        <Block delay={2}>
          <p className="text-white/70">→ Approach</p>

          <p className="text-white/50 mt-2">
            Understand the problem → Design the system → Build scalable solution
          </p>
        </Block>

        {/* CTA */}
        <Block delay={2.5}>
          <p className="text-white/70">→ Start a project</p>

          <div className="mt-3">
            <a
              href="#"
              className="inline-block bg-white/90 text-black px-5 py-2 rounded text-sm hover:scale-105 transition"
            >
              Contact ShadowLab
            </a>
          </div>
        </Block>

      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917483698042"
        className="fixed bottom-6 right-6 bg-white/90 text-black px-5 py-3 rounded-full shadow-lg text-sm"
      >
        Chat
      </a>

    </main>
  );
}