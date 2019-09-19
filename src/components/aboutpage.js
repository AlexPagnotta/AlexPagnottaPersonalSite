import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../Utils/mediaQueries"


const AboutContainer = styled.div`
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
overflow-y: scroll;

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

const LinkText = styled.h4`
display: inline-block;
margin-right: 50px;
`

const NoBreakLineSpan = styled.span`
white-space:nowrap;
`

function AboutPage() {
    return (
        <AboutContainer>
            <TextContainer>
                <h1><NoBreakLineSpan>Chi Sono? |</NoBreakLineSpan></h1>      
                <p>
                Come già detto, sono <mark> Alex Pagnotta, ho 21 anni,</mark> e sin da piccolo ho sempre avuto una grande passione per tutto quello che riguarda l'informatica e la programmazione, passione che da 2 anni é diventata il mio lavoro.
                Qua sotto trovi i <mark> link ai miei profili </mark>LinkedIn, Instagram e alla mia email per contattarmi.
                Sempre in questa pagina puoi inoltre <mark> consultare il mio curriculum, </mark> in versione parziale qua sul sito, o completa scaricandolo in PDF.
                </p>
                <LinkText><a href="https://www.html.it/">Linkedin</a></LinkText>
                <LinkText><a href="https://www.html.it/">Instagram</a></LinkText>
                <LinkText><a href="https://www.html.it/">Email</a></LinkText>
            </TextContainer>
            <ProfileImageContainer>    
                <ProfileImage>    
                </ProfileImage>    
            </ProfileImageContainer>            
        </AboutContainer>
    )
  }
  export default AboutPage