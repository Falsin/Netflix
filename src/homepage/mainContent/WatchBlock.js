import Wrapper from "./WrapperForContent";
import img from "../../images/laptopForWatchBlock.png";
import video from "../../videos/video-for-watchBlock.m4v";
import styled from "styled-components";

export default function DownloadBlock(params) {
  return (
    <StyledWrapper>
      <div className="animationContainer">
        <img src={img}/>
        <div>
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="textContainer">
        <h2>Watch everywhere.</h2>
        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Wrapper)`
  flex-wrap: wrap-reverse;

  .animationContainer {
    video {
      top: 34%;
      width: 63%;
      height: 47%;
    }
  }
`