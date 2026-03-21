"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* FAST TYPE EFFECT (BURST STYLE) */
function useFastType(text: string, speed = 10) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return display;
}

/* PAGE */
export default function Home() {
  const title = useFastType(
    "Systems that solve real-world problems",
    8
  );

  const subtitle = useFastType(
    "We design SaaS platforms, AI tools and automation systems that are actually used.",
    6
  );

  return (
    <main className="bg-[#0b0b0c] text-[#e6e6e6] min-h-screen px-6">

      {/* HERO */}
      <section className="pt-40 pb-28 max-w-3xl mx-auto">

        <ChatBlock delay={0}>
          <h1 className="text-3xl md:text-5xl font-[var(--font-space)] leading-tight">
            {title}
          </h1>
        </ChatBlock>

        <ChatBlock delay={0.2}>
          <p className="text-white/50 mt-6">
            {subtitle}
          </p>
        </ChatBlock>

        <ChatBlock delay={0.4}>
          <div className="mt-8">
            <button className="bg-white/90 text-black px-6 py-3 rounded-lg active:scale-95 transition">
              Start Project
            </button>
          </div>
        </ChatBlock>

      </section>

      {/* WORK */}
      <section className="max-w-3xl mx-auto py-20 border-t border-white/5">

        <ChatBlock delay={0}>
          <p className="text-white/40 mb-6">Selected work:</p>
        </ChatBlock>

        <ChatBlock delay={0.2}>
          <WorkItem
            title="PhotoBox"
            desc="Event photo sharing system across devices and platforms."
            link="/work/photobox"
          />
        </ChatBlock>

        <ChatBlock delay={0.4}>
          <WorkItem
            title="Arivu AI"
            desc="AI assistant for students with structured learning output."
            link="/work/arivu"
          />
        </ChatBlock>

      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto py-20 border-t border-white/5">

        <ChatBlock>
          <p className="text-white/50 mb-6">
            Have an idea? Let’s build it.
          </p>
        </ChatBlock>

        <ContactForm />

      </section>

    </main>
  );
}

/* CHAT BLOCK (FAST REVEAL) */
function ChatBlock({ children, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

/* WORK ITEM */
function WorkItem({ title, desc, link }: any) {
  return (
    <div className="mb-6">
      <h3 className="font-[var(--font-space)] text-white/90">{title}</h3>
      <p className="text-white/40 text-sm mt-1">{desc}</p>
      <a href={link} className="text-sm underline text-white/60">
        View →
      </a>
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" className="p-3 bg-black border border-white/5 rounded" required />
      <input name="email" type="email" placeholder="Email" className="p-3 bg-black border border-white/5 rounded" required />
      <textarea name="message" placeholder="Project details..." className="p-3 bg-black border border-white/5 rounded" required />
      <button className="bg-white/90 text-black py-3 rounded active:scale-95">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}