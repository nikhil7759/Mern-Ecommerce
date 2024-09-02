import Slider from "react-slick";
import MenImage from "../../assets/Homepage/menslide.jpg";
import WomenImage from "../../assets/Homepage/womenslide.jpg";
import "./HpCarousel.css";

// Custom arrow components
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};

export default function SimpleSlider() {
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Use custom left arrow
    nextArrow: <NextArrow />, // Use custom right arrow
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={MenImage} alt="Men Slide" />
        </div>
        <div>
          <img src={WomenImage} alt="Women Slide" />
        </div>
      </Slider>
    </div>
  );
}
