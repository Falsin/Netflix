import styled from "styled-components";
import img from "../../images/laptopBackground.png";
import video from "../../videos/video-for-enjoyBlock.m4v"

export default function EnjoyBlock(params) {
  return (
    <Wrapper>
      <div className="textContainer">
        <h2>Enjoy on your TV.</h2>
        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
      <div className="animationContainer">
        <img src={img}/>
        <div>
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6vmin;

  & > .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2vmin;

    h2 {
      font-size: 8vmin;
    }
  }

  .animationContainer {
    position: relative;
    margin-left: 2vmin;

    img {
      position: relative;
      width: 100%;
      height: auto;
    }

    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 54%;
      width: 73%;
      top: 47.6%;
      left: 49.6%;
      z-index: -1;
    }
  }

  & > * {
    width: 45%;
    flex-grow: 1;
    min-width: 200px;
  }
`