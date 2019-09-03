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

function NavMenuMobile() {

  return (
    <OverlayContainer>
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