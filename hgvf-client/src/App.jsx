import { useState, useCallback } from 'react'
import Header from './components/Header'
import FilterSidebar from './components/FilterSidebar'
import PropertyGrid from './components/PropertyGrid'
import MapPanel from './components/MapPanel'
import PropertyDetail from './components/PropertyDetail'
import { useProperties } from './hooks/useProperties'
import './App.css'

export default function App() {
  const [filters, setFilters] = useState({})
  const [selectedProperty, setSelectedProperty] = useState(null)

  const { properties, loading, error } = useProperties(filters)

  const handleSelect = useCallback((property) => {
    setSelectedProperty(prev => prev?.id === property.id ? null : property)
  }, [])

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters)
    setSelectedProperty(null)
  }, [])

  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <FilterSidebar
          filters={filters}
          onChange={handleFilterChange}
          resultCount={loading ? null : properties.length}
        />

        <div className="app__content">
          <div className="app__grid-panel">
            <PropertyGrid
              properties={properties}
              loading={loading}
              error={error}
              selectedId={selectedProperty?.id}
              onSelect={handleSelect}
            />
          </div>

          <div className="app__map-panel">
            <MapPanel
              properties={properties}
              selectedProperty={selectedProperty}
            />
          </div>
        </div>
      </div>

      <PropertyDetail
        property={selectedProperty}
        groupSize={filters.groupSize}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  )
}
