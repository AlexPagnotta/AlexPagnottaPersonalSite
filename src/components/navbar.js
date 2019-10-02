import React from "react"
import styled from "styled-components"
import MediaQueries from "../Utils/mediaQueries"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import colors from "../globals/colors"
import Media from 'react-media';

const MenuIconCointainer = styled.div`
margin-right: 30px;
z-index: 3;
position:fixed;
right: 0;
height: 150px;
display: flex;
align-items: center;
`

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  &:before,
  &:after,
  & > div {
  width: 40px;
  background-color: ${colors.primaryColor};
  border-radius: 3px;
  content: '';
  display: block;
  height: 5px;
  margin: 9px 0;
  transition: all .2s ease-in-out;
  
  }

  &.active > div {
    transform: scale(0);
  }
  
  &.active:before {
    transform: translateY(.55em) rotate(135deg);
  }
  
  &.active:after {
    transform: translateY(-.55em) rotate(-135deg);
  }

  &.active > div ,
  &.active:after,
  &.active:before{
    background-color: ${colors.white};
  }

  ${MediaQueries.queries.tablet`
  display: inline;
  `}
}`

const NavbarContainer = styled.nav`
background-color:  ${colors.white};
width: 100%;
max-width: 1220px;
position: fixed;
height: 220px; 
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;
z-index: 1;

${MediaQueries.queries.tablet`
  height: 150px; 
`}
`
const LogoDesktop = styled.div`
display: flex;
margin-bottom: 0px;
flex-direction: row;
justify-content: flex-start;
margin: 0px;

${MediaQueries.queries.tablet`
display: none;
`}
`

const LogoMobile = styled.div`
display: none;
margin-bottom: 0px;
flex-direction: row;
justify-content: flex-start;
margin: 0px;

${MediaQueries.queries.tablet`
display: flex;
`}
`

const MenuItems = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin: 0px;

${MediaQueries.queries.tablet`
  display: none;
`}
`

const MenuItem = styled.li`
margin: 0px;
margin-left: 30px;

&.active{
  font-weight:bold;
}
`


class Navbar extends React.Component  {

  constructor() {
    super();
    this.menuIconClick = this.menuIconClick.bind(this);
    this.resetMenuState = this.resetMenuState.bind(this);
    this.state = {
      menuIconClicked: false
    }; 
  }

  //Change menu state, and callback parent methods
  menuIconClick(){
    this.setState({ menuIconClicked: !this.state.menuIconClicked });
    this.props.toggleOverlayMenu()
  }

  //Change menu state, and callback parent methods
  resetMenuState(){
    if(this.state){
      this.setState({ menuIconClicked: false }); 
      this.props.resetOverlayMenu()
    }
  }

  render(){   
    return (
      <StaticQuery
        query={graphql`
        query {
          desktopLogoImage: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fixed(height: 70) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          mobileLogoImage: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fixed(height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        `}
        render={data => (
          <div>  
            <MenuIconCointainer>        
              <MenuIcon onClick={this.menuIconClick} className={this.state.menuIconClicked ? 'active' : null}>
                <div></div>
              </MenuIcon>     
            </MenuIconCointainer>                                   
            <NavbarContainer>            
              <LogoDesktop>
                <Img fixed={data.desktopLogoImage.childImageSharp.fixed} /> 
              </LogoDesktop>
              <LogoMobile>
                <Img fixed={data.mobileLogoImage.childImageSharp.fixed} /> 
              </LogoMobile>
              <MenuItems>
                <MenuItem className={this.props.sectionActive == 0 ? 'active' : null}>Home</MenuItem>
                <MenuItem className={this.props.sectionActive  == 1 ? 'active' : null}>Progetti</MenuItem>
                <MenuItem className={this.props.sectionActive  == 2 ? 'active' : null}>Chi Sono</MenuItem>
                <MenuItem>Visita il mio Blog</MenuItem>
              </MenuItems>
              <Media
                query={"(max-width: " + MediaQueries.sizes.tablet + "px)"}
                onChange={matches =>
                  matches
                  ? null : this.resetMenuState()
                }
              />
              
            </NavbarContainer>
          </div>
        )}
      />
    )
  }
}
export default Navbar
  



