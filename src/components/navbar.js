import React from "react"
import styled from "styled-components"
import MediaQueries from "../Utils/mediaQueries"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import colors from "../globals/colors"
import Media from 'react-media';

const Container = styled.nav`
height: 220px; 
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;

${MediaQueries.queries.tablet`
  height: 150px; 
`}1
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
margin-left: 30px;`

const MenuIcon = styled.div`
  margin: 1em;
  width: 40px;
  display: none;
  z-index: 0;
  cursor: pointer;
  
  &:before,
  &:after,
  & > div {
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
  z-index: 2;
  `}
}`


class Navbar extends React.Component  {

  constructor() {
    super();
    this.menuIconClick = this.menuIconClick.bind(this);
    this.resetMenuState = this.resetMenuState.bind(this);
    this.state = {
      menuIconClicked: false,
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
          <Container>            
            <LogoDesktop>
              <Img fixed={data.desktopLogoImage.childImageSharp.fixed} /> 
            </LogoDesktop>
            <LogoMobile>
              <Img fixed={data.mobileLogoImage.childImageSharp.fixed} /> 
            </LogoMobile>
            <MenuItems>
              <MenuItem>Home</MenuItem>
              <MenuItem>Progetti</MenuItem>
              <MenuItem>Chi Sono</MenuItem>
              <MenuItem>Visita il mio Blog</MenuItem>
            </MenuItems>
            <Media
              query={"(max-width: " + MediaQueries.sizes.tablet + "px)"}
              onChange={matches =>
                matches
                ? null : this.resetMenuState()
              }
            />
            <MenuIcon onClick={this.menuIconClick} className={this.state.menuIconClicked ? 'active' : null}>
              <div></div>
            </MenuIcon>
          </Container>
        )}
      />
    )
  }
}
export default Navbar
  



