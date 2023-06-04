import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [submitButton, setSubmitButton] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      alert("fill all the details")
      return;
    }

    setSubmitButton(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButton(false);
        // console.log(user);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButton(false);
        alert(err.message);
      });
  };

  return (

    <>
    <Header/>

    <div className="login">
      <div className="login-content">

      
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <div className="login-data">
          <span>Email</span>
          <input
            type="email"
            placeholder="enter your email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <span>Password</span>
          <input
            type="password"
            placeholder="enter your password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
        </div>
        <button
          className="login-btn"
          onClick={handleSubmission}
          disabled={submitButton}
        >
          Sign In
        </button>
        <p className="login-last">
          Don't have an Account?{" "}
          <Link to="/signup">
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
      <Link to="/"><button className="terms-btn">Back to the home page</button></Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
