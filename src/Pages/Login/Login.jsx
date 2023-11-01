import React, { useState } from "react";
import styled from "styled-components";
import { FireAuth } from "../../utils/firebase/firebase-config";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Header from "../../components/Header/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [formValues, setformValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const HandleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(FireAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  onAuthStateChanged(FireAuth, (currentUser) => {
    if (currentUser){ navigate("/")};
  });
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex-column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
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
              <button onClick={HandleLogIn}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  overflow:hidden;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
    gap: 4rem;
    display: grid;
    grid-template-rows: 20vh 80vh;
    .form-container{
      gap: 8rem;
      height: 84vh;
      .form{
        padding: 2rem;
        background-color: #0a0d0faf;
        width: 24vw;
        gap: 2rem;
        color: white;
        margin: 0 auto;
        .container{
          gap: 2rem;
          input{
            padding: 0.6rem 1rem;
            width: 16rem;
          }
          button{
            padding: 0.6rem 1rem;
            background-color: red;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;









