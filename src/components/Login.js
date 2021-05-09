import { Button } from '@material-ui/core';
import React from 'react'
import styled, { css } from 'styled-components';
import { auth, provider } from '../firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StatePrivider';
const DivContainer = styled.div`
  display:grid;
  place-items:center;
  height:100vh;
  
`

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    //sign in stuff
    auth.signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user:result.user
        })
      }).catch((error) => alert(error.message));
  }
  return (
    <DivContainer>
      <Button type='submit' onClick={signIn}
        css={`300px;
              font-weight:800;
            `}>Sign in </Button>
    </DivContainer>
  )
}

export default Login
