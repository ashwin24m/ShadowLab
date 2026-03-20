"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">ShadowLab</h1>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#">Work</a>
            <a href="#">Services</a>
            <a href="#">Lab</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Building AI tools, SaaS products, and automation systems that scale
          </motion.h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            ShadowLab is an innovation studio focused on turning ideas into real, working products.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium">
              View Work
            </button>
            <button className="border border-gray-600 px-6 py-3 rounded-lg">
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["SaaS Development", "AI Automation", "Internal Tools", "IoT Prototyping"].map((service) => (
              <div key={service} className="p-6 border border-gray-800 rounded-xl hover:border-gray-600 transition">
                <h3 className="font-medium">{service}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Scalable and production-ready solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold">PhotoBox</h3>
              <p className="text-gray-400 mt-2">
                Automated photo processing SaaS platform.
              </p>
            </div>

            <div className="p-6 border border-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold">Arivu AI</h3>
              <p className="text-gray-400 mt-2">
                Custom AI assistant system for automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAB */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Lab</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Telegram AI Bot", "Trading Bot", "Worksheet Generator"].map((item) => (
              <div key={item} className="p-6 border border-gray-800 rounded-xl text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-gray-800 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Have an idea? Let’s build it.
        </h2>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg">
          Start a Project
        </button>
      </section>

{/* CONTACT */}
<section className="py-20 px-4 border-t border-gray-800">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
      Start a Project
    </h2>

    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
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
      }}
      className="flex flex-col gap-4"
    >
      <input
        name="name"
        placeholder="Your Name"
        className="p-3 bg-black border border-gray-700 rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="p-3 bg-black border border-gray-700 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Tell me about your project..."
        className="p-3 bg-black border border-gray-700 rounded"
        rows={5}
        required
      />
      <button className="bg-white text-black py-3 rounded font-medium">
        Send Message
      </button>
    </form>
  </div>
</section>


    </main>
  );
}
