import { Github, Twitter } from "./Icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo-section">
          <div className="logo-icon">V</div>
          <span className="logo-text">Vite</span>
        </div>

        <div className="nav-links">
          <a href="#">Guide</a>
          <a href="#">Config</a>
          <a href="#">Plugins</a>
          <a href="#">Resources</a>
          <a href="#">Version</a>
        </div>

        <div className="social-links">
          <a href="#">
            <Twitter width={20} height={20} />
          </a>
          <a href="#">
            <Github width={20} height={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
