import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import video from "../../Assets/ShabashMithu.mp4";
const Card = ({ movieData, isliked = false }) => {
  const navigate = useNavigate();
  const [isHovered, setisHovered] = useState(false);
  return (
    <Container
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieData.image}`}
        alt="Movie Image"
      />
      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.image}`}
              alt="movie"
              onClick={() => navigate("/player")}
            />
            <video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="info-container flex column">
            <h3 className="name" onClick={() => navigate("/palyer")}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Unlike" />
                {isliked ? (
                  <BsCheck title="Remove From List" />
                ) : (
                  <AiOutlinePlus title="Add to my list" />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Card;
const Container = styled.div`
  max-width: 240px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 96%;
    z-index: 10;
  }
  .hover {
    z-index: 90;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.4rem;
    box-shadow: rgba(0, 0, 0, 0.8);
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 160px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.4rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 8;
        position: absolute;
      }
    }
    .info-container {
      padding: 0.8rem;
      gap: 0.4rem;
      .icons {
        .controls {
          display: flex;
          gap: 0.8rem;
        }
        svg {
          font-size: 2rem;
          cursor: pointer;
          transition: 0.4s ease-in-out;
          &:hover {
            color: #b8b8b8;
          }
        }
      }
    }
    .genres {
      ul {
        gap: 0.8rem;
        li {
          padding-right: 0.8rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;









