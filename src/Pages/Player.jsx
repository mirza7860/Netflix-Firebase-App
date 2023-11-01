import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import ShabashMithu from "../Assets/ShabashMithu.mp4";
const Player = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rX_Xr-F-hEQ?si=ygPf70rzzVEzfrBp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Player;

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    position: relative;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 8;
      svg {
        font-size: 1.6rem;
        cursor: pointer;
        &:hover {
          color: #df6b64;
        }
      }
    }
    iframe {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
