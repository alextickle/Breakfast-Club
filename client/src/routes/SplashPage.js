import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const SplashPage = () =>
  <div className="splash-page">
    <div className="wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="button-container">
        <div className="login">
          <Link className="link" to="/login">
            Log In
          </Link>
        </div>
        <div className="signup">
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </div>
        <img
          className="fruit-border"
          src="../Images/fruit-border.jpg"
          alt="fruit"
        />
      </div>
    </div>
  </div>;

export default SplashPage;
