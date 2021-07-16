import React from "react";
import NavComponent from "../Component/NavComponent";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "60px", with: "100%" }}></div>
      <div>
        <h1>Home Page</h1>
        <button>
          <Link to="/aboutpage">About</Link>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
