import React from "react"
import MediaQueries from "../Utils/mediaQueries"
import styled from "styled-components"
import colors from "../globals/colors"


const ProjectCardContainer = styled.div`
background-color:  ${colors.primaryColor};
height: 350px;
width: 250px;
margin: 30px;
border-radius: 20px;
flex-shrink: 0;
display: flex;
flex-direction: column-reverse;
overflow: hidden;

/* this fixes the overflow:hidden in Chrome */
-webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);

${MediaQueries.queries.tablet`
  height: 200px;
  width: 150px;
  margin: 10px;
`}
`

const ProjectCardFooter = styled.div`
background-color:  ${colors.accentColor};
height: 150px;
width: 100%;
padding: 30px;

${MediaQueries.queries.tablet`
height: 120px;
`}

`


const ProjectCard = ({ post }) => (
  <ProjectCardContainer>
    <ProjectCardFooter>
      <h2>{post.frontmatter.title}</h2>
    </ProjectCardFooter>
    {/*{post.frontmatter.title} ({post.frontmatter.date})*/}
  </ProjectCardContainer>
)
export default ProjectCard