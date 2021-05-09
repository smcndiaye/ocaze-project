import { Avatar } from '@material-ui/core';
import React, { useState, forwardRef } from 'react';
import styled,{css} from 'styled-components/macro';

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
  
}
`
const Post = forwardRef(({ profilePic, username, price, images, timestamp, phon ,message},ref) => {
  return (
    <Divcontainer ref={ref} >
      <TopContainer>
        <Avatar src={profilePic} css={`margin-right:15px`} />
        <TopContainerInfo>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString() }</p>
        </TopContainerInfo>
      </TopContainer>
      
      <BottomContainer>
        
        <p>Prix:<span>{price}</span>CFA</p>
        <p>Numero de portable:<span>{ phon}</span></p>
        <p>{ message}</p>
      </BottomContainer>
      <Images>
        <img src={images} alt=""/>
      </Images>
    </Divcontainer>
  )
})

export default Post