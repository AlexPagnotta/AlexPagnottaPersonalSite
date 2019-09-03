import React from "react"
import styled from "styled-components"
import media from "../Utils/mediaQueries"
import colors from "../globals/colors"

const OverlayContainer = styled.div`
position:fixed;
top:0;
height:100%;
width:100%;
z-index:1;
background-color: ${colors.primaryColor};

&.show {
  visibility: show;
  opacity(100);
  -webkit-animation: slide-top 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: slide-top 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

&.hidden {
  visibility: hidden;
  opacity(0);
  -webkit-animation: slide-top 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: slide-top 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

//Ease in Animation 
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(-100vh);
            transform: translateY(-100vh);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(-100vh);
            transform: translateY(-100vh);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
          
`

const MobileMenuItems = styled.ul`
list-style-type: none;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
align-content: center;
margin: 0px;
height: 100%;
`
const MobileMenuItem = styled.li`
margin: 20px;
padding: 10px;
color: ${colors.white};


& .active{
  background-color : ${colors.accentColor};
  color: ${colors.primaryColor};
}

`

function NavMenuMobile(props) {

  return (
    <OverlayContainer className={props.menuVisible ? 'show' : 'hidden'}>
        <MobileMenuItems>
            <MobileMenuItem>Home</MobileMenuItem>
            <MobileMenuItem>Progetti</MobileMenuItem>
            <MobileMenuItem>Chi Sono</MobileMenuItem>
            <MobileMenuItem>Visita il mio Blog</MobileMenuItem>
        </MobileMenuItems>
    </OverlayContainer>
 
  )
}
export default NavMenuMobile