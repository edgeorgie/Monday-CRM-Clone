import React from 'react'
import { FiUser } from 'react-icons/fi'
import './Styles.css'

export const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img
          src={ticket.avatar ? ticket.avatar : FiUser}
          alt={"Photo of " + ticket.owner}
        />
      </div>
    </div>
  );
}
