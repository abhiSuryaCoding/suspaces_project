import Seo from '../components/Seo';

function ContactPage() {
  return (
    <section className="container section contact">
      <Seo
        title="Contact Shiv Urban Spaces"
        description="Contact Shiv Urban Spaces for property advisory, site visits, and personalized real estate consultation."
      />
      <h1>Contact Us</h1>
      <p>Connect with our team to discuss properties, schedule site visits, or request an investment consultation.</p>

      <div className="contact-grid">
        <article>
          <h3>Office Address</h3>
          <p>
            Shiv Urban Spaces
            <br />
            502, Urban Square Towers
            <br />
            Golf Course Extension Road
            <br />
            Gurugram, Haryana 122018
          </p>
        </article>

        <article>
          <h3>Reach Us</h3>
          <p>Email: info@shivurbanspaces.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Business Hours: Mon-Sat, 10:00 AM - 7:00 PM</p>
        </article>
      </div>
    </section>
  );
}

export default ContactPage;
