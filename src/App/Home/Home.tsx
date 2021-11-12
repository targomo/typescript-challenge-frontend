import React from 'react'
import './Home.scss'

import { useDispatch, useSelector } from 'react-redux'
import { DirectionsTransit, StopCircle } from '@mui/icons-material'

import { fromTransitLines } from 'store/transit-lines/transit-lines.selectors'
import { TransitLineActions } from 'store/transit-lines/transit-lines.actions'

function Home() {
  const dispatch = useDispatch()
  const lines = useSelector(fromTransitLines.linesList)

  const selectStop = (selectedStopId: string): void => {
    dispatch(TransitLineActions.SelectStop(selectedStopId))
  }

  return (
    <div className="home">
      <h1 className="title">All Lines</h1>

      <div className="lines-list">
        {lines.map((line) => (
          <div className="line-item" key={line.lineId}>
            <div className="line-header">
              <DirectionsTransit className="icon" />
              <h2 className="subtitle">{line.lineId}</h2>
              <span className="stops-count">{line.numberOfStops} Stops</span>
            </div>

            <div className="stops-list">
              {line.stops.map((stop) => (
                <div onClick={() => selectStop(stop.stopId)} className="stop-item" key={stop.stopId}>
                  <StopCircle className="icon" />
                  <span>{stop.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
