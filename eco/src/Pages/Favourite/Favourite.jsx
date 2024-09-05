// FavoritesPage.js
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useFavorite } from "../../context/FavContextProvider";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../../Global/Navigation/Navbar.css"

const FavoritesPage = () => {
  const { favouriteItem, removeFavorite } = useFavorite();

  return (
    <Container>
      <Row>
        {favouriteItem.length > 0 ? (
          favouriteItem.map((item) => (
            <Col key={item._id} md={4} className="mb-4">
              <div className="product__image">
                <img className="img_size" src={item.image} alt={item.title} />
                <div className="price_items">
                  <div className="item_title">{item.title}</div>
                  <div className="item_price">₹ {item.price}</div>
                </div>
                <div className="favorite-icon" onClick={() => removeFavorite(item)} style={{ cursor: 'pointer' }}>
                  <FavoriteIcon color="error" />
                </div>
              </div>
            </Col>
          ))
        ) : (
          <p>No favorites added yet!</p>
        )}
      </Row>
    </Container>
  );
};

export default FavoritesPage;
