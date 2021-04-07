import { ActionReducerMap } from '@ngrx/store'
import { TransitLinesEffects } from './transit-lines/transit-lines.effects'
import { transitLinesReducer, TransitLinesState, TRANSIT_LINES_KEY } from './transit-lines/transit-lines.reducer'

export interface RootState {
  [TRANSIT_LINES_KEY]: TransitLinesState
}

export const reducers: ActionReducerMap<RootState> = {
  [TRANSIT_LINES_KEY]: transitLinesReducer,
}

export const effects = [TransitLinesEffects]
