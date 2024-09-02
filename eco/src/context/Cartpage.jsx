// CartPage.js

import { useCart } from "./cart";
import { Container, Row, Col, Button } from "react-bootstrap";

const CartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cart.map((item) => (
              <Col key={item._id} md={4} className="mb-4">
                <div>
                  <img className="img_size" src={item.image} alt={item.title} />
                  <div>
                    <div>{item.title}</div>
                    <div>Price: ${item.price / 100}</div>
                    <div>Quantity: {item.quantity}</div>
                    <Button onClick={() => incrementQuantity(item._id)}>
                      +
                    </Button>
                    <Button onClick={() => decrementQuantity(item._id)}>
                      -
                    </Button>
                    <Button onClick={() => removeFromCart(item._id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="total-price">
            <h3>Total Price: ${totalPrice / 100}</h3>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
