import { TransitLinesActions } from './transit-lines.actions'
import { transitLinesInitialState, transitLinesReducer, TransitLinesState } from './transit-lines.reducer'

describe('Transit Lines Reducer', () => {
  let initialState: TransitLinesState

  beforeEach(() => {
    initialState = transitLinesInitialState
  })

  it('should select a stop', () => {
    const state = transitLinesReducer(initialState, TransitLinesActions.SelectStop({ selectedStopId: 'foo' }))
    expect(state).toEqual({ ...initialState, selectedStopId: 'foo' })
  })
})
