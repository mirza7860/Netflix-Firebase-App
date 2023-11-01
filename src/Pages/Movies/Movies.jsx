import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenres } from "../../Store/index";
import { FireAuth } from "../../utils/firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import NotAvailable from "../../components/NotAvailable/NotAvailable";
import SelectGenre from "../../components/SelectGenre/SelectGenre";
const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setisScrolled] = useState(false);
  const genresloading = useSelector((state) => state.Netflix.genresLoaded);
  const genres = useSelector((state) => state.Netflix.genres);
  const movies = useSelector((state) => state.Netflix.movies);
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() => {
    if (genresloading) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }, [genresloading]);
  useEffect(() => {
    window.onscroll = () => {
      setisScrolled(window.scrollY === 0 ? false : true);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);
  onAuthStateChanged(FireAuth, (currentUser) => {
    // if (currentUser) navigate("/");
  });
  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="movie"/>
        {movies.length ? <Slider movies={movies} /> : <NotAvailable type="Movies"/>}
      </div>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
