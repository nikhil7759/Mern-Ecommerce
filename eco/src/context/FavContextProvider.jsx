import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  // Load favorite items from localStorage or initialize with an empty array
  const [favouriteItem, setFavouriteItem] = useState(() => {
    const savedFavorites = localStorage.getItem("favouriteItem");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Add item to favorites and store in localStorage
  const addToFavorite = (item) => {
    setFavouriteItem((prevItems) => {
      const updatedItems = [...prevItems, item];
      localStorage.setItem("favouriteItem", JSON.stringify(updatedItems)); // Store in localStorage
      return updatedItems;
    });
  };

  // Remove item from favorites and update localStorage
  const removeFavorite = (item) => {
    setFavouriteItem((prevItems) => {
      const updatedItems = prevItems.filter((favItem) => favItem !== item);
      localStorage.setItem("favouriteItem", JSON.stringify(updatedItems)); // Update localStorage
      return updatedItems;
    });
  };

  return (
    <FavoriteContext.Provider
      value={{ favouriteItem, addToFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  return useContext(FavoriteContext);
};
