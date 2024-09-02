import { useState } from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added state for confirm password

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("account created");
    } catch (err) {
      console.log(err);
    }
    // Proceed with the sign-up logic
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

  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label htmlFor="email">
          {" "}
          {/* Added id for accessibility */}
          Enter Email
          <input type="text" id="email" onChange={emailHandler} value={email} />
        </label>
        <label htmlFor="password">
          {" "}
          {/* Added id for accessibility */}
          Enter Password
          <input
            type="password"
            id="password"
            onChange={passwordHandler}
            value={password}
          />
        </label>
        <label htmlFor="confirm-password">
          {" "}
          {/* Added id for accessibility */}
          Re-enter Password
          <input
            type="password"
            id="confirm-password"
            onChange={confirmPasswordHandler}
            value={confirmPassword}
          />
        </label>
        <Button variant="contained" type="submit">
          {" "}
          {/* Added type="submit" */}
          Sign Up
        </Button>
        <p>Already have an account?</p>
        <NavLink to="/login">
          <Button variant="contained">Login</Button>
        </NavLink>
      </form>
    </>
  );
};

export default SignUp;
