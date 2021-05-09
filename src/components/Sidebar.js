import React from 'react'
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import { SidebarRow } from './SidebarRow';
import { useStateValue } from './StatePrivider';
const DivContainer = styled.div`
  border-right: 1px solid var(--twitter-background);
  flex: 0.3;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
 
  @media screen and (max-width:768px){
    display:none
  }
}
`


const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
        <DivContainer >
      <SidebarRow title={user.displayName} src={user.photoURL} />
      </DivContainer>
  )
}

export default Sidebar
