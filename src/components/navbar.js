import React from "react"
import styled from "styled-components"
import media from "../Utils/mediaQueries";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.nav`
height: 220px; 
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;

${media.tablet`
  height: 150px; 
`}1
`
const Logo = styled.div`
width: 90px;
height: 70px;
background-color: white;`

const MenuItems = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin: 0px;

${media.tablet`
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

  &:before,
  &:after,
  & > div {
  background-color: black; //Todo Usare il colore grigietto che uso sempre, definendolo in file colori magari
  border-radius: 3px;
  content: '';
  display: block;
  height: 5px;
  margin: 7px 0;
  transition: all .2s ease-in-out;
  }


  ${media.tablet`
  display: inline;
  `}
}`

export default () => {

  const logoImages = useStaticQuery(graphql`
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
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const sources = [
    logoImages.mobileLogoImage.childImageSharp.fixed,
    {
      ...logoImages.desktopLogoImage.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ]

  return ( 
    <Container>
      <Logo>
        <Img fixed ={logoImages.mobileLogoImage.childImageSharp.fixed} /> 
        <Img fixed ={logoImages.desktopLogoImage.childImageSharp.fixed} /> 
      </Logo>
      <MenuItems>
        <MenuItem>Home</MenuItem>
        <MenuItem>Progetti</MenuItem>
        <MenuItem>Chi Sono</MenuItem>
        <MenuItem>Visita il mio Blog</MenuItem>
      </MenuItems>
      <MenuIcon>
        <div></div>
      </MenuIcon>
    </Container>
  )
}
