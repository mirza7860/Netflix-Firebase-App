import React, { useRef, useState } from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CardSlider = ({ data, title }) => {
  const [showControls, setShowControls] = useState(false);
  const [SliderPosition, setSliderPosition] = useState(0);
  const listref = useRef();
  const handleDirection = (direction) => {
    let distance = listref.current.getBoundingClientRect().x - 48;
    if (direction === "left" && SliderPosition > 0) {
      listref.current.style.transform = `translateX(${196 + distance}px)`;
      setSliderPosition(SliderPosition - 1);
    }
    if (direction === "right" && SliderPosition < 6) {
      listref.current.style.transform = `translateX(${-196 + distance}px)`;
      setSliderPosition(SliderPosition + 1);
    }
  };
  return (
    <Container
      className="flex column"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => {
        setShowControls(false);
      }}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="flex slider" ref={listref}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
};

export default CardSlider;

const Container = styled.div`
  gap: 0.8rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 48px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 0.8rem;
      transform: translateX(0px);
      transition: 0.4s ease-in-out;
      margin-left: 48px;
    }
    .slider-action {
      position: absolute;
      z-index: 96;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 48px;
      transition: 0.4s ease-in-out;
      svg {
        transition: all 2s ease-in-out;
        font-size: 2rem;
        cursor: pointer;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
