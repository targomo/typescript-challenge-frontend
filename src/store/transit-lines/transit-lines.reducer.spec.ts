import { TransitLinesActions } from './transit-lines.actions'
import { transitLinesInitialState, transitLinesReducer } from './transit-lines.reducer'

describe('Transit Lines Reducer', () => {
  test('should select a stop', () => {
    const state = transitLinesReducer(
      transitLinesInitialState,
      TransitLinesActions.SelectStop({ selectedStopId: 'foo' })
    )
    expect(state).toEqual({ ...transitLinesInitialState, selectedStopId: 'foo' })
  })
})
