import { useState } from "react";
import "./PhotoCarousal.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    // setCurrent(current === images.length - 1 ? 0 : current + 1);
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    // setCurrent(current === 0 ? images.length - 1 : current - 1);
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div>
      <h2>Project Carousel</h2>

      <div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image}>
                <img className="image" src={image} alt="images" />
              </div>
            )
        )}
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};
export default PhotoCarousel;
