import React from 'react'
import './Detail.scss'

import { IconButton } from '@mui/material'
import { Clear } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'

import { fromTransitLines } from 'store/transit-lines/transit-lines.selectors'
import { TransitLineActions } from 'store/transit-lines/transit-lines.actions'

function Detail() {
  const dispatch = useDispatch()
  const selectedStop = useSelector(fromTransitLines.selectedStop)

  const clearSelection = (): void => {
    dispatch(TransitLineActions.SelectStop(null))
  }

  return (
    <div className="detail">
      <div className="detail-header">
        <h1 className="title">{selectedStop?.name || 'No selection'}</h1>
        <IconButton className="button" onClick={clearSelection}>
          <Clear className="icon" />
        </IconButton>
      </div>

      <span>Its very empty here (ಠ_ಠ)</span>

      {/*TODO add more info about the stop*/}
    </div>
  )
}

export default Detail
