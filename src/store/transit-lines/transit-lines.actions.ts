import { createAction, props } from '@ngrx/store'
import { TransitLine } from 'src/types/line'

export namespace TransitLinesActions {
  export const AddLine = createAction(`[TRANSIT LINES] Add a line`, props<{ lineId: string; line: TransitLine }>())
  export const SelectStop = createAction(`[TRANSIT LINES] Select a stop`, props<{ selectedStopId: string }>())
}
