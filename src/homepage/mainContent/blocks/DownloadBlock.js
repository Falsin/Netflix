import styled from "styled-components";
import Wrapper from "../WrapperForContent";
import img from "../../../images/smartphone-for-downloadBlock.jpg";
import poster from "../../../images/posterForDownloadBlock.png";
import downloadIcon from "../../../images/download-icon.gif"

export default function DownloadBlock() {
  return (
    <StyledWrapper>
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
      <div className="textContainer">
        <h2>Download your shows to watch offline.</h2>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Wrapper)`
  flex-wrap: wrap-reverse;

  .animationContainer {
    display: flex;
    justify-content: center;

    & > div {
      display: flex;
      align-items: center;
      border-radius: 10px;
      top: 70%;
      position: absolute;
      min-width: 70%;
      padding-top: 2vmin;
      padding-bottom: 2vmin;
      border: solid rgb(64, 64, 64) 2px;
      background: black;

      img {
        height: 8vmin;
        margin-left: 2vmin;
      }

      div {
        margin-left: 2vmin;

        h4 {
          font-size: 2.5vmin;
        }

        p {
          font-size: 2vmin;
          color: #0071eb; 
        }
      }

      &::after {
        content: "";
        background-image: url(${downloadIcon});
        height: 6vmin;
        width: 6vmin;
        display: block;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-left: auto;
        border-radius: 50%;
        right: 2vmin;
      }
    }
  }
`