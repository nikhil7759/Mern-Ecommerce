import { useState,useContext } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import "./FavButton.css"
import { FavContext } from "../../../context/FavContextProvider";



const FavButton = ({ item }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { dispatch } = useContext(FavContext);

  const handleClick = () => {
      setIsFavorited(prev => !prev);
      if (isFavorited) {
          dispatch({ type: "Remove", item: item });
      } else {
          dispatch({ type: "Add", item: item });
      }
  };

  return (
      <IconButton onClick={handleClick} color="red" className="fav-button">
          {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
  );
}


export default FavButton