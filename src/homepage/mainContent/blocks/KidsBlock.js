import styled from "styled-components";
import img from "../../../images/imageForKidsBlock.png";
import Wrapper from "../WrapperForContent";

export default function KidsBlock(params) {
  return (
    <StyledWrapper>
      <div className="animationContainer">
        <img src={img}/>
      </div>
      <div className="textContainer">
        <h2>Create profiles for kids.</h2>
        <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Wrapper)`
  flex-wrap: wrap-reverse;
`