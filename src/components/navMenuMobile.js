import React from "react"
import styled from "styled-components"
import media from "../Utils/mediaQueries"

const OverlayContainer = styled.div`
position:fixed;
top:0;
height:100%;
width:100%;
z-index:0;
background-color: red;
display: none;

${media.phone`
  display: block;
`}
`

const MobileMenuItems = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin: 0px;
`
const MobileMenuItem = styled.li`
margin: 0px;
margin-left: 30px;
`

function NavMenuMobile() {

  return (
    <OverlayContainer>
        <MobileMenuItems>
            {/*<MobileMenuItem>Home</MobileMenuItem>
            <MobileMenuItem>Progetti</MobileMenuItem>
            <MobileMenuItem>Chi Sono</MobileMenuItem>
            <MobileMenuItem>Visita il mio Blog</MobileMenuItem>*/}
        </MobileMenuItems>
    </OverlayContainer>
    
  )

}
export default NavMenuMobile