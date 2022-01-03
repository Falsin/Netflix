import Wrapper from "../WrapperForContent";
import img from "../../../images/smartphone-for-downloadBlock.jpg";
import video from "../../../videos/video-for-watchBlock.m4v";

export default function DownloadBlock() {
  return (
    <Wrapper>
      <div className="textContainer">
        <h2>Download your shows to watch offline.</h2>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
      <div className="animationContainer">
        <img src={img}/>
        <div>
        </div>
      </div>
    </Wrapper>
  )
}