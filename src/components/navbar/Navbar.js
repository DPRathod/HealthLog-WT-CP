import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="nav">
        <div className="logoText">HealthLog</div>
        <div className="logoutButton">
            <button className="logout">LOGOUT</button>
        </div>
    </div>
  )
}
