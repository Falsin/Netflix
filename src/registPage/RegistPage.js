import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import Header from '../commonTemplate/Header';
import app from '../Firebase';

export default function RegistPage(params) {
  return (
    <>
      <Header />
      <RegistContainer />
      <footer></footer>
    </>
  )
}

function RegistContainer() {
  const [userCredential, setUserCredential] = useState({
    login: null,
    password: null,
  });
  const [error, setError] = useState("");

  function changeState(prop, value) {
    setUserCredential({...userCredential, [prop]: value})
  }

  return (
    <Wrapper err={error} color={'red'}>
      <form>
        <h1>Sign in</h1>
        <fieldset>
          <input type="text" onChange={(e) => changeState('login', e.target.value)}></input>
          <input type="password" onChange={(e) => changeState('password', e.target.value)}></input>
          <button type="button" onClick={() => nativeSignInMethod(userCredential, setError)} >Sign in</button>
        </fieldset>

        <button onClick={() => signIn(GoogleAuthProvider)}>Login with Google</button>
        <button onClick={() => signIn(FacebookAuthProvider)}>Login with Facebook</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;

  form {
    button {
      background: white;
      width: 45%;
      cursor: pointer;
      //display: block;
      //display: inline-block;
    }

    input, button {
      margin-bottom: 4vmin;
      padding: 2vmin;
      border-radius: 2px;
      border: none;
      outline: none;
    }

    & > button:last-of-type {
      //margin-left: auto;
      margin-left: 10%;
    }

    fieldset {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      position: relative;
      border: none;

      button {
        background: red;
        width: 100%;
      }

      &::before {
        content: '${(props) => props.err}';
        color: ${props => props.err ? props.color : 'green'};
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`

async function nativeSignInMethod(obj, changeErrorState) {
  await signInWithEmailAndPassword(getAuth(), obj.login, obj.password)
    .catch(() => changeErrorState('Wrong login or password!'))
}

async function signIn(params) {
  let provider = new params();
  await signInWithPopup(getAuth(), provider)
    .catch(() => null)
}