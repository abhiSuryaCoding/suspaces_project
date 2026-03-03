import Seo from '../components/Seo';
import ListingCard from '../components/ListingCard';
import { listings } from '../data/listings';

function HomePage() {
  return (
    <>
      <Seo
        title="Shiv Urban Spaces | Find Premium Properties"
        description="Browse curated residential and commercial listings by Shiv Urban Spaces, your trusted SEBI registered channel partner."
      />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">shivurbanspaces.com</p>
            <h1>Discover High-Value Properties with Confidence.</h1>
            <p>
              Shiv Urban Spaces helps you evaluate premium real estate options across India with market insight,
              transparency, and investor-first guidance.
            </p>
            <a href="#listings" className="btn btn-primary">
              Explore Listings
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <h3>120+</h3>
              <p>Verified Listings</p>
            </div>
            <div>
              <h3>20+</h3>
              <p>Cities Covered</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Investors Assisted</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section" id="listings">
        <div className="section-head">
          <h2>Featured Property Listings</h2>
          <p>Handpicked options for residential, commercial, and investment-focused buyers.</p>
        </div>
        <div className="listing-grid">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
