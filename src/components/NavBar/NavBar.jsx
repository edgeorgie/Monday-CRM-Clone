import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus, FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/images/logo.png'
import './Styles.css'

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate("/ticket")}>
          <FiPlus />
        </div>
        <div className="icon" onClick={() => navigate("/")}>
          <FiArrowLeft />
        </div>
      </div>
    </nav>
  );
}
