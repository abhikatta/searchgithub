import { useState } from "react";
import "./PhotoCarousal.css";
import FindFromGithub from "./FindFromGithub";

// const avatars = [
//   "https://avatars.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://avatars.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://avatars.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://avatars.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://avatars.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// ];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);
  
  let avatars=FindFromGithub.avatars

  const nextSlide = () => {
    // setCurrent(current === avatars.length - 1 ? 0 : current + 1);
    if (current === avatars.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    // setCurrent(current === 0 ? avatars.length - 1 : current - 1);
    if (current === 0) {
      setCurrent(avatars.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div>
      <h2>Project Carousel</h2>

      <div>
        <button onClick={prevSlide}>Previous</button>
        {avatars.map(
          (image, index) =>
            current === index && (
              <div key={image}>
                <img className="image" src={image} alt="avatars" />
              </div>
            )
        )}
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};
export default PhotoCarousel;
