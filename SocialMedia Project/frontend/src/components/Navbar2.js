import React from 'react'
import './Navbar2.css'
import { Link } from "react-router-dom";

export default function Navbar2() {
    return (
        <div className="navbarbody">
        <nav className="navbar navbar-expand-lg navbar ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/MainPage">
            Talkzie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item right">
                <a className="nav-link" to="/Profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}
