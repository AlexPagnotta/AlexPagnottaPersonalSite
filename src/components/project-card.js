import React from "react"
import MediaQueries from "../Utils/mediaQueries"
import styled from "styled-components"


const ProjectCardContainer = styled.div`
background-color: red;
width: 200px;
height: 350px;

${MediaQueries.queries.tablet`

`}
`


const ProjectCard = ({ post }) => (
  <ProjectCardContainer>
    {post.frontmatter.title} ({post.frontmatter.date})
  </ProjectCardContainer>
)
export default ProjectCard