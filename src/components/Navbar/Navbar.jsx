import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { FireAuth } from "../../utils/firebase/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Navbar = ({ isScrolled }) => {
  const [ShowSerach, setShowSearch] = useState(false);
  const [inputHover, setinputHover] = useState(false);
  const navigate = useNavigate();
  const Links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tvshows" },
    { name: "Movies", link: "/movies" },
  ];
  onAuthStateChanged(FireAuth, (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    }
  });
  return (
    <Container>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className="links flex">
            {Links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${ShowSerach ? "show-search" : ""}`}>
            <button
              onClick={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setinputHover(true)}
              onMouseLeave={() => {
                setinputHover(false);
              }}
              onBlur={() => {
                setShowSearch(false);
              }}
            />
          </div>
          <button
            onClick={() => {
              alert("hello");
              signOut(FireAuth);
            }}
          >
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 8rem;
    width: 100%;
    justify-content: space-between;
    transition: 0.4s ease-in-out;
    align-items: center;
    position: fixed;
    z-index: 2;
    padding: 0 2rem;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 8rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        gap: 0.2rem;
        &:focus {
          outline: none;
        }
        svg {
          color: #da224b;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.8rem;
        button {
          background-color: transparent;
          svg {
            color: white;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.4s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 2px solid white;
        background-color: rgba(0, 0, 0, 0.8);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.4rem;
        }
      }
    }
  }
`;










