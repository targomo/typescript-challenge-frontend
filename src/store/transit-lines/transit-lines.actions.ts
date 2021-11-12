import { TransitLine } from 'types/line'
import { AnyAction } from 'redux'

export enum TransitLinesActionTypes {
  ADD_LINE = '[TRANSIT LINE ACTIONS] Add line',
  SELECT_STOP = '[TRANSIT LINE ACTIONS] Select stop',
}

export namespace TransitLineActions {
  export const AddLine = (lineId: string, line: TransitLine): AnyAction => ({
    type: TransitLinesActionTypes.ADD_LINE,
    payload: { lineId, line },
  })

  export const SelectStop = (selectedStopId: string): AnyAction => ({
    type: TransitLinesActionTypes.SELECT_STOP,
    payload: { selectedStopId },
  })
}
