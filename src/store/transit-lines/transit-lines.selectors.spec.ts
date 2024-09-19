import { mockTransitStop } from 'src/__mocks__/line.mock'
import { fromTransitLines } from './transit-lines.selectors'

describe('Transit Lines Selectors', () => {
  test('should return all stops', () => {
    const stop1 = mockTransitStop()
    const stop2 = mockTransitStop()
    const line1 = { id: '1', stops: [stop1] }
    const line2 = { id: '2', stops: [stop2] }
    const selectAll = [line1, line2]

    expect(fromTransitLines.allStops.projector(selectAll)).toEqual([stop1, stop2])
  })
})
