import styled from "styled-components";
import SliderDots from "./SliderDots";
import SliderArrows from "./SliderArrows";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const images = [
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
  "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/04/27/14/27/butterfly-7954767_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/09/16/19/sea-7375377_960_720.jpg",
];

const Slider = (
  { children, slides = images, arrows = true, dots = false },
  autoSlide = false
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function showPrevSlide(): void {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) return slides.length - 1;
      return prevIndex - 1;
    });
  }

  function showNextSlide(): void {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === slides.length - 1) return 0;
      return prevIndex + 1;
    });
  }

  const handlerDotClick = (
    index: MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(showNextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency array includes currentIndex to ensure the effect uses the latest value
  return (
    <StyledSlider>
      <StyledSliderItems aria-hidden={currentIndex !== 0}>
        {/* {children} */}
        {slides.map((slide) => (
          <img
            src={slide}
            style={{ translate: `${-100 * currentIndex}%` }}
          ></img>
        ))}
      </StyledSliderItems>
      {/* <img src={slides[currentIndex]} /> */}
      {/* <SliderArrows></SliderArrows> */}

      {arrows && (
        <div>
          <button
            style={{ left: 0 }}
            onClick={showPrevSlide}
            aria-label="View Previous"
          >
            {"<"}
          </button>
          <button
            style={{ right: 0 }}
            onClick={showNextSlide}
            aria-label="View Next"
          >
            {">"}
          </button>
        </div>
      )}
      {dots && (
        <SliderDots
          dots={slides}
          handlerDotClick={handlerDotClick}
          currentIndex={currentIndex}
        ></SliderDots>
      )}
    </StyledSlider>
  );
};

export default Slider;

export const StyledSlider = styled.div`
  @keyframes squish {
    50% {
      scale: 1.4 0.6;
    }
  }

  position: relative;
  /* display: flex;  */
  /* gap: 24px; */
  /* overflow: scroll; */
  width: 100%;
  height: 100%;

  button {
    background-color: #29292525;
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: pointer;

    animation: squish 200ms ease-in-out;
    &:hover,
    &:focus-visible {
      background-color: #2929255c;
    }
  }

  /* img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  } */
`;

export const StyledSliderItems = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    display: block;
    flex-shrink: 0;
    flex-grow: 0;
    transition: translate 300ms ease-in-out;
  }
`;
