export default function ArivuCaseStudy() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Arivu AI - Guided Learning Assistant for Students
        </h1>

        <p className="text-gray-400 mb-12 max-w-2xl">
          An AI system designed to eliminate confusion for students by providing
          structured, curriculum-based answers instead of generic AI responses.
        </p>

        {/* METRICS (REALISTIC POSITIONING) */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Clarity Improvement", value: "High" },
            { label: "Prompt Dependency", value: "Reduced" },
            { label: "Usability for Beginners", value: "Significant" }
          ].map((m) => (
            <div key={m.label} className="border border-white/10 rounded-xl p-6">
              <p className="text-xl font-semibold">{m.value}</p>
              <p className="text-gray-400 text-sm mt-2">{m.label}</p>
            </div>
          ))}
        </div>

        {/* PROBLEM */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="text-gray-400">
            Most students, especially in schools and rural areas, are new to AI tools.
            They struggle to write effective prompts, leading to confusing or irrelevant answers.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="text-gray-400">
            Arivu AI integrates a Gemini-based system trained to respond based on
            academic levels - school to college - ensuring clarity, simplicity, and relevance.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Student selects their academic level</li>
            <li>System interprets question context</li>
            <li>AI generates structured, simplified answers</li>
            <li>Avoids complex or irrelevant outputs</li>
          </ul>
        </section>

        {/* TARGET USERS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Target Users</h2>
          <p className="text-gray-400">
            School students, college students, and first-time AI users who need
            clear and guided learning support.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Explore the Product
          </h2>

          <a
            href="https://www.arivu.shadowlab.online"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg inline-block"
          >
            Visit Arivu AI
          </a>
        </div>

      </div>
    </main>
  );
}