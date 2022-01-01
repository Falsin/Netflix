import styled from "styled-components";
import { useEffect, useState } from 'react';
import app from "../../Firebase";
import {
  getAuth,
  signOut,
} from 'firebase/auth';

export default function AuthBlockStatus() {
  const [logOutStatus, setLogOutStatus] = useState(false);
  const [userDate, setUserDate] = useState({
    userName: null,
    userPicElem: null,
  })

  useEffect(() => {
    const manageAuth = getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUserDate({
          userName: getUserName(),
          userPicElem: getProfilePicUrl(),
        })
      } else {
        setUserDate({
          userName: null,
          userPicElem: null,
        })
      }
    });

    return () =>  manageAuth();
  }, [userDate.userName, userDate.userPicElem]);

  return (
    <Wrapper onClick={() => setLogOutStatus(!logOutStatus ? true : false)}>
      <Picture image={userDate.userPicElem} />
      <div id="user-name">{userDate.userName}</div>
        {logOutStatus 
        ? <LogOutBlock onClick={() => {
          signOut(getAuth());  
        }}>Log out</LogOutBlock> 
        : null}
    </Wrapper>
  )
}

const LogOutBlock = styled.div`
  position: absolute;
  top: 100%;
  cursor: pointer;
  display: block;
  background: #e50914;
`

const Picture = styled.div`
  background-image: ${(props) => 'url(' + props.image + ')'};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

function getUserName() {
  return getAuth().currentUser.displayName;
}

function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}