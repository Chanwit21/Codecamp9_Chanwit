import React from "react";
import NavComponent from "../Component/NavComponent";
import { Link } from "react-router-dom";
import FooterComponent from "../Component/FooterComponent";
import "./HomePage.css";
import TrainerCardComponent from "../Component/TrainerCardComponent";

function HomePage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "60px", with: "100%" }}></div>
      <div className="homepage-body">
        <section className="promotion">
          <div className="container">
            <img
              src="../PIC/Icon/left-arrow.png"
              alt="left-arrow"
              className="arrow arrow-left"
            />
            <img
              src="../PIC\Picxel\PIC_Promo\pexels-william-choquette-1954524.jpg"
              alt="run-promo"
              className="img-promo"
            />
            <img
              src="../PIC/Icon/right-arrow.png"
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
                src="../PIC/Icon/left-arrow.png"
                alt="left-arrow"
                className="arrowResult"
              />
              <img
                src="../PIC/Picxel/PIC_Result/pexels-karolina-grabowska-4498516.jpg"
                alt="result1"
                className="resultImage"
              />
              <img
                src="../PIC/Icon/right-arrow.png"
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
              pathOfImg = '../PIC/Trainer/pexels-andrew-dick-733500.jpg'
              nickName = "Trainer Ball"
              Fullname = "Suthep Prabkeaw"
              />
              <TrainerCardComponent 
              pathOfImg = '../PIC/Trainer/pexels-thisisengineering-3912944.jpg'
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
              <div className="contact-us-text">
                <h1>Contact us</h1>
                <p>Tal : 02-xxx-xxxx</p>
                <p>Line : @Fit@Home</p>
                <p>Email : FitAtHome@gmail.com</p>
                <div className="contact-us-img">
                  <img src="../PIC/Icon/twitter.png" alt="twitter" />
                  <img src="../PIC/Icon/facebook.png" alt="facebook" />
                  <img src="../PIC/Icon/instagram.png" alt="instagram" />
                </div>
              </div>
              <div className="contact-us-form">
                <form action="#">
                  <div className="label">
                    <label htmlFor="firstname">Firstname : </label>
                    <br />
                    <label htmlFor="lastname">Lastname : </label>
                    <br />
                    <label htmlFor="email">Email : </label>
                    <br />
                    <label htmlFor="aditional">Additional Detial : </label>
                  </div>
                  <div className="input">
                    <input type="text" id="firstname" name="firstname" />
                    <br />
                    <input type="text" id="lastname" name="lastname" />
                    <br />
                    <input type="text" id="email" name="email" />
                    <br />
                    <textarea
                      id="aditional"
                      name="aditional"
                      rows="4"
                      cols="50"
                    ></textarea>
                  </div>
                  <br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
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

export default HomePage;
