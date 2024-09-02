import { createContext, useReducer } from "react"
import FavReducer from "./FavReducer"

export const FavContext = createContext()

const FavContextProvider = ({children}) => {
    const [ fav, dispatch] = useReducer(FavReducer,[])
  return (
    <FavContext.Provider value={{fav,dispatch}}>
        {children}
    </FavContext.Provider>
  )
}

export default FavContextProvider