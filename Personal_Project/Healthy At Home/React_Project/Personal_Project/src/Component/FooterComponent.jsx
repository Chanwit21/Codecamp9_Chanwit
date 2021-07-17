import React from "react";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footer-copyright">
            <span>Fit At Home</span>
            <img src="./PIC/Icon/copyright.png" alt="copyRight" />
            <span>2021</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
