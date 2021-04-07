import { Action, createReducer, on } from '@ngrx/store'
import { TransitLine } from 'src/types/line'
import { TransitLinesActions } from './transit-lines.actions'

export const TRANSIT_LINES_KEY = 'transit-lines'

export interface TransitLinesState {
  lines: { [lineId: string]: TransitLine }
  selectedStopId: string
}

export const transitLinesInitialState: TransitLinesState = {
  lines: {},
  selectedStopId: null,
}

const reducer = createReducer(
  transitLinesInitialState,

  on(TransitLinesActions.AddLine, (state, { lineId, line }) => ({
    ...state,
    lines: { ...state.lines, ...{ [lineId]: line } },
  })),

  on(TransitLinesActions.SelectStop, (state, { selectedStopId }) => ({
    ...state,
    selectedStopId,
  }))
)

export function transitLinesReducer(state: TransitLinesState | undefined, action: Action): TransitLinesState {
  return reducer(state, action)
}
