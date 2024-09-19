import { createEntityAdapter, EntityState } from '@ngrx/entity'
import { Action, createReducer, on } from '@ngrx/store'
import { TransitLine } from 'src/types/line'
import { TransitLinesActions } from './transit-lines.actions'

export const TRANSIT_LINES_KEY = 'transit-lines'

export interface TransitLinesState extends EntityState<TransitLine> {
  selectedStopId: string
}

export const transitLinesAdapter = createEntityAdapter<TransitLine>()
export const transitLinesInitialState: TransitLinesState = transitLinesAdapter.getInitialState({
  selectedStopId: null,
})

const reducer = createReducer(
  transitLinesInitialState,

  on(TransitLinesActions.AddLine, (state, { line }) => transitLinesAdapter.addOne(line, state)),

  on(TransitLinesActions.SelectStop, (state, { selectedStopId }) => ({
    ...state,
    selectedStopId,
  }))
)

export function transitLinesReducer(state: TransitLinesState | undefined, action: Action): TransitLinesState {
  return reducer(state, action)
}
