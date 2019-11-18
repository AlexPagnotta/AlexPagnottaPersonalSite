import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../Utils/mediaQueries"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "../components/project-card";

const ProjectsContainer = styled.div`
width: 100%;
background-color: ${colors.accentColor};

${MediaQueries.queries.tablet`
`}
`

const TitleContainer = styled.div`
width: 100%;
padding: 90px 30px 90px 30px;
`

const ProjectCardsContainer = styled.div`
width: 100%;
display flex;
overflow: auto;
padding-bottom: 90px
`

const ScrollLinkText = styled.h4`
text-decoration: underline;
cursor: pointer;
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
          <TitleContainer>
            <h1>I Miei Progetti |</h1> 
            <p>Questi sono i miei ultimi progetti di grafica e programmazione.</p> 
            <ScrollLinkText>
              Visualizza tutto
            </ScrollLinkText>
          </TitleContainer>
          <ProjectCardsContainer>
            {Posts}
          </ProjectCardsContainer>
        </ProjectsContainer>
    )
  }
  export default ProjectsPage

  /*
              <ContentColumn>
                {Posts}
            </ContentColumn>   
  
  */