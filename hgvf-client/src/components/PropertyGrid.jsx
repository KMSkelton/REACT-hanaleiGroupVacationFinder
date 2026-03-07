import PropertyCard from './PropertyCard'
import './PropertyGrid.css'

export default function PropertyGrid({ properties, loading, error, selectedId, onSelect }) {
  if (loading) return (
    <div className="grid-status">
      <div className="grid-status__spinner" />
      <p>Finding properties...</p>
    </div>
  )

  if (error) return (
    <div className="grid-status grid-status--error">
      <p>⚠️ Couldn't load properties. Is the API running?</p>
      <code>{error}</code>
    </div>
  )

  if (!properties.length) return (
    <div className="grid-status">
      <p className="grid-status__empty">🌊 No properties match your filters.</p>
      <p className="grid-status__hint">Try loosening the group size or price range.</p>
    </div>
  )

  return (
    <div className="property-grid">
      {properties.map(p => (
        <PropertyCard
          key={p.id}
          property={p}
          selected={p.id === selectedId}
          onClick={() => onSelect(p)}
        />
      ))}
    </div>
  )
}
