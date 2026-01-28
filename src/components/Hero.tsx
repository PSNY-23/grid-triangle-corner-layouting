import { Zap, Terminal, Box } from "./Icons";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-text">New: Vite 6.0 is out!</span>
          </div>
          <h1 className="hero-title">
            Next Generation
            <br />
            <span className="gradient-text">Frontend Tooling</span>
          </h1>
          <p className="hero-subtitle">
            Get ready for a development environment that can finally keep up
            with you.
          </p>
          <div className="hero-actions">
            <button className="glow-button">Get Started</button>
            <button className="secondary-button">Why Vite?</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="abstract-shape">
            <div className="shape-inner"></div>
          </div>
          <div className="floating-card card-1">
            <Zap className="icon" />
            <span>Instant Server Start</span>
          </div>
          <div className="floating-card card-2">
            <Terminal className="icon" />
            <span>Lightning Fast HMR</span>
          </div>
          <div className="floating-card card-3">
            <Box className="icon" />
            <span>Rich Features</span>
          </div>
        </div>
      </div>
    </section>
  );
}
