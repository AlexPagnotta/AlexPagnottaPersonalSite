import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"

const OverlayContainer = styled.div`
position:fixed;
top:0;
height:100%;
width:100%;
background-color: ${colors.primaryColor};
z-index: 2;
overflow-y: hidden;
max-height: 100%;
  
transition-property: max-height;
transition-duration: .5s;
transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

&.hidden {
  max-height: 0;
}`

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
    <OverlayContainer className={props.menuVisible ? null : 'hidden'}>
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