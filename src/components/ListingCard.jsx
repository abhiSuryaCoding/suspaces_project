import { Link } from 'react-router-dom';

function ListingCard({ listing }) {
  return (
    <article className="listing-card">
      <img src={listing.images[0]} alt={listing.title} loading="lazy" />
      <div className="listing-body">
        <span className="badge">{listing.type}</span>
        <h3>{listing.title}</h3>
        <p>{listing.summary}</p>
        <ul>
          <li>
            <strong>City:</strong> {listing.city}
          </li>
          <li>
            <strong>Price:</strong> {listing.price}
          </li>
        </ul>
        <Link to={`/listing/${listing.id}`} className="btn btn-dark">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ListingCard;
