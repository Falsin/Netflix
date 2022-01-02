import styled from "styled-components";
import uniqid from "uniqid";

export default function OptionsList() {
  const optionsArray = [`FAQ`, `Investor Relations`, `Privacy`, `Speed Test`, `Help Center`, `Jobs`, 
                        `Cookie Preferences`, `Legal Notices`, `Account`, `Ways to Watch`, 
                        `Corporate Information`, `Only on Netflix`, `Media Center`, `Terms of Use`, `Contact Us`];

  function createOptionsList(array) {
    let liArray = [];

    for (let index = 0, step = 4; index < array.length; index += step) {
      liArray.push(
        <li key={uniqid()}>
          <ul>
            {array.slice(index, index + step).map((elem) => <li key={uniqid()}>{elem}</li>)}
          </ul>
        </li>
      )
    }

    return liArray;
  }

  return (
    <Wrapper>
      {createOptionsList(optionsArray).map(elem => elem)}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4vmin;

  & > li {
    min-width: 160px;

    ul li {
      margin-top: 2vmin;
    }
  }

  & * {
    list-style: none;
  }
`