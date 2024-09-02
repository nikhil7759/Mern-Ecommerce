import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useToast } from "../../Global/Toast/Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { notifySuccess, notifyError } = useToast(); // Get notify functions

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        navigate("/");
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      notifySuccess("Successfully Logged In"); // Display success toast
      navigate("/");
    } catch (error) {
      console.log(error);
      notifyError("Login failed. Please check your email and password."); // Display error toast
    }
  };

  const loginEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const loginPassHandler = (e) => {
    setPassword(e.target.value);
  };

  if (isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h3>Login In</h3>
      <form onSubmit={formHandler}>
        <label htmlFor="email">
          Enter Email
          <input
            type="text"
            id="email"
            onChange={loginEmailHandler}
            value={email}
          />
        </label>
        <label htmlFor="password">
          Enter Password
          <input
            type="password"
            id="password"
            onChange={loginPassHandler}
            value={password}
          />
        </label>
        <Button variant="contained" type="submit">
          Log In
        </Button>
        <p>New User?</p>
        <NavLink to="/signup">
          <Button variant="contained">Sign Up</Button>
        </NavLink>
      </form>
    </>
  );
};

export default Login;
