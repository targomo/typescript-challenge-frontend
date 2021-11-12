import { TransitLine } from 'types/line'
import { AnyAction } from 'redux'
import { TransitLinesActionTypes } from './transit-lines.actions'

export const TRANSIT_LINES_KEY = 'transit-lines'

export interface TransitLinesState {
  lines: { [lineId: string]: TransitLine }
  selectedStopId: string
}

export const transitLinesInitialState: TransitLinesState = {
  lines: {},
  selectedStopId: null,
}

const transitLinesReducer = (state = transitLinesInitialState, { type, payload }: AnyAction): TransitLinesState => {
  switch (type) {
    case TransitLinesActionTypes.ADD_LINE:
      return {
        ...state,
        lines: { ...state.lines, ...{ [payload.lineId]: payload.line } },
      }
    case TransitLinesActionTypes.SELECT_STOP:
      return {
        ...state,
        selectedStopId: payload.selectedStopId,
      }
    default:
      return state
  }
}

export default transitLinesReducer
