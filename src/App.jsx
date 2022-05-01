import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Ticket } from './pages/Ticket/Ticket'
import './App.css'

export const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/ticket/:id" element={<Ticket editMode={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
