import styled from "styled-components";
import image from "../../../images/backgroundForCover.jpg"

export default function Cover(params) {
  return (
    <Wrapper>
      <h2>Unlimited movies, TV shows, and more.</h2>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: white;           //
  padding-top: 20vmin;
  padding-bottom: 4vmin;
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
  padding-left: 6vmin;     //
  padding-right: 6vmin;    //

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: block;
    position: absolute;
    z-index: -1;
  }

  & * {
    margin-bottom: 4vmin;
    text-align: center; 
  }

  h2 {
    font-size: 8vmin;
  }

  h3 {
    font-size: 4vmin;
  }
`