import { fromTransitLines } from './transit-lines.selectors'

describe('Transit Lines Selectors', () => {
  test('lines list with stop count', () => {
    const selector = fromTransitLines.linesList.projector({ line1: [{ name: 'stop1' }, { name: 'stop2' }] })
    expect(selector).toEqual([{ lineId: 'line1', numberOfStops: 2, stops: [{ name: 'stop1' }, { name: 'stop2' }] }])
  })
})
