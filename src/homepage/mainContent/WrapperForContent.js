import styled from "styled-components";

const Wrapper = styled.section`
  border-top: 8px solid #222222;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  margin-bottom: 6vmin;
  padding-left: 20vmin;
  padding-right: 20vmin;
  padding-top: 2vmin;

  & > .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 8vmin;
    }
  }

  .animationContainer {
    position: relative;

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
    margin-right: 2vmin;
    margin-left: 2vmin;
    width: 45%;
    flex-grow: 1;
    min-width: 200px;
  }
`

export default Wrapper;