import { Avatar } from '@material-ui/core';
import React, { useState, forwardRef } from 'react';
import styled,{css} from 'styled-components/macro';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Divcontainer = styled.div`
  display:flex;
  ${'' /* flex:1; */}
  flex-direction:column;
  margin-top:40px;
  background-color:white;
  border-radius:15px;
  box-shadow:0px 5px 7px -7px rgba(0,0,0,0.75);
`
const TopContainer = styled.div`
  display:flex;
  align-items:center;
  position:relative;
  padding:15px;
`
const BottomContainer = styled.div`
  margin-top:10px;
  margin-bottom:10px;
  padding:15px 25px;

span{
  padding-left:5px;
}

`
const TopContainerInfo = styled.div`

h3{
  font-size:medium;
}
p{
  font-size:small;
  color:gray;
}
`
const Images = styled.div`

img{
  width:100%;
  border-radius:15px;
  height:418px;
  object-fit:cover;
  
}
`
const Post = forwardRef(({ profilePic, username, price, images, timestamp, phon ,message},ref) => {
  return (
    <Divcontainer ref={ref} id='posts'>
      <TopContainer>
        <Avatar src={profilePic} css={`margin-right:15px`} />
        <TopContainerInfo>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString() }</p>
        </TopContainerInfo>
      </TopContainer>
      
      <BottomContainer>
        <Fade top>
        <p>Prix:<span>{price}</span>CFA</p>
          <p>Numero de portable:<span>{phon}</span></p>
        </Fade>
        <Fade left>
          <p>{message}</p>
        </Fade>
      </BottomContainer>
      <Zoom left cascade>
      <Images>
        <img src={images} alt="Image" />
        </Images>
      </Zoom>
    </Divcontainer>
  )
})

export default Post