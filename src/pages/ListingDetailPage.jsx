import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { listings } from '../data/listings';

function ListingDetailPage() {
  const { listingId } = useParams();
  const listing = listings.find((item) => item.id === listingId);

  if (!listing) {
    return (
      <section className="container section">
        <h1>Listing Not Found</h1>
        <p>The property you are looking for is unavailable or has been moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="container section listing-detail">
      <Seo
        title={`${listing.title} | Shiv Urban Spaces`}
        description={listing.summary}
      />
      <div className="detail-header">
        <div>
          <p className="eyebrow">{listing.city}</p>
          <h1>{listing.title}</h1>
          <p>{listing.summary}</p>
        </div>
        <Link to="/contact" className="btn btn-primary">
          Enquire Now
        </Link>
      </div>

      <div className="image-grid">
        {listing.images.map((image) => (
          <img key={image} src={image} alt={listing.title} loading="lazy" />
        ))}
      </div>

      <div className="property-meta">
        <p>
          <strong>Type:</strong> {listing.type}
        </p>
        <p>
          <strong>Price:</strong> {listing.price}
        </p>
        <p>
          <strong>Configuration:</strong> {listing.configuration}
        </p>
        <p>
          <strong>Area:</strong> {listing.area}
        </p>
        <p>
          <strong>Status:</strong> {listing.status}
        </p>
        <p>
          <strong>Possession:</strong> {listing.possession}
        </p>
      </div>

      <h3>Highlights</h3>
      <ul className="highlights-list">
        {listing.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ListingDetailPage;
