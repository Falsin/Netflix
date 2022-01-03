import img from "../../../images/laptopBackground.png";
import video from "../../../videos/video-for-enjoyBlock.m4v";
import Wrapper from "../WrapperForContent";

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