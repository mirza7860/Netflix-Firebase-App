import React, { useState } from "react";
import styled from "styled-components";
import { FireAuth } from "../../utils/firebase/firebase-config";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Header from "../../components/Header/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(FireAuth, email, password).then(res=>res.json()).then((data)=>console.log(data));
    } catch (err) {
      console.log(err);
    }
  };
  onAuthStateChanged(FireAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <Container showPassword={showpassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex a-center column j-center">
          <div className="text flex column">
            <h1>Laughter. Tears. Thrills. Find it all on Netflix. </h1>
            <h4>Watch Endless entertainment anywhere.Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setformValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showpassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setformValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showpassword && (
              <button onClick={() => setShowpassword(!showpassword)}>
                Get Started
              </button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    gap: 4rem;
    display: flex;
    flex-direction: column;
    backdrop-filter: brightness(64%);
    .body {
      max-width: 1000px;
      margin: 10px auto;
      gap: 10px;
      .text {
        gap: 1.8rem;
        text-align: center;
        font-size: 1.4rem;
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showpassword }) =>
          showpassword ? "1fr 1fr" : "2fr 1fr"};
        width: 64%;
        input {
          background-color: #d8d8d8;
          color: black;
          border: none;
          padding: 1.2rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: red;
          border: none;
          cursor: pointer;
          color: #ffffff;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.08rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: red;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.08rem;
      }
    }
  }
`;
