import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/authContext/index.jsx";
import { CartProvider } from "./context/cart.jsx";
import { ToastProvider } from "./Global/Toast/Toast.jsx";
import FavContextProvider from "./context/FavContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <FavContextProvider>
    <CartProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </CartProvider>
    </FavContextProvider>
  </UserProvider>
);
