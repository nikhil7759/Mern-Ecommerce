import MenImage from "../../assets/Homepage/menslide.jpg";
import WomenImage from "../../assets/Homepage/womenslide.jpg";
import "./HpCarousel.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

const HpCarousel = ({ onSlideChange }) => {
  const handleOnChange = (previousSlide, { currentSlide }) => {
    onSlideChange(currentSlide);
  };

  return (
    <Carousel responsive={responsive} afterChange={handleOnChange}>
      <div><img className="img_set" src={MenImage} alt="Men's Collection" /></div>
      <div><img className="img_set" src={WomenImage} alt="Women's Collection" /></div>
    </Carousel>
  );
}

export default HpCarousel;
