import { createFeatureSelector, createSelector } from '@ngrx/store'
import { GeoJSONSourceSpecification } from 'maplibre-gl'
import { TRANSIT_LINES_KEY, transitLinesAdapter, TransitLinesState } from './transit-lines.reducer'

export namespace fromTransitLines {
  export const transitLinesState = createFeatureSelector<TransitLinesState>(TRANSIT_LINES_KEY)

  export const { selectAll, selectEntities, selectIds } = transitLinesAdapter.getSelectors(transitLinesState)

  export const selectedStopId = createSelector(transitLinesState, (state) => state.selectedStopId)

  export const allStops = createSelector(selectAll, (lines) => lines.map((line) => line.stops).flat())

  export const selectedStop = createSelector(selectedStopId, allStops, (selStopId, stops) =>
    stops.find((stop) => stop.id === selStopId)
  )

  /**
   * Mapbox source for the locations
   */
  export const stopsPointGeoJson = createSelector(
    allStops,
    (stops) =>
      ({
        type: 'geojson',
        promoteId: '_id',
        data: {
          type: 'FeatureCollection',
          features: stops.map((stop) => ({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [stop.lng, stop.lat] },
            properties: {
              peopleOn: stop.peopleOn,
              peopleOff: stop.peopleOff,
              reachablePopulationBike: stop.reachablePopulationBike,
              reachablePopulationWalk: stop.reachablePopulationWalk,
              _id: stop.id,
            },
          })),
        },
      }) as GeoJSONSourceSpecification
  )

  // Issue https://github.com/targomo/typescript-challenge-frontend/issues/1
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export const stopsLinesGeoJson = createSelector(selectAll, (lines) => {
    return null
  })
}
