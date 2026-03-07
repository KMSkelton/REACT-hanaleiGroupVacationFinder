import './PropertyDetail.css'

const formatCurrency = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const Amenity = ({ icon, label, active }) => (
  <div className={`amenity ${active ? 'amenity--active' : 'amenity--inactive'}`}>
    <span>{icon}</span>
    <span>{label}</span>
  </div>
)

export default function PropertyDetail({ property, groupSize, onClose }) {
  if (!property) return null

  const {
    name, neighborhood, property_type, street_number,
    description, num_bedrooms, num_bathrooms, max_guests,
    sleeping_capacity, price_per_week, price_per_person,
    min_nights, accessibility, air_conditioning, wifi
  } = property

  return (
    <>
      <div className="detail-backdrop" onClick={onClose} />
      <aside className="detail-panel">
        <div className="detail-panel__header">
          <button className="detail-panel__close" onClick={onClose} aria-label="Close">✕</button>
          <p className="detail-panel__neighborhood">{neighborhood}</p>
          <h2 className="detail-panel__name">{name}</h2>
          <p className="detail-panel__address">{street_number} · {property_type}</p>
        </div>

        <div className="detail-panel__image">
          <div className="detail-panel__image-placeholder">🌺</div>
        </div>

        <div className="detail-panel__body">

          <div className="detail-specs">
            <div className="detail-spec">
              <span className="detail-spec__value">{num_bedrooms}</span>
              <span className="detail-spec__label">Bedrooms</span>
            </div>
            <div className="detail-spec">
              <span className="detail-spec__value">{num_bathrooms}</span>
              <span className="detail-spec__label">Bathrooms</span>
            </div>
            <div className="detail-spec">
              <span className="detail-spec__value">{max_guests}</span>
              <span className="detail-spec__label">Max Guests</span>
            </div>
            <div className="detail-spec">
              <span className="detail-spec__value">{sleeping_capacity}</span>
              <span className="detail-spec__label">Beds</span>
            </div>
          </div>

          {description && (
            <div className="detail-section">
              <h3 className="detail-section__title">About this property</h3>
              <p className="detail-description">{description}</p>
            </div>
          )}

          <div className="detail-section">
            <h3 className="detail-section__title">Amenities</h3>
            <div className="detail-amenities">
              <Amenity icon="❄️" label="Air Conditioning" active={air_conditioning} />
              <Amenity icon="♿" label="Accessible" active={accessibility} />
              <Amenity icon="📶" label="WiFi" active={wifi} />
            </div>
          </div>

          <div className="detail-pricing">
            <div className="detail-pricing__row">
              <span>Weekly rate</span>
              <span className="detail-pricing__amount">{formatCurrency(price_per_week)}</span>
            </div>
            <div className="detail-pricing__row">
              <span>Minimum stay</span>
              <span>{min_nights} nights</span>
            </div>
            {price_per_person && (
              <div className="detail-pricing__row detail-pricing__row--highlight">
                <span>Per person ({groupSize} guests)</span>
                <span className="detail-pricing__per-person">{formatCurrency(price_per_person)}</span>
              </div>
            )}
          </div>

        </div>
      </aside>
    </>
  )
}
