export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-column">
          <p className="footer-logo">Vite</p>
          <p className="footer-copyright">
            Released under the MIT License.
            <br />
            Copyright © 2019-present Evan You & Vite Contributors
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Resources</h4>
          <a href="#">Team</a>
          <a href="#">Releases</a>
          <a href="#">Community</a>
          <a href="#">Partners</a>
        </div>

        <div className="footer-links-group">
          <h4>Official Links</h4>
          <a href="#">ViteConf</a>
          <a href="#">Awesome Vite</a>
          <a href="#">Discord</a>
        </div>
      </div>
    </footer>
  );
}
