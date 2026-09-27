import "./Footer.css";

function Footer({ storeName, email, year }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer__brand">
        <h2>{storeName}</h2>
        <p>
          Everything you need to enjoy the perfect mate ritual.
        </p>
      </div>

      <div className="footer__section">
        <h3>Customer care</h3>
        <a href={`mailto:${email}`}>{email}</a>
        <a href="#">Shipping & returns</a>
        <a href="#">Frequently asked questions</a>
      </div>

      <div className="footer__section">
        <h3>Follow us</h3>
        <a href="#">Instagram</a>
        <a href="#">TikTok</a>
        <a href="#">Pinterest</a>
      </div>

      <p className="footer__copyright">
        © {year} {storeName}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
