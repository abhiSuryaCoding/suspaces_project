import Seo from '../components/Seo';

function AboutPage() {
  return (
    <section className="container section about">
      <Seo
        title="About Shiv Urban Spaces | SEBI Registered Channel Partner"
        description="Learn about Shiv Urban Spaces and our mission to provide transparent, data-backed property advisory for modern investors."
      />
      <h1>About Us</h1>
      <p>
        Shiv Urban Spaces is a SEBI registered channel partner focused on simplifying real estate discovery for
        homebuyers and investors.
      </p>
      <p>
        We combine project due diligence, market trend analysis, and developer credibility checks to help clients
        make informed decisions with confidence.
      </p>
      <div className="about-cards">
        <article>
          <h3>Our Mission</h3>
          <p>Deliver reliable property advisory through transparency, ethics, and long-term value creation.</p>
        </article>
        <article>
          <h3>Why Choose Us</h3>
          <p>Trusted partner network, curated inventory, and personalized recommendations for every budget.</p>
        </article>
        <article>
          <h3>Our Approach</h3>
          <p>Understanding your goals first, then matching you with projects aligned to lifestyle and ROI potential.</p>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;
