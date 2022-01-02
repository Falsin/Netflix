import styled from "styled-components";
import OptionsList from "./optionsList/OptionsList";

export default function Footer() {
  return (
    <Wrapper>
      <p>Questions? Call <a href="tel:8-800-100-9668">8-800-100-9668</a></p>
      <OptionsList />

    </Wrapper>
  )
} 

const Wrapper = styled.footer`
  color: white;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 8vmin;
  margin-left: auto;
  margin-right: auto;
  border-top: 8px solid #222222;
  margin-bottom: 6vmin;

  a {
    text-decoration: none;
    color: white;
  }
`