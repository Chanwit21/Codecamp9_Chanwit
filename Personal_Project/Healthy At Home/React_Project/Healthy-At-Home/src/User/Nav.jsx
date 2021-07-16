import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <Router>
            <nav className="navBar">
            <div className="container">
              <div className="Logo">
                <div className="H-Logo">
                  <img src="../PIC/LOGO/h.png" alt="H_Logo" />
                </div>
                <div className="text-logo">
                  <img
                    src="../PIC/LOGO/He__2_-removebg-preview.png"
                    alt="Taxt-Logo"
                  />
                </div>
              </div>
              <div className="nav-content">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Service</Link>
                  </li>
                  <li>
                    <Link to="#">Trainers</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
                <div className="login-status">
                  <div className="userstatus-icon">
                    <img src="../PIC/Icon/user.png" alt="User-icon" />
                  </div>
                  <p>Login/Register</p>
                </div>
              </div>
            </div>
          </nav>
            </Router>
        </div>
    )
}

export default Nav
