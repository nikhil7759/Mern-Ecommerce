import { NavLink } from "react-router-dom";
import "./Navbar.css";


import FavoriteIcon from "@mui/icons-material/Favorite";

import Dropdownmenu from "../Dropdown/Dropdown";
import { useCart } from "../../context/cart";
import { useState } from "react";
import { Sling as Hamburger, Sling } from 'hamburger-react'

const Navbar = () => {
  const { getCartQuantity } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const menuOpenHandler = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div className="container">
      <nav>
        <div className="main__nav">
        <div className="navbar-left">
          <div className="logo">
            <NavLink to="/" className="logo-link">
              Fashion<span className="logo-dot">.</span>
            </NavLink>
          </div>
        </div>
          <div className="navbar-middle">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/men" className="nav-link">
                Men
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages" className="nav-link">
                Pages
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">
                Contacts
              </NavLink>
            </li>
          </ul>
          
        </div>
        <div className="navbar-right">
          <ul className="nav-icons">
            {/* <li className="nav-icon-item">
              <NavLink to="/favourites">
              <i class="bi bi-heart"></i>
              </NavLink>
            </li> */}
            <li className="nav-icon-item">
              <NavLink to="/cart">
               
                <i className="bi bi-bag"></i>
                <span className="badge">{getCartQuantity()}</span>
              </NavLink>
            </li>
            <li className="nav-icon-item">
              <Dropdownmenu />
            </li>
            <div className="mobile-menu">
            <Sling  toggled={menuOpen} toggle={setMenuOpen} />
          </div>
          </ul>
          
          
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
