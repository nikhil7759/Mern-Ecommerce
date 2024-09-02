import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Global/Navigation/Navbar";
import LoaderMain from "./component/LoaderMain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";


// Lazy load the components
const SimpleSlider = lazy(() => import("./Pages/HomePage/Homepage"));
const Men = lazy(() => import("./Pages/Men/Men"));
const Favourite = lazy(() => import("./Pages/Favourite/Favourite"));
const CartPage = lazy(() => import("./context/Cartpage"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/SignUp/SignUp"));
const PageDetail = lazy(() => import("./Pages/PageDetail/PageDetail"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* Wrap Routes with Suspense */}
        <Suspense fallback={<LoaderMain/>}>
          <Routes>
            <Route path="/" element={<SimpleSlider />} />
            <Route path="/men" element={<Men />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/:slug" element={<PageDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
