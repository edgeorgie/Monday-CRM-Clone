import React from 'react'
import './Styles.css'

export const ProgressDisplay = ({ progress }) => {
  return (
    <div className='progress-display'>
      <div className="progress-bar">
        <div className="progress-indicator" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}
