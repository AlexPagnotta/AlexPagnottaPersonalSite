import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../Utils/mediaQueries"

const HomepageContainer = styled.div`
padding-top: 220px;
width: 100%;
height:100vh;
/* Grid styles */
display: grid;
align-items: flex-start;
grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));

${MediaQueries.queries.tablet`
padding-top: 150px; 
height:auto;
`}
`
const TextContainer = styled.div`
padding: 30px;
height: 100%;

${MediaQueries.queries.tablet`
padding-top: 50px; 
padding-bottom: 100px;
`}
`
const ProfileImageContainer = styled.div`
padding: 30px;
background-color: ${colors.white};
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

${MediaQueries.queries.tablet`
padding-bottom: 100px;
`}
`

const ProfileImage = styled.div`
background-color: ${colors.accentColor};
width: 300px;
height: 300px;
`

const ScrollLinkText = styled.h4`
text-decoration: underline;
`

const NoBreakLineSpan = styled.span`
white-space:nowrap;
`

function Homepage() {
    return (
        <HomepageContainer>
            <TextContainer>
                <h1>Ciao, sono <NoBreakLineSpan>Alex Pagnotta |</NoBreakLineSpan></h1>         
                <p>
                <mark> Ho 21 anni </mark> , vivo in Umbria, e da 2 anni lavoro come <mark> sviluppatore </mark>, principalmente in <mark> c# </mark>, sia in ambiente WinForm che MVC Asp.Net.<br></br><br></br>
                Ho inoltre sviluppato alcune <mark> app Android </mark> nel tempo libero, oltre ad aver sempre avuto una passione per quello che riguarda la <mark> grafica e il design. </mark>
                </p> 
                <ScrollLinkText>
                Scorri per visualizzare il resto del sito.
                </ScrollLinkText>
            </TextContainer>
            <ProfileImageContainer>    
                <ProfileImage>    
                </ProfileImage>    
            </ProfileImageContainer>            
        </HomepageContainer>
    )
  }
  export default Homepage