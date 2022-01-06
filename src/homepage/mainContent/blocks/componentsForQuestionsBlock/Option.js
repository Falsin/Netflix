import { useState, useEffect } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import plus from "../../../../images/plus.svg"

export default function Option(arr, activeId, func) {
  const [id] = useState(uniqid());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => setIsActive((activeId !== id) ? false : true))

  return (
    <Wrapper className={(isActive) ? "active" : ""} key={id} onClick={() => func(id)}>
      <h3>{arr[0]}</h3>
      <p>{arr[1]}</p>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  margin-top: 2vmin;
  background: #222222;
  position: relative;

  h3 {
    padding: 2vmin;
  }

  p {
    display: none;
    padding: 0 2vmin 2vmin 2vmin;
  }

  &::after {
    content: "";
    background-image: url(${plus});
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    top: 2vmin;
    right: 2vmin;
  }

  &.active {
    p {
    display: block;
    }

    &::after {
      transform: rotate(45deg);
      transition-duration: 0.5s;
    }
  }
`