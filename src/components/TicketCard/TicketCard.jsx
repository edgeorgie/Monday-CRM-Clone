import React from 'react'
import { AvatarDisplay } from '../../components/AvatarDisplay/AvatarDisplay'
import { StatusDisplay } from '../../components/StatusDisplay/StatusDisplay'
import { PriorityDisplay } from '../../components/PriorityDisplay/PriorityDisplay'
import { ProgressDisplay } from '../../components/ProgressDisplay/ProgressDisplay'
import { DeleteBlock } from '../../components/DeleteBlock/DeleteBlock' 
import { Link } from 'react-router-dom'
import './Styles.css'

export const TicketCard = ({ color, ticket }) => {
  return (
    <div className="ticket-card">
      <Link to={`/ticket/${ticket.documentId}`} id="link">
        <div className="ticket-color" style={{ backgroundColor: color }}></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.progress} />
      </Link>
      <DeleteBlock />
    </div>
  );
};
