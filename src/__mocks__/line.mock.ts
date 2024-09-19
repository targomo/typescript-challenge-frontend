import { faker } from '@faker-js/faker'
import { TransitStop } from 'src/types/line'

export function mockTransitStop(seed: Partial<TransitStop> = {}): TransitStop {
  return {
    name: faker.word.noun(),
    id: faker.string.uuid(),
    lat: +faker.location.latitude(),
    lng: +faker.location.longitude(),
    prevId: faker.string.uuid(),
    nextId: faker.string.uuid(),
    peopleOn: faker.number.int(),
    peopleOff: faker.number.int(),
    reachablePopulationWalk: faker.number.int(),
    reachablePopulationBike: faker.number.int(),
    ...seed,
  }
}
