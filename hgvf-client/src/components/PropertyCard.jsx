import './PropertyCard.css'

export default function PropertyCard({ property, selected, onClick }) {
  const {
    name,
    neighborhood,
    property_type,
    num_bedrooms,
    num_bathrooms,
    max_guests,
    price_per_week,
    price_per_person,
  } = property

  const formatCurrency = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

  return (
    <div
      className={`property-card ${selected ? 'property-card--selected' : ''}`}
      onClick={onClick}
    >
      <div className="property-card__image">
        <div className="property-card__image-placeholder">
          <span>🌺</span>
        </div>
        <span className="property-card__type">{property_type}</span>
      </div>

      <div className="property-card__body">
        <p className="property-card__neighborhood">{neighborhood}</p>
        <h3 className="property-card__name">{name}</h3>

        <div className="property-card__specs">
          <span>{num_bedrooms} bd</span>
          <span className="property-card__dot">·</span>
          <span>{num_bathrooms} ba</span>
          <span className="property-card__dot">·</span>
          <span>Sleeps {max_guests}</span>
        </div>

        <div className="property-card__pricing">
          <span className="property-card__price">{formatCurrency(price_per_week)}</span>
          <span className="property-card__price-label"> / week</span>
          {price_per_person && (
            <span className="property-card__per-person">
              {formatCurrency(price_per_person)} / person
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
