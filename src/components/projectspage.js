import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../Utils/mediaQueries"

const ProjectsContainer = styled.div`
padding-top: 220px;
width: 100%;

/* Grid */
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

${MediaQueries.queries.tablet`
padding-top: 50px; 
padding-bottom: 100px;
`}
`
const ProfileImage = styled.div`
padding: 30px;
background-color: ${colors.accentColor};
width: 100%;
height: 100%;
`

const LinkText = styled.h4`
display: inline-block;
margin-right: 50px;
`

const NoBreakLineSpan = styled.span`
white-space:nowrap;
`

function ProjectsPage() {
    return (
        <ProjectsContainer>
            <TextContainer>
                <h1>I Miei <NoBreakLineSpan>Progetti |</NoBreakLineSpan></h1>      
                <p>
                Questi sono i miei progetti più recenti, sia per quanto riguarda la <mark>programmazione</mark>, che per quanto riguarda la <mark>progettazione grafica di UI/UX e loghi.</mark><br/>
                Puoi inoltre visitare i miei profili GitHub e Behance per vedere nel dettaglio tutti i miei progetti.
                </p>    
                <LinkText><a href="https://www.html.it/">Github</a></LinkText>
                <LinkText><a href="https://www.html.it/">Behance</a></LinkText>
            </TextContainer>
            <ProfileImage>     
            </ProfileImage>            
        </ProjectsContainer>
    )
  }
  export default ProjectsPage