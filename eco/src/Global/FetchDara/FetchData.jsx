import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "../../context/cart";
import { Bars } from "react-loader-spinner";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useFavorite } from "../../context/FavContextProvider";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "./FetchData.css";

const sortOptions = {
  20: (a, b) => a.price - b.price, 
  30: (a, b) => b.price - a.price, 
};

const ItemList = ({ sortOption, priceRange, searchTerm, filters }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const { favouriteItem, addToFavorite, removeFavorite } = useFavorite();
  const navigate = useNavigate();  // Initialize useNavigate

  const handleFavoriteClick = (item) => {
    if (favouriteItem.includes(item)) {
      removeFavorite(item);
    } else {
      addToFavorite(item);
      // navigate('/favourites');  // Navigate to the favourites page
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const queryParams = new URLSearchParams();

        if (filters.color) {
          filters.color.forEach((color) => queryParams.append('color', color));
        }

        if (filters.gender) {
          filters.gender.forEach((gender) => queryParams.append('gender', gender));
        }

        if (filters.categories) {
          filters.categories.forEach((category) => queryParams.append('categories', category));
        }

        console.log(`Fetching with query: ${queryParams.toString()}`);

        const response = await fetch(`https://mern-ecom-4uin.onrender.com/?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [filters]);

  useEffect(() => {
    let filtered = items;

    if (priceRange) {
      filtered = filtered.filter(
        (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [priceRange, searchTerm, items]);

  useEffect(() => {
    if (sortOption && sortOptions[sortOption]) {
      const sortedItems = [...filteredItems].sort(sortOptions[sortOption]);
      setFilteredItems(sortedItems);
    }
  }, [sortOption, filteredItems]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (loading) {
    return (
      <div className="loader">
        <Bars />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <Row>
        {filteredItems.map((item) => (
          <Col key={item._id} md={4} className="mb-4">
            <div className="product__image">
              <div className="hoverr__style">
                <img className="img_size" src={item.image} alt={item.title} />
                <ul>
                  {/* <li onClick={() => handleFavoriteClick(item)} className="w-icon" style={{ cursor: 'pointer' }}>
                    {favouriteItem.includes(item) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                  </li> */}
                  <button onClick={() => handleAddToCart(item)} className="add_to_cart">
                    <span className="tt">+ Add to Cart</span>
                  </button>
                  {/* <li className="w-icon"><ShareIcon/></li> */}
                </ul>
              </div>
              <div className="price_items">
                <div className="item_title">{item.title}</div>
                <div className="item_price">₹ {item.price}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
