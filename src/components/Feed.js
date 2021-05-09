import React, { useState,useEffect} from 'react'
import FlipMove from "react-flip-move";
import styled from 'styled-components';
import db from '../firebase';
import { MessageSender } from './MessageSender';
import Post from './Post';

const FeedContainer = styled.div`
  display:flex;
  flex:1;
  ${'' /* margin-top:30px; */}
  padding:30px 40px;
  border-right:1px solid var(--bg-color);
  ${'' /* min-width: fit-content; */}
  overflow-y: scroll;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  &::-webkit-scrollbar {
  display: none;
  @media screen and (max-width:768px){
    width:100vw;
  }
}
`
const Feed = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,data:doc.data()
      })))
    ))
  },[])
  return (
    <FeedContainer className='feed'>
      <MessageSender />
      <FlipMove>
      {posts.map(post => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          price={post.data.price}
          username={post.data.username}
          phon={post.data.phon}
          message={post.data.message}
          timestamp={post.data.timestamp}
          images={post.data.image}
        />
      ))}
      </FlipMove>
    </FeedContainer>
  )
}

export default Feed
