import React from "react";
import NavComponent from "../Component/NavComponent";
import FooterComponent from "../Component/FooterComponent";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "60px", with: "100%" }}></div>
      <div className="loginPage">
        <section className="login">
          <div className="container">
            <div className="login-form">
              <div className="logo">
                <img src="./PIC/LOGO/h.png" alt="H-LOGO" />
                <img
                  src="./PIC\LOGO\He__2_-removebg-preview.png"
                  alt="H-LOGO"
                />
              </div>
              <form action="#">
                <div className="scope-form-login">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input type="email" name="email" id="email" />
                  <br />
                  <label htmlFor="password">Password</label>
                  <br />
                  <input type="email" name="email" id="email" />
                    <p><Link to="#" className="fogot-password">Forgot Your Password?</Link></p>
                  <input type="submit" value="LOG IN" />
                  <p>
                    Don’t have an account?{" "}
                    <Link to="/registerpage" className='register'>Register</Link>
                  </p>
                </div>
              </form>
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

export default LoginPage;
