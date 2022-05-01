import React from 'react'
import { FiStar } from 'react-icons/fi'
import './Styles.css'

export const PriorityDisplay = ({ priority }) => {
  return (
    <div className="priority-display">
      <div className="start-container">
        <FiStar style={{ fill: priority >= 1 ? "rgb(253, 253, 150)" : "" }} />
        <FiStar style={{ fill: priority >= 2 ? "rgb(253, 253, 150)" : "" }} />
        <FiStar style={{ fill: priority >= 3 ? "rgb(253, 253, 150)" : "" }} />
        <FiStar style={{ fill: priority >= 4 ? "rgb(253, 253, 150)" : "" }} />
        <FiStar style={{ fill: priority >= 5 ? "rgb(253, 253, 150)" : "" }} />
      </div>
    </div>
  );
}
