import React from "react";
import { Link } from "react-router-dom";
import handleLoginSubmit from "../actions/handleLoginSubmit";
import Header from "../components/Header";
import Input from "../components/Input";

const UserLogin = () =>
  <div className="login-page">
    <div className="wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="entry-header">Log In</div>
      <form className="form" onSubmit={handleLoginSubmit}>
        <Input
          placeholder="email address"
          name="email"
          value={this.state.login.email}
          onChange={this.handleChange.bind(this)}
          errors={this.state.errors.email}
        />
        <Input
          placeholder="password"
          type="password"
          name="password"
          value={this.state.login.password}
          onChange={this.handleChange.bind(this)}
          errors={this.state.errors.password}
        />
        <div className="let-me-in">
          <input
            className="entry-button wobble"
            type="submit"
            value="Let Me In!!"
          />
        </div>
        <Link className="take-me-back" to="/">
          <button className="entry-button wobble">Take Me Back!!</button>
        </Link>
      </form>
      <div className="validate">
        {this.state.errors.general || this.state.errors.inactive}
      </div>
      <img
        className="fruit-border"
        src="../Images/fruit-border.jpg"
        alt="fruit"
      />
    </div>
  </div>;

export default UserLogin;
