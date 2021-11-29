import app from '../../../Firebase';
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import styled from "styled-components";

export default function RegistBox() {
  initFirebaseAuth();

  return (
    <Wrapper>
      <div id="user-pic"></div>
        <div id="user-name"></div>
        <button id="sign-out" onClick={() => signOutUser()}>
          Sign-out
        </button>
        <button id="sign-in" onClick={() => signIn(GoogleAuthProvider)}>
          Sign-in with Google
        </button>
        <button id="sign-in" onClick={() => signIn(FacebookAuthProvider)}>
          Sign-in with Facebook
        </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-left: auto;

  #user-pic {
    position: relative;
    min-width: 35px;
    min-height: 35px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;
  }
  
  button {
    border: solid black 1px;
    margin: 0;
  }
`

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
  let signInBtn     = document.getElementById('sign-in');
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
  }
}

function signOutUser() {
  signOut(getAuth());
}