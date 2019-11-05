import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../Utils/mediaQueries"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "../components/project-card";

const ProjectsContainer = styled.div`
padding-top: 220px;
width: 100%;
height: 100vh;

/* Grid */
display: grid;
align-items: flex-start;
grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));

${MediaQueries.queries.tablet`
padding-top: 150px; 
`}
`
const TextColummn = styled.div`
padding: 30px;
height: 100%;

display: flex;
align-items: center;

${MediaQueries.queries.tablet`
align-items: flex-start;
`}
`

const TextContainer = styled.div`
`

const ContentColumn = styled.div`
width: 100%;
height: 100%;
background: red;
overflow: auto;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 20px;
align-items: stretch;

${MediaQueries.queries.tablet`
display: flex;
align-items: flex-end;
`}

`

const LinkText = styled.h4`
display: inline-block;
margin-right: 50px;
`

const NoBreakLineSpan = styled.span`
white-space:nowrap;
`

function ProjectsPage() {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
              node {
                id,
                frontmatter {
                  title
                  date
                  author
                }
              }
            }
          }
    }
  `)
  const Posts = data.allMarkdownRemark.edges
  .map(edge => <ProjectCard key={edge.node.id} post={edge.node} />)
    return (
        <ProjectsContainer>
          <TextColummn>
            <TextContainer>         
                  <h1>I Miei <NoBreakLineSpan>Progetti |</NoBreakLineSpan></h1>      
                  <p>
                  Questi sono i miei progetti più recenti, sia per quanto riguarda la <mark>programmazione</mark>, che per quanto riguarda la <mark>progettazione grafica di UI/UX e loghi.</mark><br/>
                  Puoi inoltre visitare i miei profili GitHub e Behance per vedere nel dettaglio tutti i miei progetti.
                  </p>    
                  <LinkText><a href="https://www.html.it/">Github</a></LinkText>
                  <LinkText><a href="https://www.html.it/">Behance</a></LinkText>
              </TextContainer>
            </TextColummn>      
            <ContentColumn>
                {Posts}
            </ContentColumn>           
        </ProjectsContainer>
    )
  }
  export default ProjectsPage