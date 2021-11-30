import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../commonTemplate/Header';
import app from '../Firebase';

export default function RegistPage(params) {
  const [userDate, setUserDate] = useState(null);

  initFirebaseAuth();

  function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  function authStateObserver(user) {
    /* console.log('observe');
    console.log(user) */
    if (user) {
      try {
        if(userDate === null || (userDate.userName !== getUserName() && userDate.userPicElem !== getProfilePicUrl())) {
          setUserDate({
            userName: getUserName(),
            userPicElem: getProfilePicUrl(),
          })
          console.log('work')
        }
      } catch(err) {
        console.log('nothing was happened!')
      }
    }
    /* if (user) {
      setUserDate({
        userName: getUserName(),
        userPicElem: getProfilePicUrl(),
      })
    } else {
      setUserDate(null)
    } */
  
  
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

  return (
    <>
      {/* <header>Netflix!</header> */}
      <Header userDate={userDate} />
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
  
  fieldset {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    border: none;

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

async function nativeSignInMethod(obj, changeErrorState) {
  try {
    await signInWithEmailAndPassword(getAuth(), obj.login, obj.password);
  } catch(err) {
    changeErrorState('Wrong login or password');
  }
}

async function signIn(params) {
  let provider = new params();
  await signInWithPopup(getAuth(), provider);
}

function getUserName() {
  return getAuth().currentUser.displayName;
}

function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}

function signOutUser() {
  signOut(getAuth());
}