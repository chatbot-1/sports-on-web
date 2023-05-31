import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h2 className="login-title">Login To Your Account</h2>
        <div className="login-data">
          <span>Email</span>
          <input type="email" placeholder="enter your email"/>
          <span>Password</span>
          <input type="password" placeholder="enter your password"/>
        </div>
        <button className="login-btn">Sign In</button>
        <p className="login-last">Don't have an Account? <Link to="/signup"><span>Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
