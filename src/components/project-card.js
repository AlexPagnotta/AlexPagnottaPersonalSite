import React from "react"
import MediaQueries from "../Utils/mediaQueries"
import styled from "styled-components"
import colors from "../globals/colors"


const ProjectCardContainer = styled.div`
background-color:  ${colors.accentColor};
height: 350px;
margin: 30px;

${MediaQueries.queries.tablet`
  width: 200px;
  height: 300px;
  margin: 10px;
`}
`


const ProjectCard = ({ post }) => (
  <ProjectCardContainer>
    {post.frontmatter.title} ({post.frontmatter.date})
  </ProjectCardContainer>
)
export default ProjectCard