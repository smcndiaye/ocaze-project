import React from 'react';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const DivContainer = styled.div`
  display:flex;
  ${'' /* padding:10px; */}
  align-items:center;
  cursor:pointer;
  h4{
    margin-left:20px;
    font-weight:600;
  }
  &:hover{
    background-color:#e8f5fe;
    color:var(--twitter-color);
    border-radius:10px;
    transition:color 100ms ease-tout
  }
`

export const SidebarRow = ({title,Icon,src}) => {
  return (
    <DivContainer>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{ title}</h4>
    </DivContainer>
  )
}
