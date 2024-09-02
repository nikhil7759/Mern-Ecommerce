import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "../../context/cart";
import { Bars } from "react-loader-spinner";
import "./FetchData.css";
import FavButton from "../Accordion/FavButton/FavButton";


const sortOptions = {
  20: (a, b) => a.price - b.price, // Low to High
  30: (a, b) => b.price - a.price, // High to Low
};

const ItemList = ({ sortOption, priceRange, searchTerm, filters }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();




  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Create query parameters
        const queryParams = new URLSearchParams();
        if (filters.color) queryParams.append('color', filters.color);
        if (filters.gender) queryParams.append('gender', filters.gender);
        if (filters.categories) queryParams.append('categories', filters.categories);

        console.log(`Fetching with query: ${queryParams.toString()}`); // Debug log

        const response = await fetch(`http://localhost:8000/api/users?${queryParams.toString()}`);
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
    return <div className="loader">
      <Bars />
    </div>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <Row>
        {filteredItems.map((item) => (
          <Col key={item._id} md={4} className="mb-4">
            <div>
              <div className="product__image">
                <FavButton item={item}  />
              <img className="img_size" src={item.image} alt={item.title} />
              </div>
              <div>
                <div>{item.title}</div>
                <div>Price: ₹{item.price}</div>
                <div>
                  <button onClick={() => handleAddToCart(item)}>
                    <span className="tt">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
