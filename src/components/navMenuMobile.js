import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import Scrollspy from 'react-scrollspy'
import {navigate} from 'gatsby'; 

const OverlayContainer = styled.div`
position:fixed;
top:0;
height:100%;
width:100%;
background-color: ${colors.primaryColor};
z-index: 4;
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
color: ${colors.baseColor};
cursor: pointer;
font-size: 30px;

&.active{
  font-weight:900;
}
`

function NavMenuMobile(props) {

  return (
    <OverlayContainer className={props.menuVisible ? null : 'hidden'}>
        <MobileMenuItems>
        <Scrollspy 
          items={ [ 'homepage-section','projectspage-section','blogposts-section','aboutpage-section'] } 
          currentClassName="active"
          offset={-220}
          componentTag="div"
          style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <MobileMenuItem onClick={ () => props.goToSection(1,true) }>Home</MobileMenuItem>
            <MobileMenuItem onClick={ () => props.goToSection(2,true) }>Progetti</MobileMenuItem>
            <MobileMenuItem onClick={ () => props.goToSection(3,true) }>Articoli</MobileMenuItem>
            <MobileMenuItem onClick={ () => props.goToSection(4,true) }>Chi Sono</MobileMenuItem>
            <MobileMenuItem onClick={ () => navigate('/blog') }>Visita il mio Blog</MobileMenuItem>
          </Scrollspy>
  </MobileMenuItems>
    </OverlayContainer>
 
  )
}
export default NavMenuMobile