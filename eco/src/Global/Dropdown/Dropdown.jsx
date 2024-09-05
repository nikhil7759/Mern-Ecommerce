import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../../context/authContext';
import "./Dropdown.css";

function Dropdownmenu() {
  const { user, logout } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);  // Close the dropdown
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle clicking a dropdown item (logout or login/signup)
  const handleItemClick = () => {
    setDropdownOpen(false);  // Close the dropdown
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown_custom" onClick={toggleDropdown}>
        <i className="bi bi-person"></i>
      </div>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {user ? (
            <button className="dropdown-item" onClick={() => { 
              logout(); 
              handleItemClick();  // Close dropdown on click
            }}>
              Log Out
            </button>
          ) : (
            <NavLink to="/login" className="dropdown-item" onClick={handleItemClick}>
              Login/Signup
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdownmenu;
