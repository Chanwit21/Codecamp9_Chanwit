import React from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../Component/FooterComponent";
import NavComponent from "../Component/NavComponent";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "60px", with: "100%" }}></div>
      <div className="registerPage">
        <section className="register">
          <div className="container">
            <div className="form-register">
              <div className="row-head-of-form">
                <h1>Create Your Account</h1>
                <div className="logo">
                  <img src="./PIC/LOGO/h.png" alt="H-LOGO" />
                  <img
                    src="./PIC\LOGO\He__2_-removebg-preview.png"
                    alt="H-LOGO"
                  />
                </div>
              </div>
              <form action="#">
                <div className="scope-register-form">
                  <div className="form-row">
                    <div className="firstname">
                      <label htmlFor="firstname">Firstname</label>
                      <br />
                      <input type="text" name="firstname" id="firstname" />
                    </div>
                    <div className="lastname">
                      <label htmlFor="lastname">Lastname</label>
                      <br />
                      <input type="text" name="lastname" id="lastname" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="email">
                      <label htmlFor="email">Email</label>
                      <br />
                      <input type="email" name="email" id="email" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="password">
                      <label htmlFor="password">Password</label>
                      <br />
                      <input type="password" name="password" id="password" />
                    </div>
                    <div className="confirmPassword">
                      <label htmlFor="confirmPassword">Confirm password</label>
                      <br />
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                      />
                    </div>
                  </div>
                  <input type="submit" value="Register" />
                </div>
              </form>
              <p>
                Do you already have an account?{" "}
                <Link to="/loginpage">Login</Link>
              </p>
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

export default RegisterPage;
