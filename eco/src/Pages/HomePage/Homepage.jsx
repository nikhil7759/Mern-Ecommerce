import HpCarousel from "./HpCarousel";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Homepage.css";
import Womenimage from "../../assets/Homepage/hpwomen.jpg"
import Shoeimage from "../../assets/Homepage/shoe.png"
import Menfashion from "../../assets/Homepage/menfashion.jpg"
import DealCounter from "./DealCounter";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Homepage = () => {
  const[currentSlide,setCurrentSlide] = useState(0)

  return (
    <>
    <div className="section_home">
      <HpCarousel />
      <div className="hero">
        <div className="hero__text">
          <h6>Summer Collection</h6>
          <h2>Fall - Winter Collections 2030</h2>
          <p>
            A specialist label creating luxury essentials. Ethically
            crafted with an unwavering commitment to exceptional
            quality.
          </p>
          <NavLink to= "/men">
          <Button variant="contained" className="shopno"><span className="letter">Shop now</span> </Button>
        
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
                <img src= {Menfashion} className="large-image image-rounded" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
            {/* <div className="categories">Men Collection</div> */}
            <h3 className="item-title">MEN FASHION</h3>
            
            <div className="btn-wrap">
            <NavLink to = '/men'>
            <Button variant="contained" className="shopno"><span className="letter">Shop now</span> </Button>
            </NavLink>
            </div>
          </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 right-content">
          <div className="collection-item top-item">
              <div className="products-thumb">
                <img src={Womenimage} alt="collection item" className="small-image image-rounded"/>
              </div>
              <div className="col-md-6 product-entry">
                {/* <div className="categories">Basic Collection</div> */}
                <h3 className="item-title">Basic shoes.</h3>
                <div className="btn-wrap">
                <NavLink to = '/men'>
                <Button variant="contained" className="shopno"><span className="letter">Shop now</span> </Button>
                </NavLink>
                </div>
              </div>
            </div>
            <div className="collection-item bottom-item">
              <div className="products-thumb">
                <img src={Shoeimage} alt="collection item" className="small-image image-rounded"/>
              </div>
              <div className="col-md-6 product-entry">
                {/* <div className="categories">Best Selling Product</div> */}
                <h3 className="item-title">woolen hat.</h3>
                <div className="btn-wrap">
                <NavLink to = '/men'>
                <Button variant="contained" className="shopno"><span className="letter">Shop now</span> </Button></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--deal counter--> */}
   <DealCounter />
   {/* <!--Newsletter--> */}
   <Newsletter />
   <Footer />
    </>
  );
};

export default Homepage;
