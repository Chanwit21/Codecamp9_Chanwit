import React from "react";
import FooterComponent from "../Component/FooterComponent";
import NavComponent from "../Component/NavComponent";
import ServiceProgramEvenRowComponent from "../Component/ServiceProgramEvenRowComponent";
import ServiceProgramOddRowComponent from "../Component/ServiceProgramOddRowComponent";
import "./ServicePage.css";

function ServicePage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "60px", with: "100%" }}></div>
      <div className="service-page">
        <section className="service-program">
          <div className="container">
            <div className="odd-section-of-secvice-card">
              <ServiceProgramOddRowComponent
                imgPath="../PIC/Course/pexels-jacoby-clarke-1933524.jpg"
                courseName="90 Days Program"
                content="Suitable for people who want to change their shape in a short time."
                Price="15,000"
              />
            </div>
            <div className="even-section-of-secvice-card">
              <ServiceProgramEvenRowComponent
                imgPath="../PIC/Course/pexels-leon-ardho-1552248.jpg"
                courseName="3 Month Program"
                content="Suitable for those who want to change their shape sustainably and want to have knowledge on continuous health care."
                Price="30,000"
              />
            </div>
            <div className="odd-section-of-secvice-card">
              <ServiceProgramOddRowComponent
                imgPath="../PIC/Course/pexels-cesar-galeão-3289711.jpg"
                courseName="6 Month Program"
                content="Suitable for those who want to lose fat in large amounts and sustainably."
                Price="60,000"
              />
            </div>
          </div>
        </section>
        <section className="form-consultant">
          <div className="container">
              <h1>Still can't decide?</h1>
            <div className="form-to-decide">
              <img src="./PIC/LOGO/h.png" alt="H-LOGO" />
              <img src="./PIC\LOGO\He__2_-removebg-preview.png" alt="H-LOGO" />
              <h1>Come and consult with our trainers first.</h1>
              <form action="#">
                <div className="fullname-form-consultant">
                  <label htmlFor="firstname">Firstname : </label>
                  <input type="text" id="firatname" name="firstname" />
                  <label htmlFor="lastname">Lastname : </label>
                  <input type="text" id="lastname" name="lastname" />
                </div>
                <div className="weight-hight-form-consultant">
                  <label htmlFor="weight">Weight : </label>
                  <input type="text" id="weight" name="weight" />
                  <label htmlFor="height">Height : </label>
                  <input type="text" id="height" name="height" />
                </div>
                <div className="email-form-consultant">
                  <label htmlFor="email">Email : </label>
                  <input type="text" id="email" name="email" />
                </div>
                <div className="additional-form-consultant">
                  <label htmlFor="additional">Additional Detial : </label>
                  <textarea
                    name="additional"
                    id="additional"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </section>
      </div>
      <div style={{ marginBottom: "40px", width: "100%" }}></div>
      <FooterComponent />
    </div>
  );
}

export default ServicePage;
