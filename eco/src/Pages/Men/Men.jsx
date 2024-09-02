import { useState } from "react";
import { NavLink } from "react-router-dom";
import AccordionUsage from "../../Global/Accordion/Accordion";
import Sorting from "../../Global/Accordion/Sorting/Sort";
import ItemList from "../../Global/FetchDara/FetchData";
import "./Men.css";
import SearchBox from "../../Global/Accordion/Search/Search";
import PriceRangeSlider from "../../Global/Accordion/PriceSlider/PriceSlider";

const Men = () => {
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    gender: '',
    color: '',
    categories: ''
  });

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (categories, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [categories]: value
    }));
  };

  return (
    <>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shop</h4>
                <div className="breadcrumb__links">
                  <NavLink className="linktohome" to="/home">
                    Home
                  </NavLink>{" "}
                  ➡️
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="side__shopbar">
                <div className="side__shopsearch boxlow">
                  <SearchBox onSearch={handleSearchChange} />
                </div>
                <div className="side__shop_filter boxlow">
                  <AccordionUsage setFilters={handleFilterChange} />
                </div>
                <div className="price_range">
                  <span>Select Range</span>
                  <PriceRangeSlider onChange={handlePriceRangeChange} />
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="sorting">
                <div className="sorted">
                  <h6>Sort By</h6>
                  <span className="lists">
                    <Sorting onSortChange={handleSortChange} />
                  </span>
                </div>
              </div>
              <div className="row">
                <ItemList
                  sortOption={sortOption}
                  priceRange={priceRange}
                  searchTerm={searchTerm}
                  filters={filters}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Men;
