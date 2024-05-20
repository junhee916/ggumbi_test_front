import React, { useState } from "react";
import "./Hero.css";

const images = [
  "url('/images/hero-image.jpg')",
  "url('/images/hero-image2.jpg')",
  "url('/images/hero-image3.jpg')",
];

function Hero() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length); // 다음 이미지로 순환
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // 이전 이미지로 순환
  };

  return (
    <section className="hero" style={{ backgroundImage: images[index] }}>
      <button onClick={prevImage} className="left-arrow">
        {"<"}
      </button>
      <button onClick={nextImage} className="right-arrow">
        {">"}
      </button>
    </section>
  );
}

export default Hero;
