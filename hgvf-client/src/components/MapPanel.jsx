import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import './MapPanel.css'

const HANALEI_CENTER = [22.205, -159.500]
const DEFAULT_ZOOM = 11

function FlyTo({ property }) {
  const map = useMap()
  useEffect(() => {
    if (property) {
      map.flyTo([parseFloat(property.latitude), parseFloat(property.longitude)], 14, {
        duration: 1.2
      })
    }
  }, [property, map])
  return null
}

export default function MapPanel({ properties, selectedProperty }) {
  return (
    <div className="map-panel">
      <MapContainer
        center={HANALEI_CENTER}
        zoom={DEFAULT_ZOOM}
        className="map-panel__map"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {properties.map(p => (
          <Marker
            key={p.id}
            position={[parseFloat(p.latitude), parseFloat(p.longitude)]}
          >
            <Popup>
              <div className="map-popup">
                <strong>{p.name}</strong>
                <span>{p.neighborhood}</span>
                <span>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                  }).format(p.price_per_week)} / week
                </span>
              </div>
            </Popup>
          </Marker>
        ))}

        {selectedProperty && <FlyTo property={selectedProperty} />}
      </MapContainer>
    </div>
  )
}
