import React from 'react'
import { Link } from "react-router-dom";
import './NavComponent.css' 

function NavComponent() {
    return (
        <div>
            <nav className="navBar">
            <div className="navContainer">
              <div className="Logo">
                <div className="H-Logo">
                  <img src="../PIC/LOGO/h.png" alt="H_Logo"/>
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
                    <Link to="servicepage">Service</Link>
                  </li>
                  <li>
                    <Link to="/trainerpage">Trainers</Link>
                  </li>
                  <li>
                    <Link to="/aboutpage">About</Link>
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
        </div>
    )
}

export default NavComponent
