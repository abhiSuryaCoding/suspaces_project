function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Shiv Urban Spaces</h4>
          <p>SEBI Registered Channel Partner assisting buyers in finding trusted real estate opportunities.</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p>Email: info@shivurbanspaces.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Shiv Urban Spaces. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
