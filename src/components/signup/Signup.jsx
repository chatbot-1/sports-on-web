import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [submitButton, setSubmitButton] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      return;
    }
    // alert("Successfully Signed Up");

    setSubmitButton(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButton(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        console.log(user)
        navigate("/");
      })
      .catch((err) => {
        setSubmitButton(false)
        alert(err.message)
      });
  };

  return (
    <div className="signup">
      <div className="signup-container">

        <h2 className="signup-title">Signup To Get An Account</h2>
        <form className="signup-data">
          <span>Full Name</span>
          <input
            type="text"
            placeholder="enter your full name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
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
        </form>
        <button
          className="signup-btn"
          onClick={handleSubmission}
          disabled={submitButton}
        >
          Sign Up
        </button>
        <p className="signup-last">
          Already have an Account?{" "}
          <Link to="/login">
            <span>Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
