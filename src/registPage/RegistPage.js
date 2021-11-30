import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import app from '../Firebase';

export default function RegistPage(params) {
  initFirebaseAuth()

  return (
    <>
      <header>Netflix!</header>
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

        <button>Login with Google</button>
        <button>Login with Facebook</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
  fieldset {
    display: flex;
    flex-direction: column;
    position: relative;

    &::before {
      content: '${(props) => props.err}';
      color: ${props => props.err ? props.color : 'green'};
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`

/* content: ${(props) => console.log(props.err)}; */
      /* content: ${props => props.err ? props.err : props.err}; */

async function nativeSignInMethod(obj, changeErrorState) {
  try {
    await signInWithEmailAndPassword(getAuth(), obj.login, obj.password);
  } catch(err) {
    changeErrorState('Wrong login or password');
    //console.log('Wrong login or password')
  }
}

async function signIn(params) {
  let provider = new params();
  await signInWithPopup(getAuth(), provider);
}

function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);
}

function getUserName() {
  return getAuth().currentUser.displayName;
}

function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}

function authStateObserver(user) {
  console.log('observe')
  /* let signInBtn     = document.getElementById('sign-in');
  let signOutBtn    = document.getElementById('sign-out');
  let userNameElem  = document.getElementById('user-name');
  let userPicElem   = document.getElementById('user-pic');

  if (user) {
    userNameElem.textContent = getUserName();
    userPicElem.style.backgroundImage = `url(${getProfilePicUrl()})`

    signInBtn.style.display = 'none';
    signOutBtn.style.display = 'block';
  } else {
    userNameElem.textContent = '';
    userPicElem.style.backgroundImage = '';
    
    signOutBtn.style.display = 'none';
    signInBtn.style.display = 'block';
  } */
}

function signOutUser() {
  signOut(getAuth());
}