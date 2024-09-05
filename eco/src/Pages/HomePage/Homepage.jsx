import HpCarousel from "./HpCarousel";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Homepage.css";
import Womenimage from "../../assets/Homepage/hpwomen.jpg";
import Shoeimage from "../../assets/Homepage/shoe.png";
import Menfashion from "../../assets/Homepage/menfashion.jpg";
import DealCounter from "./DealCounter";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Texts for each slide
  const slideTexts = [
    {
      heading: "Men's Collection",
      subheading: "Exclusive Autumn Collection 2030",
      description: "Discover our latest fall trends with a touch of elegance and comfort.",
    },
    {
      heading: "Women's Collection",
      subheading: "Winter Elegance 2030",
      description: "Explore our winter essentials, crafted with care and style.",
    },
  ];

  return (
    <>
      <div className="section_home">
        <HpCarousel onSlideChange={setCurrentSlide} />
        <div className="hero">
          <div className="hero__text">
            <h6>{slideTexts[currentSlide]?.heading}</h6>
            <h2>{slideTexts[currentSlide]?.subheading}</h2>
            <p>{slideTexts[currentSlide]?.description}</p>
            <NavLink to="/men">
              <Button variant="contained" className="shopno">
                <span className="letter">Shop now</span>
              </Button>
            </NavLink>
            <div className="hero__social"></div>
          </div>
        </div>
      </div>
      <section id="collection">
        <div className="container">
          <div className="product__collection row">
            <div className="col-lg-7 col-md-12 left-content">
              <div className="collection__item">
                <div className="products thumb">
                  <img src={Menfashion} className="large-image image-rounded" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                  <h3 className="item-title">MEN FASHION</h3>
                  <div className="btn-wrap">
                    <NavLink to='/men'>
                      <Button variant="contained" className="shopno">
                        <span className="letter">Shop now</span>
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 right-content">
              <div className="collection-item top-item">
                <div className="products-thumb">
                  <img src={Womenimage} alt="collection item" className="small-image image-rounded" />
                </div>
                <div className="col-md-6 product-entry">
                  <h3 className="item-title">Basic shoes.</h3>
                  <div className="btn-wrap">
                    <NavLink to='/men'>
                      <Button variant="contained" className="shopno">
                        <span className="letter">Shop now</span>
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="collection-item bottom-item">
                <div className="products-thumb">
                  <img src={Shoeimage} alt="collection item" className="small-image image-rounded" />
                </div>
                <div className="col-md-6 product-entry">
                  <h3 className="item-title">Woolen hat.</h3>
                  <div className="btn-wrap">
                    <NavLink to='/men'>
                      <Button variant="contained" className="shopno">
                        <span className="letter">Shop now</span>
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DealCounter />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Homepage;
