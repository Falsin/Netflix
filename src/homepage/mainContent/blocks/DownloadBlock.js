import styled from "styled-components";
import Wrapper from "../WrapperForContent";
import img from "../../../images/smartphone-for-downloadBlock.jpg";
import poster from "../../../images/posterForDownloadBlock.png";
import downloadIcon from "../../../images/download-icon.gif"

export default function DownloadBlock() {
  return (
    <StyledWrapper>
      <div className="textContainer">
        <h2>Download your shows to watch offline.</h2>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
      <div className="animationContainer">
        <img src={img}/>
        <div>
          <img src={poster} />
          <div>
            <h4>Stranger Things</h4>
            <p>Downloading...</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Wrapper)`
  .animationContainer {
    display: flex;
    justify-content: center;

    & > div {
      display: flex;
      align-items: center;
      border-radius: 10px;
      top: 70%;
      position: absolute;
      width: 70%;
      height: 20%;
      border: solid rgb(64, 64, 64) 2px;
      background: black;
      //height: 0;

      img {
        height: 80%;
      }

      div {
        p {
          color: #0071eb; 
        }
      }

      &::after {
        content: "";
        background-image: url(${downloadIcon});
        height: 6vmin;
        width: 6vmin;
        border: solid red 1px;
        display: block;
      }
    }
  }
`