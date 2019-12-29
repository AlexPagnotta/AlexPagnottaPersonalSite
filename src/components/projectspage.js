import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../utils/mediaQueries"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "../components/project-card";

const ProjectsSectionContainer =  styled.div`
width: 100%;

//Fix scroll to with navbar
padding-top: 140px;
margin-top: -140px;

${MediaQueries.queries.tablet`

//Fix scroll to with navbar
padding-top: 100px;
margin-top: -100px;

`}
`

const ProjectsBackContainer =  styled.div`
width: 100%;
background-color: ${colors.accentColor};

`

const ProjectsContainer = styled.div`
width: 100%;
overflow-x: hidden;
`

const TitleContainer = styled.div`
width: 100%;
padding: 60px 30px 30px 30px;
max-width: 1220px;
margin: 0 auto; //Center the container
`

const ProjectCardsContainer = styled.div`
width: 100%;
display flex;
overflow: auto;
padding-bottom: 60px;
max-width: 1220px;
margin: 0 auto; //Center the container

@media (min-width: 1220px) {
  margin-left: calc((100vw - 1220px) / 2); //Calculate the left margin, to make the div centered only from the left
  max-width: calc(1220px + (100vw - 1220px) / 2); //Give the div as max width 1220px plus the calculated left margin
}
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
        allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "project"}}}) {
            edges {
              node {
                id,
                frontmatter {
                  title
                  projecturl
                  featuredImage {
                    childImageSharp {
                      fixed(height: 200) {
                        ...GatsbyImageSharpFixed
                      }
                    }     
                  }        
                }
                fields {
                  slug
                }
              }
            }
          }
    }
  `)
  const Posts = data.allMarkdownRemark.edges
  .map(edge => <ProjectCard key={edge.node.id} post={edge.node} />)
    return (
        <ProjectsSectionContainer>
          <ProjectsBackContainer>
            <ProjectsContainer>
              <TitleContainer>
                <h1>I Miei Progetti |</h1> 
                <p>Questi sono i miei ultimi progetti di grafica e programmazione.</p> 
                <ScrollLinkText>
                  <a href='https://github.com/AlexPagnotta'>Vai al profilo Github</a>                       
                </ScrollLinkText> 
                <ScrollLinkText>
                  <a href='https://www.behance.net/alexpagnotta'>Vai al profilo Behance</a>                                                        
                </ScrollLinkText> 
              </TitleContainer>
              <ProjectCardsContainer>
                {Posts}
              </ProjectCardsContainer>
            </ProjectsContainer>            
          </ProjectsBackContainer>
        </ProjectsSectionContainer>
    )
  }
  export default ProjectsPage