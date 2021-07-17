import React from "react";
import NavComponent from "../Component/NavComponent";
import { Link } from "react-router-dom";
import FooterComponent from "../Component/FooterComponent";
import "./HomePage.css";
import TrainerCardComponent from "../Component/TrainerCardComponent";
import ContactUsComponent from "../Component/ContactUsComponent";

function HomePage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "60px", with: "100%" }}></div>
      <div className="homepage-body">
        <section className="promotion">
          <div className="container">
            <img
              src="./PIC/Icon/left-arrow.png"
              alt="left-arrow"
              className="arrow arrow-left"
            />
            <img
              src="./PIC\Picxel\PIC_Promo\pexels-william-choquette-1954524.jpg"
              alt="run-promo"
              className="img-promo"
            />
            <img
              src="./PIC/Icon/right-arrow.png"
              alt="right-arrow"
              className="arrow arrow-right"
            />
          </div>
        </section>
        <section className="result">
          <div className="container">
            <div className="result-text">
              <h1>Result</h1>
            </div>
            <div className="result-img">
              <img
                src="./PIC/Icon/left-arrow.png"
                alt="left-arrow"
                className="arrowResult"
              />
              <img
                src="./PIC/Picxel/PIC_Result/pexels-karolina-grabowska-4498516.jpg"
                alt="result1"
                className="resultImage"
              />
              <img
                src="./PIC/Icon/right-arrow.png"
                alt="right-arrow"
                className="arrowResult"
              />
            </div>
          </div>
        </section>
        <section className="trainer">
          <div className="container">
            <div className="trainer-text">
              <h1>Trainer</h1>
            </div>
            <Link to='/trainerpage' style={{textDecoration:"none",color:"black"}}>
            <div className="trainer-card-row">
              <TrainerCardComponent 
              pathOfImg = './PIC/Trainer/pexels-andrew-dick-733500.jpg'
              nickName = "Trainer Ball"
              Fullname = "Suthep Prabkeaw"
              />
              <TrainerCardComponent 
              pathOfImg = './PIC/Trainer/pexels-thisisengineering-3912944.jpg'
              nickName = "Trainer Job"
              Fullname = "Thanapob SingHaseanee"
              />
            </div></Link>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <div className="horizental-line"></div>
            <div className="contact-us-content">
            <ContactUsComponent />
            </div>
          </div>
        </section>
      </div>
      {/* Space Bottom */}
      <div style={{ marginBottom: "40px" }}></div>
        <FooterComponent />
    </div>
  );
}

export default HomePage;
