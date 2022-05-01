import React from 'react'
import { TicketCard } from '../../components/TicketCard/TicketCard'
import './Styles.css'
export const Dashboard = () => {
  const tickets = [
    {
      id: 1,
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Edwin Jorge",
      avatar: "https://avatars.githubusercontent.com/u/51832296?v=4",
      status: "done",
      priority: 5,
      progress: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "2020-01-01"
    },
    {
      id: 2,
      category: "Q2 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Edwin Jorge",
      avatar: "https://avatars.githubusercontent.com/u/51832296?v=4",
      status: "In Progress",
      priority: 5,
      progress: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "2020-01-01"
    },
    {
      id: 3,
      category: "Q3 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Edwin Jorge",
      avatar: "https://avatars.githubusercontent.com/u/51832296?v=4",
      status: "In Progress",
      priority: 5,
      progress: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "2020-01-01"
    },
    {
      id: 4,
      category: "Q4 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Edwin Jorge",
      avatar: "https://avatars.githubusercontent.com/u/51832296?v=4",
      status: "In Progress",
      priority: 5,
      progress: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "2020-01-01"
    },
    {
      id: 5,
      category: "Q5 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Edwin Jorge",
      avatar: "https://avatars.githubusercontent.com/u/51832296?v=4",
      status: "In Progress",
      priority: 5,
      progress: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "2020-01-01"
    }
  ]

  const colors = [
    'rgb(255, 179, 186)',
    'rgb(255, 223, 186)',
    'rgb(255, 255, 186)',
    'rgb(186, 255, 201)',
    'rgb(186, 255, 255)',
  ]

  const uniqueCategories = [
    ...new Set(tickets.map(ticket => ticket.category))
  ]

  console.log(uniqueCategories)

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, index) => (
                  <TicketCard
                    key={index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
