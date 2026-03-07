import { useState, useEffect } from 'react'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export function useProperties(filters) {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const params = {}
    if (filters.groupSize)       params.group_size       = filters.groupSize
    if (filters.minBedrooms)     params.min_bedrooms     = filters.minBedrooms
    if (filters.maxPriceWeek)    params.max_price_week   = filters.maxPriceWeek
    if (filters.neighborhood)    params.neighborhood     = filters.neighborhood
    if (filters.propertyType)    params.property_type    = filters.propertyType
    if (filters.accessibility)   params.accessibility    = filters.accessibility
    if (filters.airConditioning) params.air_conditioning = filters.airConditioning
    if (filters.wifi)            params.wifi             = filters.wifi

    setLoading(true)
    setError(null)

    axios.get(`${API_BASE}/api/properties/`, { params })
      .then(res => setProperties(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [filters])

  return { properties, loading, error }
}
