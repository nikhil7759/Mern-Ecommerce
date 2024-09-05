import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useToast } from "../../Global/Toast/Toast";
import "../../Global/Navigation/Navbar.css"
import "./Login.css"

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
     
      <form onSubmit={formHandler}>
        <div className="container">
          <div className="header">
            <div className="text">LOG IN</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
            <i className="bi bi-person-circle"></i>
              <input type="email" placeholder="Enter Email"
            id="email"
            onChange={loginEmailHandler}
            value={email}/>
            </div>
            <div className="input">
            <i className="bi bi-key-fill"></i>
              <input type="password" placeholder="Enter Password" id="password"
            onChange={loginPassHandler}
            value={password}/>
            </div>
          </div>
          <div className="new__user">
            <p>New User? &nbsp; <NavLink to ='/signup'>Sign Up</NavLink></p>
          </div>
          <div className="button_section">
          <Button variant="contained" type="submit" className="submitbtn">
          Log In
        </Button>

          </div>
          
       
        </div>
        
        



      </form>
    </>
  );
};

export default Login;
