import React from "react";
import { Link } from "react-router-dom";
import NavComponent from "../Component/NavComponent";
import FooterComponent from "../Component/FooterComponent";
import "./AboutPage.css";
import ContactUsComponent from "../Component/ContactUsComponent";

function AboutPage() {
  return (
    <div>
      <NavComponent />
      {/* มีไว้เพื่อดันให้ Content อยู่ใต้ Nav Bar */}
      <div style={{ paddingTop: "60px", with: "100%" }}></div>
      <div className="about-page">
        <section className="main-text">
          <div className="container">
            <h1>About Healthy At Home</h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Heathy At Home is a program that
              will help you shape up at home. We have a team of trainers with
              practical experience in bodybuilding to design and track your
              program to fit your lifestyle.
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You can consult and adjust your
              exercise schedule if you're in a rush, with a trainer on track for
              the duration of the program.
            </p>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <ContactUsComponent/>
          </div>
        </section>
      </div>
      {/* Space Bottom */}
      <div style={{ marginBottom: "40px" }}></div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default AboutPage;
