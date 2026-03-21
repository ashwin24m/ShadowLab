export default function PhotoBoxCaseStudy() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          PhotoBox — Automated Image Processing System
        </h1>

        <p className="text-gray-400 mb-12 max-w-2xl">
          A system designed to automate image workflows and reduce manual editing effort
          for high-volume content operations.
        </p>

        {/* METRICS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Time Saved", value: "70% faster" },
            { label: "Processing Speed", value: "3x increase" },
            { label: "Manual Work", value: "-60% reduction" }
          ].map((m) => (
            <div key={m.label} className="border border-white/10 rounded-xl p-6">
              <p className="text-2xl font-semibold">{m.value}</p>
              <p className="text-gray-400 text-sm mt-2">{m.label}</p>
            </div>
          ))}
        </div>

        {/* PROBLEM */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="text-gray-400">
            Businesses handling large volumes of images were spending hours manually resizing,
            compressing, and preparing assets. This slowed down operations and increased dependency
            on manual effort.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="text-gray-400">
            Built an automated image processing system that handles resizing, compression,
            and formatting in bulk — reducing manual intervention and improving speed.
          </p>
        </section>

        {/* IMPLEMENTATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Designed scalable processing pipeline</li>
            <li>Optimized batch handling for large image sets</li>
            <li>Integrated fast API-based processing</li>
            <li>Built simple UI for non-technical users</li>
          </ul>
        </section>

        {/* RESULT */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p className="text-gray-400">
            The system significantly reduced time spent on repetitive tasks, allowing faster
            content production and improved operational efficiency.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Want a system like this for your business?
          </h2>

          <a
            href="/#contact"
            className="bg-white text-black px-6 py-3 rounded-lg inline-block"
          >
            Start a Project
          </a>
        </div>

      </div>
    </main>
  );
}