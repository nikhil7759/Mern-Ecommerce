import { useState } from "react";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useToast } from "../../Global/Toast/Toast"; // Import toast functions
import "./SignUp.css"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added state for confirm password
  const { notifySuccess, notifyError } = useToast(); // Destructure notify functions
  const navigate = useNavigate(); // Get the navigation function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      notifyError("Passwords do not match!"); // Display error toast
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      notifySuccess("Account successfully created!"); // Display success toast
      navigate("/login"); // Navigate to login page after successful sign-up
    } catch (err) {
      notifyError("Sign up failed. Please try again."); // Display error toast
      console.error(err);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="header">
            <div className="text">SIGN UP</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <i className="bi bi-person-circle"></i>
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                onChange={emailHandler}
                value={email}
              />
            </div>
            <div className="input">
              <i className="bi bi-key-fill"></i>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                onChange={passwordHandler}
                value={password}
              />
            </div>
            <div className="input">
              <i className="bi bi-key-fill"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirm-password"
                onChange={confirmPasswordHandler}
                value={confirmPassword}
              />
            </div>
          </div>
          <div className="new__user">
            <p>
              Already have an account? &nbsp;
              <NavLink to="/login">Login</NavLink>
            </p>
          </div>
          <div className="button_section">
            <Button variant="contained" type="submit" className="submitbtn">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
