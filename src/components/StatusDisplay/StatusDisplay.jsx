import React from 'react'
import './Styles.css'

export const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color
    switch (status) {
      case 'done':
        color = 'rgb(186, 255, 201)'
        break
      case 'In Progress':
        color = 'rgb(255, 223, 183)'
        break
      case 'stuck':
        color = 'rgb(255, 179, 186)'
        break
      default:
        color = 'rgb(186, 255, 255)'
    }
    return color
  }

  return (
    <div className='status-display' style={{ backgroundColor: getColor(status) }}>
      {status}
    </div>
  )
}
