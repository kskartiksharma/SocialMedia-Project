import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="Sidebar">
        <ul className="nav flex-column">
        <br/>
        <br/>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Post">My feeds</Link>
        </li>
        <br/>
        <br/>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Chat">Chats</Link>
        </li>
        <br/>
        <br/>
        <li className="nav-item">
          <Link className="nav-link" to="/Setting">Settings</Link>
        </li>
        
      </ul>
        </div>
    )
}
