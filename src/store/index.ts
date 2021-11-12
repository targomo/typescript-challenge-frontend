import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import transitLinesReducer, { TRANSIT_LINES_KEY, TransitLinesState } from './transit-lines/transit-lines.reducer'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export interface RootState {
  [TRANSIT_LINES_KEY]: TransitLinesState
}

const store = createStore(
  combineReducers({
    [TRANSIT_LINES_KEY]: transitLinesReducer,
  }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
