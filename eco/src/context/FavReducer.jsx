const FavReducer = (state, action) => {
    switch(action.type) {
      case "Add":
        return [...state, action.item];
      case "Remove":
        return state.filter(item => item.id !== action.item.id);
      default:
        return state;
    }
  };
  
export default FavReducer