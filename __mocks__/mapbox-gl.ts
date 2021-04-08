export {
  FeatureIdentifier,
  GeoJSONSource,
  GeoJSONSourceRaw,
  Layer,
  Map as MapboxMap,
  MapboxEvent,
  MapboxGeoJSONFeature,
  MapboxOptions,
  MapMouseEvent,
  MapSourceDataEvent,
  MapStyleDataEvent,
  PointLike,
  VectorSource,
} from 'mapbox-gl'

export class Map {
  private canvas = document.createElement('canvas')

  private sources = {}
  private layers = {}

  zoom: number = null

  constructor(init: any) {
    Object.assign(this, init)
  }

  getCanvasContainer = jest.fn().mockReturnValue(this.canvas)
  getZoom = jest.fn()
  getBearing = jest.fn()
  getBounds = jest.fn()
  getStyle = jest
    .fn()
    .mockReturnValue({ layers: [{ id: 'fake_symbol_layer', type: 'symbol', 'source-layer': 'transportation' }] })

  setStyle = jest.fn()
  setFeatureState = jest.fn()
  setZoom = jest.fn().mockImplementation((z) => (this.zoom = z))
  setPitch = jest.fn()
  easeTo = jest.fn()
  getCenter = jest.fn()
  setCenter = jest.fn()
  setPaintProperty = jest.fn()
  setLayoutProperty = jest.fn()
  setFilter = jest.fn()

  addSource = jest.fn().mockImplementation((sourceId: string, source: any) => (this.sources[sourceId] = source))
  getSource = jest.fn().mockImplementation((sourceId: string) => this.sources[sourceId])
  removeSource = jest.fn().mockImplementation((sourceId: string) => delete this.sources[sourceId])

  addLayer = jest.fn().mockImplementation((layer: any) => (this.layers[layer.id] = layer))
  getLayer = jest.fn().mockImplementation((layerId: string) => this.layers[layerId])
  removeLayer = jest.fn().mockImplementation((layerId: string) => delete this.layers[layerId])

  isStyleLoaded = jest.fn().mockReturnValue(true)

  fitBounds = jest.fn()
  moveLayer = jest.fn()

  queryRenderedFeatures = jest.fn()
  removeFeatureState = jest.fn()

  once = jest.fn().mockImplementation((name, cb) => cb())
  on = jest.fn().mockImplementation((name, cb) => cb())
}
