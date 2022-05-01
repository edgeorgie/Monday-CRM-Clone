import React from 'react'
import { FiTrash } from 'react-icons/fi'
import './Styles.css'

export const DeleteBlock = () => {
  const deleteTicket = () => {
    console.log('deleted')
  }

  return (
    <div className='delete-block'>
      <div className="delete-icon" onClick={deleteTicket}>
        <FiTrash />
      </div>

    </div>
  )
}
