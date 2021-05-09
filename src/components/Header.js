import React from 'react'
import BusinessIcon from '@material-ui/icons/Business';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components/macro';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StatePrivider';

const Nav = styled.nav`
  display:flex;
  justify-content:space-between;
  padding:15px 20px;
  position:sticky;
  background-color:white;
  align-items:center;
  top:0px;
  box-shadow:0px 5px 8px -9px rgba(0,0,0,0.75) ;
  z-index:100;
  ${'' /* @media screen and (max-width:768px){
    position:fixed;
    top:0px;
    width:80vw;
  } */}
`
const NavBars = styled(FaBars)`
  display:none;
  height:100%;
  right:2rem;
  font-size:40;
  @media screen and (max-width:768px){
    display:block;
    height:100%;
  right:2rem;
  
  }
`
const AddAnnoce = styled(AddBoxTwoToneIcon)`
  height:40px;
  ${'' /* width:100%; */}
  color:gray;
  cursor:pointer;
  background-color:#eff2f5;
`
const MLink = styled(Link)`
  display:flex;
  jusify-content:center;
  align-items:center;
  height:40px;
  width:25%;
  ${'' /* border-radius:50px; */}
  background-color:#eff2f5;
  margin-left:5px;
  text-decoration:none;
  color:#000;
`
const Linkd = styled(Link)`
  cursor:pointer;
  height:100%;
  ${'' /* width:100%; */}
`
const SearchInfo = styled.div`
  display:flex;
  jusify-contet:center;
  align-items:center;
  background-color:#eff2f5;
  padding:10px;
  margin-left:10px;
  border-radius:999px;
  @media screen and (max-width:768px){
    display:none;
  }
`
const Search = styled.input`
    border:none;
    background-color:transparent;
    outline-width:0;  
`
const HomLogo = styled(HomeIcon)`
  color:gray;
  height:40px;
  ${'' /* margin-right:30px; */}
  ${'' /* margin:0px  20px; */}
`
const Logo = styled(BusinessIcon)`
  display:flex;
  height:100%;
  width:40px;
  color:gray;
  padding-right:40px;
 
`
const Chat = styled(ChatIcon)`
  margin:0px 30px;
  color:gray;
`
const HeaderInfo = styled.div`
  display:flex;
  jusify-content:center;
  align-items:center;
  ${'' /* width:5rem; */}
  right:5rem;
  
  @media screen and (max-width:768px){
    display:none;
  }
`
const ChatContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    jusify-content:center;
    align-items:center;
    @media screen and (max-width:768px){
    display:none;
  }
 
`
const HomeContainer = styled.div`
display:flex;
flex-direction:column;
height:100%;
jusify-content:center;
align-items:center;
margin-right:30px;

@media screen and (max-width:768px){
display:none;
}
}`
const BuyRent = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    jusify-content:center;
    align-items:center;
    margin:0rem 2rem;
    @media screen and (max-width:768px){
    display:none;
  }
`
const ConContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    jusify-content:center;
    align-items:center;
    @media screen and (max-width:768px){
    display:none;
  }
`
const NavItems = styled.div`
  display:flex;
  flex:1;
  justify-content:center;
  align-items:center;
  
  @media screen and (max-width:768px){
    display:none;
  }
`


const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <Nav>
       <Logo style={{ fontSize: 40}}/>
        <SearchInfo>
          <SearchIcon />
          <Search  placeholder = 'Que recherchez-vous?'/>
        </SearchInfo>
        <NavItems>
          <HomeContainer>
            <Linkd to='/'>
              <HomLogo style={{ fontSize: 40 }} />
              </Linkd>
            <h5>Acceuil</h5>
        </HomeContainer>
        
          <MLink to='/home'>
            <AddAnnoce style={{ fontSize: 40 }} />
            <h5>Déposer une annonce</h5> 
          </MLink>
          <BuyRent>
            <Linkd to='/'>
              <ShoppingCartIcon style={{ fontSize: 40, color: 'gray' }} />
              </Linkd>
            <h5>Acheter & Louer</h5>
          </BuyRent>
        </NavItems>
        <HeaderInfo>
          <ChatContainer>
            <Linkd to='/'>
              <Chat style={{ fontSize: 40 }} />
              </Linkd>
            <h5>Message</h5>    
        </ChatContainer>
          <ConContainer>
          <Linkd to='/'>
              <Avatar src={user.photoURL}/>
              </Linkd>
            <h5>{user.displayName}</h5>
          </ConContainer>
        </HeaderInfo>
        <NavBars style={{ fontSize: 40}} />
        </Nav>
    </>
  )
}
export default Header