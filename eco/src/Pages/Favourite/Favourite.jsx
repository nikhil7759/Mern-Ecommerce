// src/pages/FavoritesPage.js
import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FavContext } from '../../context/FavContextProvider';
import { Link } from 'react-router-dom';


const Favourite = () => {
  const { fav } = useContext(FavContext);

  return (
    <Container>
      <h1>Favorite Items</h1>
      <Row>
        {fav.length === 0 ? (
          <p>No favorite items yet.</p>
        ) : (
          fav.map(item => (
            <Col key={item.id} md={4} className="mb-4">
              <div>
                <img className="img_size" src={item.image} alt={item.title} />
                <div>{item.title}</div>
                <div>Price: ₹{item.price}</div>
              </div>
            </Col>
          ))
        )}
      </Row>
      <Link to="/">Go back to Home</Link>
    </Container>
  );
};

export default Favourite;
