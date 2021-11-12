import React, { useRef, useEffect, useState } from 'react'
import './App.scss'

import { Map } from 'mapbox-gl'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

import { TransitLineActions } from 'store/transit-lines/transit-lines.actions'
import { fromTransitLines } from 'store/transit-lines/transit-lines.selectors'

import { u9 } from 'constants/u9'
import { MARKER_PAINT } from 'constants/marker-paint'

import Home from './Home'
import Detail from './Detail'

function App() {
  const STOPS_SOURCE_ID = 'stops-source'
  const STOPS_LAYER_ID = 'stops-layer'

  const mapContainer = useRef(null)
  const map = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const stopsSource = useSelector(fromTransitLines.stopsPointGeoJson)
  const selectedStopId = useSelector(fromTransitLines.selectedStopId)

  const [isMapLoaded, setIsMapLoadedValue] = useState<boolean>(false)

  useEffect(() => {
    dispatch(TransitLineActions.AddLine('u9', u9))

    map.current = new Map({
      container: mapContainer.current,
      style: 'https://maps.targomo.com/styles/positron-gl-style.json',
      center: { lat: 52.52, lng: 13.4 },
      zoom: 10,
    })

    map.current.on('load', () => setIsMapLoadedValue(true))

    return () => setIsMapLoadedValue(false)
  }, [dispatch])

  useEffect(() => {
    if (!map.current.isStyleLoaded()) {
      return
    }

    const existingSource = map.current.getSource(STOPS_SOURCE_ID)
    if (existingSource) {
      existingSource.setData(stopsSource.data)
    } else {
      map.current.addSource(STOPS_SOURCE_ID, stopsSource)
      map.current.addLayer({ type: 'circle', source: STOPS_SOURCE_ID, id: STOPS_LAYER_ID, paint: MARKER_PAINT })
    }
  }, [stopsSource, isMapLoaded])

  useEffect(() => {
    navigate(selectedStopId ? '/detail' : '/home')
  }, [selectedStopId, navigate])

  return (
    <div>
      <Box boxShadow={5} className="sidebar">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Box>

      <div ref={mapContainer} className="map" />
    </div>
  )
}

export default App
