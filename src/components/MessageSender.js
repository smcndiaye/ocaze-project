import {Avatar,Button } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useStateValue } from './StatePrivider';
import './MseeageSender.css'

import db from '../firebase';
import firebase from 'firebase';
const storage = firebase.storage();
const IputStyle = css`
  outline-width:0px;
  border:none;
  padding:5px 15px;
  margin:0px 10px;
  border-radius:999px;
  background-color:#eff2f5;
`
const DivContainer = styled.div`
   display:flex;
  ${'' /* flex:1; */}
  flex-direction:column;
  margin-top:40px;
  background-color:white;
  border-radius:15px;
  box-shadow:0px 5px 7px -7px rgba(0,0,0,0.75);
  @media screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    width:100%;
  }
`
const TopContainer = styled.div`
  display:flex;
  border-bottom:1px solid #eff2f5;
  padding:15px;
  @media screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    width:100%;
    padding:15px 15px;
    ;
    input{
      margin:10px 10px;
      padding:15px 15px;

    }

  }

`
const BottomContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
`
// const Form = styled.form`
  
//   flex:1;

// `

const Description = styled.input`
  ${IputStyle}
`
const Prix = styled.input`
  ${IputStyle}
 
`
const Protable = styled.input`
  ${IputStyle}
`
const BottomOption = styled.div`
  padding:20px;
  display:flex;
  
  align-items:center;
  color:gray;
  margin:5px;
  h3{
    font-size:medium;
    margin-left:10px;
  }
  &:hover{
    background-color:var(--bg-color);
    border-radius:20px;
    cursor:pointer;
  }
`
export const MessageSender = () => {
  const [desc, setDesc] = useState('')
  const [prix, setPrix] = useState('')
  const [phon,setPhon] = useState('')
  const [selecImgs, setSelectImgs] = useState(null)
  const [progress, setProgress] = useState(0);

  const onChangeImg = (e) => {
    // console.log(e.target.files)
    if (e.target.files[0]) {
      setSelectImgs(e.target.files[0])
    }
  }
const  handleSubmit = (e) => {
    e.preventDefault();
    if (selecImgs) {
      
    const uploadTask = storage.ref(`images/${selecImgs.name}`).put(selecImgs); 
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL()
        db.collection('posts').add(
          {
            message: desc,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            phon: phon,
            price: prix,
            image:downloadURL,
            }
          )}
      );
    }
     
    
    // reset value
    setDesc('')
    setPrix('')
  setPhon('')
  

};

  
const [{ user }, dispatch] = useStateValue();
return (
    
    <DivContainer>
         <form >

      <TopContainer>
        <Avatar src={user.photoURL}/>
        
        <Description  value={desc}    
          placeholder='Description'
            onChange={(e) => setDesc(e.target.value)} />
        <Prix required type='number' placeholder='Prix' value={prix}
          
            onChange={(e) => setPrix(e.target.value)} />
          <Protable  type='number' placeholder='Numero de telephone'
            value={phon}
          onChange={(e) => setPhon(e.target.value)} 
        />

         
      </TopContainer>
      <BottomContainer>
        <BottomOption>
           {/* inpufile */}
        <label htmlFor="upload-photo" style={{display:'flex',alignItems:'center',cursor:'pointer'}}>

        <input
          
            type="file"  style={{ display: 'none', cursor: 'pointer' }}
              id='upload-photo'
          name="upload-photo"
          hidden='true'

            onChange={onChangeImg}
            />              
            <PhotoLibraryIcon style={{ color: 'green' }}/>
        <h3>Photos</h3>
        </label>

        </BottomOption>
        <BottomOption>
          <Button
            variant='outlined'
            onClick={handleSubmit} disabled={!prix} className='ButtonOption'>POSTER</Button>
    
        </BottomOption>
      </BottomContainer>
        </form>
    </DivContainer>
  )
}
