export default function App() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">

      {/* PAGE FRAME */}
      <div className="relative mx-auto max-w-7xl px-6">

        {/* LEFT & RIGHT VERTICAL LINES */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

        {/* ================= HEADER ================= */}
        <header className="grid grid-cols-12 items-center h-16 border-b border-white/10">
          <div className="col-span-6 font-semibold tracking-wide">
            VITE
          </div>

          <nav className="col-span-6 flex justify-end gap-6 text-sm text-gray-300">
            <a className="hover:text-white" href="#">Guide</a>
            <a className="hover:text-white" href="#">Config</a>
            <a className="hover:text-white" href="#">Plugins</a>
            <a className="hover:text-white" href="#">Resources</a>
          </nav>
        </header>

        {/* ================= HERO ================= */}
        <section className="grid grid-cols-12 gap-8 py-32 border-b border-white/10">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-5xl font-bold leading-tight">
              The Build Tool <br /> for the Web
            </h1>
            <p className="mt-6 text-gray-400 max-w-md">
              Next generation frontend tooling.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-5 py-2 rounded-md bg-purple-600">
                Get Started
              </button>
              <button className="px-5 py-2 rounded-md border border-white/20">
                View on GitHub
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="h-72 rounded-xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20" />
          </div>
        </section>

        {/* ================= LOGOS ================= */}
        <section className="grid grid-cols-12 gap-0 py-20 border-b border-white/10">
          {["OpenAI", "Shopify", "Stripe", "Linear", "ClickUp", "Wiz"].map(
            (logo) => (
              <div
                key={logo}
                className="col-span-6 md:col-span-2 flex items-center justify-center h-16 border border-white/5 text-gray-400"
              >
                {logo}
              </div>
            )
          )}
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-24 border-b border-white/10">
          <header className="text-center mb-16">
            <h2 className="text-3xl font-semibold">
              Redefining developer experience
            </h2>
            <p className="mt-3 text-gray-400">
              Everything you need, nothing you don’t.
            </p>
          </header>

          <div className="grid grid-cols-12 gap-0">
            {[
              "Instant Server Start",
              "Lightning Fast HMR",
              "Rich Ecosystem",
              "Optimized Build",
            ].map((f) => (
              <div
                key={f}
                className="col-span-12 md:col-span-6 p-10 border border-white/10"
              >
                <h3 className="font-semibold">{f}</h3>
                <p className="mt-3 text-gray-400">
                  Short explanation of the feature.
                </p>
                <div className="mt-6 h-32 bg-purple-600/10 rounded-md" />
              </div>
            ))}
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="py-20 text-center text-gray-500">
          Free & open source. MIT licensed.
        </footer>

      </div>
    </main>
  );
}
