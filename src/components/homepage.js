import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../Utils/mediaQueries"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HomepageContainer = styled.div`
padding-top: 220px;
width: 100%;
height: 100vh;
overflow-x: hidden;
min-height: 550px;

/* Grid */
display: grid;
align-items: flex-start;
grid-template-columns: repeat(2, 1fr);

${MediaQueries.queries.tablet`
padding-top: 100px; 
grid-template-columns: repeat(1, 1fr);
position: relative;
`}
`
const TextColummn = styled.div`
padding: 30px;
height: 100%;

display: flex;
align-items: center;

${MediaQueries.queries.tablet`
z-index: 2;
`}
`

const TextContainer = styled.div`
`

const ContentColumn = styled.div`
width: 100%;
height: 100%;
opacity: 0.4;

${MediaQueries.queries.tablet`
z-index: 1;
position: absolute;
left: 200px;
bottom: 0;
width: 580px;
height: 580px;
opacity: 0.1;
`}

${MediaQueries.queries.phone`
left: 50px;
`}
`

const ProfileImage = styled.div`
background-color: ${colors.baseColor};
width: 100%;
height: 100%;
`

const ScrollLinkText = styled.h4`
text-decoration: underline;
cursor: pointer;
`

const NoBreakLineSpan = styled.span`
white-space:nowrap;
`

function Homepage() {

    const image = useStaticQuery(graphql`
    query {
        profilePicImage: file(relativePath: { eq: "profile_pic.png" }) {
          childImageSharp {
            fixed(width: 580) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
  `)

    return (
        <HomepageContainer>
            <TextColummn>
                <TextContainer>
                    <h1>Ciao, sono <br/><NoBreakLineSpan>Alex Pagnotta |</NoBreakLineSpan></h1>         
                    <p>
                    <mark> Ho 21 anni </mark> , vivo in Umbria, e da 2 anni lavoro come <mark> sviluppatore </mark>, principalmente in <mark> c# </mark>, sia in ambiente WinForm che MVC Asp.Net.<br/>
                    Ho inoltre sviluppato alcune <mark> app Android </mark> nel tempo libero, oltre ad aver sempre avuto una passione per quello che riguarda la <mark> grafica e il design. </mark>
                    </p> 
                    <ScrollLinkText>
                    Scorri per visualizzare il resto del sito.
                    </ScrollLinkText>
                </TextContainer>
            </TextColummn>      
            <ContentColumn>
                <ProfileImage>  
                    <Img fixed={image.profilePicImage.childImageSharp.fixed} />   
                </ProfileImage>  
            </ContentColumn>  
        </HomepageContainer>
    )
  }

  export default Homepage