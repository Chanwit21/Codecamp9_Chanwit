import React from "react";
import './ContactUsComponent.css'

function ContactUsComponent() {
  return (
    <div>
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
          <img src="./PIC/LOGO/h.png" alt="H-LOGO" />
          <img src="./PIC\LOGO\He__2_-removebg-preview.png" alt="H-LOGO" />
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
  );
}

export default ContactUsComponent;
