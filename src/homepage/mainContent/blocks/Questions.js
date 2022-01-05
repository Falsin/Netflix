import { useState, useEffect } from "react";
import styled from "styled-components";
import uniqid from "uniqid";

export default function Questions(params) {
  const [activeElemId, setActiveElemId] = useState(null);

  let headlinesAndDescriptions = {
    "What is Netflix?": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    "How much does Netflix cost?" : "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from RUB599 to RUB999 a month. No extra costs, no contracts.",
    "Where can I watch?": "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    "How do I cancel?": "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    "What can I watch on Netflix?": "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    "Is Netflix good for kids?": "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  }

  function createOptionsForList(obj) {
    return Object.entries(obj).map((elem, id) => Option(elem, id, activeElemId, setActiveElemId));
  }

  return (
    <Wrapper>
      <h2>Frequently Asked Questions</h2>
      <ul>
      {createOptionsForList(headlinesAndDescriptions).map(elem => elem)}
      </ul>
    </Wrapper>
  )
}

function Option(arr, id, activeId, func) {
  const [index] = useState(id);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (activeId !== index) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  })

  return (
    <Wrapper2 key={uniqid()} onClick={() => func(index)}>
      <h3>{arr[0]}</h3>
      <p className={(isActive) ? "active" : ""}>{arr[1]}</p>
    </Wrapper2>
  )
}

const Wrapper = styled.section`
  padding-top: 2vmin;
  border-top: 8px solid #222222;
  margin-bottom: 6vmin;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style: none;
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    ul {
      width: 70%;
    }
  }

  @media screen and (max-width: 600px) {
    ul {
      width: 100%;
    }
  }
`

const Wrapper2 = styled.li`
  margin-top: 2vmin;
  padding: 2vmin;
  background: #222222;

  p {
    display: none;

    &.active {
      display: block;
    }
  }
`