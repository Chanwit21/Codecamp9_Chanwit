import React from "react";
import { Link } from "react-router-dom";
import NavComponent from "../Component/NavComponent";

function AboutPage() {
  return (
    <div>
      <NavComponent />
      {/* มีไว้เพื่อดันให้ Content อยู่ใต้ Nav Bar */}
      <div style={{ paddingTop: "60px", with: "100%" }}></div> 
      <div>
        <h1>About Page</h1>
      <button>
        <Link to="/">HOME</Link>
      </button>
      </div>
    </div>
  );
}

export default AboutPage;
