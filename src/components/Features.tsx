import { Zap, Box, Layers, Code, Cpu, Terminal } from "./Icons";

const features = [
  {
    icon: <Zap />,
    title: "Instant Server Start",
    desc: "On demand file serving over native ESM, no bundling required!",
  },
  {
    icon: <Terminal />,
    title: "Lightning Fast HMR",
    desc: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
  },
  {
    icon: <Layers />,
    title: "Rich Features",
    desc: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
  },
  {
    icon: <Cpu />,
    title: "Optimized Build",
    desc: "Pre-configured Rollup build with multi-page and library mode support.",
  },
  {
    icon: <Box />,
    title: "Universal Plugins",
    desc: "Rollup-superset plugin interface shared between dev and build.",
  },
  {
    icon: <Code />,
    title: "Fully Typed APIs",
    desc: "Flexible pragmatic APIs with full TypeScript typing.",
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">
          Why <span className="gradient-text">Vite</span>?
        </h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card glass-card" key={i}>
              <div className="feature-icon-wrapper">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
