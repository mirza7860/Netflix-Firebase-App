import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import HomePage from "../../Assets/home4.jpg";
import Movielogo from "../../Assets/title2.png";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../../Store/index";
import Slider from "../../components/Slider/Slider";
const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setisScrolled] = useState(false);
  const genresloading = useSelector((state)=>(state.Netflix.genresLoaded))
  const genres = useSelector((state) => state.Netflix.genres);
  const movies=useSelector((state)=>(state.Netflix.movies))
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() => {
    if (genresloading) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresloading]);
  useEffect(() => {
    window.onscroll = () => {
      setisScrolled(window.scrollY === 0 ? false : true);
    };

    return () => {
      window.onscroll = null;
    };
  },[]);
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={HomePage}
          alt="Home Page First All"
          className="backgroundimage"
        />
        <div className="container">
          <div className="logo">
            <img src={Movielogo} alt="Movie Logo First All" />
          </div>
          <div className="button flex">
            <button
              className="flex j-center a-center"
              onClick={() => navigate("/player")}
            >
              <FaPlay /> Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies}/>
    </Container>
  );
};
export default MainPage;

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .backgroundimage {
      filter: brightness(64%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 2rem;
      .logo {
        img {
          width: 48%;
          height: 48%;
          margin-left: 4rem;
        }
      }
      .button {
        margin: 4.8rem;
        gap: 2rem;
        button {
          font-size: 1.6rem;
          gap: 0.8rem;
          border-radius: 0.4rem;
          padding: 0.4rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.4s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: #747374;
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
