import React from 'react'
import styled from 'styled-components';

const DivContainer = styled.div`
  flex:0.3;
  @media screen and (max-width:768px){
    display:none
  }
`
const Widget = () => {
  return (
    <DivContainer>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=283052085488261"
        width="340"
        height="100%"
        style={{border:'none',overflow:'hidden'}}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </DivContainer>
  )
}

export default Widget
