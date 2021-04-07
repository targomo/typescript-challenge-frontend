export interface TransitStop {
  name: string
  stopId: string
  lat: number
  lng: number
  prevStopId: string
  nextStopId: string
  peopleOn: number
  peopleOff: number
  reachablePopulationWalk: number
  reachablePopulationBike: number
}
