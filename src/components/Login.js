import { Button } from '@material-ui/core';
import React from 'react'
import styled, { css } from 'styled-components';
import { auth, provider } from '../firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StatePrivider';
import smallLogo from './logo/logo_small.png'
const DivContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  height:100vh;
  width:100vw
  overflow:hidden;
`
const Logontainer = styled.div`
  ${'' /* align-items:center; */}
  justify-content:center;
  


  img{
    padding-left:120px;
    height:300px;
    width:200px;
  }
  h3{
    padding-top:50px;
    width:100%;
    font-size:19px;
    text-transform:uppercase;
    color:var(--twitter-color);
`
const BottonContainer = styled.div`
    display:flex;
    margin-bottom:20px;

`
const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    //sign in stuff
    auth.signInWithPopup(provider)
      .then(result => {
        // console.log(result.additionalUserInfo.profile.picture.data.url)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
          
        })
      }).catch((error) => alert(error.message));
  }
  return (
    <DivContainer>
      <Logontainer>
        <img src={smallLogo} alt="logo" />
        <h3>Vendre librement sans delais et sans frais</h3>
      </Logontainer>
      <BottonContainer>
      <Button
            variant="contained"
                      style={{
                        borderRadius: 35,
                        color:'white',
                        backgroundColor: 'var(--twitter-color)',
                        padding: "18px 36px",
                        fontSize: "18px",
                      
              }}
            
            onClick={signIn}
        className='ButtonOption'>SIGN IN WITH GOOGLE ACCOUNT</Button>
      </BottonContainer>
    </DivContainer>
  )
}

export default Login
