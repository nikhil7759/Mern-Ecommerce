import { useEffect } from "react";
import { useCart } from "./cart";

import { useUser } from "./authContext";
import { useToast } from "../Global/Toast/Toast";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../Global/Navigation/Navbar.css";
import "./Cartpage.css";

const CartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const { user } = useUser(); // Get the current user from the context
  const { notifyError } = useToast(); // Use the toast to display error notifications
  const navigate = useNavigate(); // Use useNavigate for redirection

  useEffect(() => {
    if (!user) {
      // If the user is not logged in, show a toast notification and redirect to login
      notifyError("Please log in to access the cart.");
      navigate("/login");
    }
  }, [user, notifyError, navigate]);

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // If the user is not logged in, show a loading or message while redirecting
  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <Container>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Cart</h4>
                <div className="breadcrumb__links">
                  <NavLink className="linktohome" to="/home">
                    Home
                  </NavLink>{" "}
                  ➡️
                  <span>Your Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cart.reduce((totalItems, item) => totalItems + item.quantity, 0)} items
                </div>
              </div>
            </div>

            {/* Loop through cart items */}
            {cart.map((item) => (
              <div className="row border-top border-bottom" key={item._id}>
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img
                      className="img-fluid cart_image"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="col">
                    <div className="row text-muted">
                      {item.category || "Category"}
                    </div>
                    <div className="row">{item.title}</div>
                  </div>
                  <div className="col">
                    <a onClick={() => decrementQuantity(item._id)} href="#">
                      -
                    </a>
                    <a href="#" className="border">
                      {item.quantity}
                    </a>
                    <a onClick={() => incrementQuantity(item._id)} href="#">
                      +
                    </a>
                  </div>
                  <div className="col">
                    ₹ {(item.price).toFixed(2)}{" "}
                  </div>
                  <div className="col">
                    <span
                      className="close"
                      onClick={() => removeFromCart(item._id)}
                      style={{ cursor: "pointer", color: "red" }}
                    >
                      &#10005;
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="total-price">
              <span className="total_price">Total Price: </span> ₹{totalPrice}
            </div>

            {/* Back to shop button */}
            <div className="back-to-shop">
              <NavLink to="/">
                <i className="bi bi-arrow-left"></i>
                <span className="text-muted">&nbsp; &nbsp;Back to shop</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
