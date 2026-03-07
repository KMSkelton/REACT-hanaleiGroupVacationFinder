import './FilterSidebar.css'

const NEIGHBORHOODS = [
  'Hanalei', 'Princeville', 'Haena', 'Kilauea', 'Kapaa', 'Poipu', 'Waimea'
]

export default function FilterSidebar({ filters, onChange, resultCount }) {
  const set = (key, value) => onChange({ ...filters, [key]: value })

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h2 className="sidebar__title">Filters</h2>
        {resultCount !== null && (
          <span className="sidebar__count">{resultCount} properties</span>
        )}
      </div>

      <div className="sidebar__section">
        <label className="sidebar__label">Group Size</label>
        <input
          className="sidebar__input"
          type="number"
          min="1"
          max="30"
          placeholder="How many people?"
          value={filters.groupSize || ''}
          onChange={e => set('groupSize', e.target.value ? parseInt(e.target.value) : null)}
        />
        {filters.groupSize && (
          <p className="sidebar__hint">Showing properties that sleep {filters.groupSize}+. Price per person calculated.</p>
        )}
      </div>

      <div className="sidebar__section">
        <label className="sidebar__label">Neighborhood</label>
        <select
          className="sidebar__select"
          value={filters.neighborhood || ''}
          onChange={e => set('neighborhood', e.target.value || null)}
        >
          <option value="">All areas</option>
          {NEIGHBORHOODS.map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      <div className="sidebar__section">
        <label className="sidebar__label">Min Bedrooms</label>
        <input
          className="sidebar__input"
          type="number"
          min="1"
          max="10"
          placeholder="Any"
          value={filters.minBedrooms || ''}
          onChange={e => set('minBedrooms', e.target.value ? parseInt(e.target.value) : null)}
        />
      </div>

      <div className="sidebar__section">
        <label className="sidebar__label">Max Weekly Price</label>
        <input
          className="sidebar__input"
          type="number"
          min="0"
          step="500"
          placeholder="No limit"
          value={filters.maxPriceWeek || ''}
          onChange={e => set('maxPriceWeek', e.target.value ? parseFloat(e.target.value) : null)}
        />
      </div>

      <div className="sidebar__section">
        <label className="sidebar__label">Property Type</label>
        <select
          className="sidebar__select"
          value={filters.propertyType || ''}
          onChange={e => set('propertyType', e.target.value || null)}
        >
          <option value="">Any</option>
          <option value="house">House</option>
          <option value="cottage">Cottage</option>
          <option value="condo">Condo</option>
        </select>
      </div>

      <div className="sidebar__section">
        <label className="sidebar__label">Amenities</label>
        <div className="sidebar__checkboxes">
          <label className="sidebar__checkbox">
            <input
              type="checkbox"
              checked={filters.airConditioning || false}
              onChange={e => set('airConditioning', e.target.checked || null)}
            />
            Air Conditioning
          </label>
          <label className="sidebar__checkbox">
            <input
              type="checkbox"
              checked={filters.accessibility || false}
              onChange={e => set('accessibility', e.target.checked || null)}
            />
            Wheelchair Accessible
          </label>
          <label className="sidebar__checkbox">
            <input
              type="checkbox"
              checked={filters.wifi || false}
              onChange={e => set('wifi', e.target.checked || null)}
            />
            WiFi
          </label>
        </div>
      </div>

      <button
        className="sidebar__reset"
        onClick={() => onChange({})}
      >
        Clear all filters
      </button>
    </aside>
  )
}
