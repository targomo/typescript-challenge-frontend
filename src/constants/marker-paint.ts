import { CirclePaint } from 'mapbox-gl'

export const MARKER_PAINT = {
  'circle-color': '#000',
  'circle-radius': ['interpolate', ['linear'], ['zoom'], 5, 1, 15, 8],
  'circle-stroke-opacity': 1,
  'circle-stroke-color': '#fff',
  'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 5, 0.5, 15, 2],
  'circle-opacity': 1,
} as CirclePaint
