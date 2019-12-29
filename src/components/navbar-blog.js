import React from "react"
import styled from "styled-components"
import MediaQueries from "../utils/mediaQueries"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import colors from "../globals/colors"
import Media from 'react-media';
import {navigate} from 'gatsby'; 
import { Link  } from "gatsby"

const MenuIconCointainer = styled.div`
margin-right: 30px;
z-index: 5;
position:fixed;
right: 0;
height: 100px;
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
  margin: 20px 0;
  transition: all .2s ease-in-out;

  }
  
  &.active:before {
    transform: translateY(13px) rotate(45deg);
  }
  
  &.active:after {
    transform: translateY(-13px) rotate(-45deg);
  }

  &.active > div ,
  &.active:after,
  &.active:before{
    background-color: ${colors.baseColor};
  }

  ${MediaQueries.queries.tablet`
  display: inline;
  `}
}`

const NavbarBackContainer = styled.nav`
background-color:  ${colors.baseColor};
position: fixed;
width: 100%;
z-index: 3;
`

const NavbarContainer = styled.nav`
width: 100%;
height: 140px; 
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;

max-width: 1220px;
margin: 0 auto; //Center the container

${MediaQueries.queries.tablet`
  height: 100px; 
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
`

const MenuItem = styled.li`
margin: 0px;
margin-left: 30px;
cursor: pointer;

&.active{
  font-weight:900;
}
`

class NavbarBlog extends React.Component  {

  constructor() {
    super();
  }


  render(){   
    return (
      <StaticQuery
        query={graphql`
        query {
          desktopLogoImage: file(relativePath: { eq: "navbar_blog_logo.png" }) {
            childImageSharp {
              fixed(height: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          mobileLogoImage: file(relativePath: { eq: "navbar_blog_logo.png" }) {
            childImageSharp {
              fixed(height: 40) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        `}
        render={data => (
          <div>   
            <NavbarBackContainer>                               
              <NavbarContainer>     
              <Link 
                    to={'/blog'}>       
                  <LogoDesktop>
                    <Img fixed={data.desktopLogoImage.childImageSharp.fixed} /> 
                  </LogoDesktop>
                  <LogoMobile>
                    <Img fixed={data.mobileLogoImage.childImageSharp.fixed} /> 
                  </LogoMobile>
                </Link>
                <MenuItems>
                  {/*<MenuItem onClick={ () => this.props.goToSection(1,false) }>Home</MenuItem>*/}
                  <MenuItem onClick={ () => navigate('') }>Visita il mio Sito</MenuItem>
                </MenuItems>
              </NavbarContainer>
            </NavbarBackContainer>                                       
          </div>
        )}
      />
    )
  }
}
export default NavbarBlog
  



